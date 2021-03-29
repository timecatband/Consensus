import _ from 'lodash'
//import ServerAPI from './external_data/ServerAPI'
import BlockchainAPISvc from './external_data/BlockchainAPI'
import GraphIndexLib from './external_data/GraphIndexLib'
import UserDataSvc from './UserData'
import GraphModel from '@timecat/graph-journal-shared/src/models/GraphModel'
import JournalNode from '@timecat/graph-journal-shared/src/models/JournalNode'
import JournalEdge from '@timecat/graph-journal-shared/src/models/JournalEdge'
import EventEmitter from '@timecat/graph-journal-shared/src/models/EventEmitter'
import G6 = require('@antv/g6');
import Edge from '@antv/g6/lib/item/edge.d.ts';

/*
  GraphData is the singleton service which contains any locally loaded graphs, which may only be portions of theoretically infinite graphs of nodes
  The service manages interactions with the server/database, and orchestrates shared graph state among components

  handy reference on the service pattern: https://medium.com/@alshdavid/react-state-and-services-edb95be48851
*/

class GraphData extends EventEmitter {
  externalAPI: any;
  graphs: Record<string, GraphModel>; // a collection of sub-graphs that have been loaded or created
  svcCanvas: G6.Graph; // ref to the canvas that is being displayed
  DisplayedGraph: GraphModel; // the graph which is being displayed, may be a combination of things
  DisplayedGraphKey: string // the key of the graph where user edits should be written
  selectedItems: any;
  filterPanelOpen: boolean;
  communities: any[];
  wtfTest: any[];

  // clean cache for comparison to pending dirty writes
  nodeCache: Record<string, JournalNode>;
  edgeCache: Record<string, JournalEdge>;

  // write buffer to prevent frequent small writes to db
  dirtyNodes: Record<string, JournalNode>;
  dirtyEdges: Record<string, JournalEdge>;

  idx: GraphIndexLib;


  constructor(externalAPI: any) {
    super()
    this.graphs = {}
    this.communities = []
    this.externalAPI = externalAPI;
    this.filterPanelOpen = false;

    this.nodeCache = {}
    this.edgeCache = {}
    this.dirtyNodes = {}
    this.dirtyEdges = {}

    this.externalAPI.on('PEER_SAVED_GRAPH', this.handlePeerUpdate.bind(this))
    this.externalAPI.on('PEER_DELETED_ITEMS', this.handlePeerDelete.bind(this))

    // call to the server for our initial graph, and register a listener for the socket response
    this.externalAPI.ready.then( () => {
      this.requestDataEntrypoint();
    });
    // intialize index lib tools with userKey
    UserDataSvc.ready.then( () => {
      this.idx = new GraphIndexLib(UserDataSvc.userKey, this.DisplayedGraphKey)
    })
  }

  ping() {
    this.externalAPI.ping()
  }

  yangGang( graphKey:string ) {
    this.externalAPI.yangGang(graphKey)
  }


  /*
    provide access to externalAPI
  */
  createGraph(graphName: string): Promise<any> {
    //return the promise, dont await it
    return this.externalAPI.createGraph(graphName)
  }

  /*
    Keep track of original data before any pending writes are applied to it
  */
  cacheGraphData(nodes:any, edges:any) {
    _.each(nodes, (n) => {
      this.nodeCache[n.id] = _.cloneDeep(n);
    });
    _.each(edges, (e) => {
      this.edgeCache[e.id] = _.cloneDeep(e);
    });
  }


  /*
    This is an important method, because it sets the DisplayedGraphKey

    The DisplayedGraphKey is intended to match the graph which is rendered in the canvas, so that it can be attached to the graph data
    if we try to serialize the DisplayedGraph. If multiple other graphs are combined into one to be displayed, the new result graph
    should have its own key so that it does not overwrite any existing graph in the database

    TODO: explain the importance of DisplayedGraphKey better, and determine a better pattern for multi-player graphing and combining sub-graphs.
  */
  setDisplayedGraph( graph: GraphModel ) {
    this.DisplayedGraphKey = graph.key
    this.DisplayedGraph = graph
    //the event lets the canvas know that it should reset the render
    this.emit("set-displayed-graph", graph)
  }

  /*
    This is where we begin, we determine if the user has saved a preferred view to blockchain

    If they have a saved view on blockchain, we will load all of views they have saved, process them into lists of Ids
    and then request those actual objects back from peers or the blockchain itself.

    If they do not have a saved view, we will start by requesting a default view from peers or blockchain
    The default view could be "all nodes in the community"

    TODO: implement all of this
    TODO: may require UI for the user to select which community they want to load first
  */
  async requestDataEntrypoint() {
    this.communities = await this.externalAPI.getAllCommunities()
    console.log("calling load community at initial entry", this.communities)
    this.emit("communities-loaded", this.communities)
    this.loadCommunityGraph(this.externalAPI.graphContractIds[0])
  }

  async loadCommunityGraph(graphKey) {
    console.log("loading graph...", graphKey)
    if ( this.graphs[graphKey] === undefined ) {
      let data = await this.externalAPI.loadGraphData(graphKey)
      this.handleExternalGraphLoad(data)
    } else {
      this.setDisplayedGraph(this.graphs[graphKey])
    }
  }

  // The initial graph load response
  handleExternalGraphLoad(graphData: GraphModel) {
    console.log("got graph from server", graphData, this.graphs)

    const newGraph = GraphModel.deSerialize(graphData)
    this.graphs[newGraph.key] = newGraph;
    this.cacheGraphData(newGraph.nodes, newGraph.edges)

    // TOOD: Here we should group nodes/edges by owner or graph_key or something to split into separate views
    // and then store them for browsing in UI
    let view = this.idx.getGlobalView(newGraph)
    this.setDisplayedGraph(view)

    //TODO: get graph names from contract
    this.emit("graph-loaded", newGraph.key)
  }


  // when the socket informs us that a peer has changed part of the graph
  //TODO: we will want to decide whether or not to accept and display peer nodes
  handlePeerUpdate(data: any) {

    data.nodes.forEach( (node) => {
      let existingNode = this.svcCanvas.findById(node.id)
      if (existingNode != undefined) {
        this.svcCanvas.update(node.id, node)
      } else {
        this.svcCanvas.addItem('node', node)
        this.emit("new-node-added", node)
      }
    })

    data.edges.forEach( (edge) => {
      let existingEdge = this.svcCanvas.findById(edge.id)
      if (existingEdge != undefined) {
        this.svcCanvas.update(edge.id, edge)
      } else {
        this.svcCanvas.addItem('edge', edge)
        this.emit("new-edge-added", edge)
      }
    })
  }

  // when the socket informs us that a peer has changed part of the graph
  //TODO: we will want to only listen to peer changes for graph_key's that we are both looking at
  handlePeerDelete(data: any) {
    if (data.nodes?.length > 0) {
      data.nodes.forEach( (i) => {
        this.svcCanvas.removeItem(i);
      })
    }
    if (data.edges?.length > 0) {
      data.edges.forEach( (i) => {
        this.svcCanvas.removeItem(i);
      })
    }
  }



  /*
    any keys in the update object should replace the same keys on the given node
    this method will also call to save
  */
  updateAndSaveNode(nodeId:string, update: any) {
    this.svcCanvas.update(nodeId, update)
    this.saveNodes([this.svcCanvas.findById(nodeId)])
  }

  addNewNode(x, y) {
    let newNode = new JournalNode("Be kind, free minds", "", "", x, y)
    this.DisplayedGraph.nodes.push(newNode)
    this.svcCanvas.addItem('node', newNode)
    this.cacheGraphData([newNode],[])
    this.saveNodes([this.svcCanvas.findById(newNode.id)])
    this.emit("new-node-added", newNode)
  }

  addNewEdge(source:string, target:string) {
    // we don't want to add duplicate edges, they would clutter up the db, so check that before adding
    let alreadyExistingEdge = this.svcCanvas.find('edge', (edge: Edge, key) => {
      return edge.getSource().getID() == source && edge.getTarget().getID() == target
    })

    if (alreadyExistingEdge === undefined) {
      let newEdge = new JournalEdge(source, target)
      this.DisplayedGraph.edges.push(newEdge)
      this.svcCanvas.addItem('edge', newEdge)
      this.cacheGraphData([],[newEdge])
      this.saveEdges([this.svcCanvas.findById(newEdge.id)])
      this.emit("new-edge-added", newEdge)
    }
  }


  /*
    Takes an array of nodes to be saved, marks them as dirty and queue's a debounced save
  */
  saveNodes(nodes: any[]) {
    _.each(nodes, (node) => {
      let n = node.getModel() // pull our model data out from the G6 model

      // check if we are trying to edit someone elses node, create an attachment instead
      let originalNode = this.nodeCache[n.id]
      let newNode = this.idx.indexUpdate(n, originalNode)

      if (newNode.id != originalNode.id) {
        newNode.owner = UserDataSvc.userKey

        //replace the node on the graph with our new one
        this.svcCanvas.removeItem(n.id)
        this.svcCanvas.addItem('node', newNode)

        // any edges that existed for the previous node should now exist for the new one
        _.each(this.edgeCache, (e) => {
          if (e.source == n.id) {
            let sourceCheck = this.svcCanvas.findById(newNode.id)
            let targetCheck = this.svcCanvas.findById(e.target)
            if(sourceCheck && targetCheck) {
              this.addNewEdge(newNode.id, e.target)
            }
          } else if (e.target == n.id) {
            let sourceCheck = this.svcCanvas.findById(e.source)
            let targetCheck = this.svcCanvas.findById(newNode.id)
            if(sourceCheck && targetCheck) {
              this.addNewEdge(e.source, newNode.id)
            }
          }
        })
      }

      console.log("result of merge", newNode)
      this.nodeCache[newNode.id] = newNode
      this.dirtyNodes[newNode.id] = newNode
    })
    this.saveDebounced()
  }

  /*
    Takes an array of edges to be saved, marks them as dirty and queue's a debounced save
  */
  saveEdges(edges: any[]) {
    _.each(edges, (edge) => {
      let e = edge.getModel()
      this.dirtyEdges[e.id] = e
    })
    this.saveDebounced()
  }


  /*
    gathers up any objects with pending changes, sends them for persistence, and clears the pending lists
  */
  saveDebounced = _.debounce(() => {
    //TODO: we should merge the pending changes into the DisplayedGraph data (i.e. save locally)
    // or just update that from the canvas somehow
    // this.setDisplayedGraph(newGraph)

    // TODO: disabling auto-save for now. We should auto-save to p2p instead of to blockchain
    let view = this.idx.getDisplayedViewData(this.DisplayedGraph)
    console.log("Auto-saving locally, not yet implemented", this.dirtyNodes, this.dirtyEdges, "view", view)
    //this.saveGraph()
  }, 3000)


  /*
    called when the user manually click the button to save the whole graph
  */
  saveGraph() {
    let nodes = _.values(this.dirtyNodes);
    let edges = _.values(this.dirtyEdges);

    const graphObj = {
      key: this.DisplayedGraphKey,
      nodes: _.map(nodes,(n) => {return n.jsonForBlockchain()}),
      edges: _.map(edges,(e) => {return e.jsonForBlockchain()})
    }

    this.cacheGraphData(this.dirtyNodes, this.dirtyEdges)

    // clear the write-buffer
    this.dirtyNodes = {};
    this.dirtyEdges = {};

    let view = this.idx.getDisplayedViewData(this.DisplayedGraph)

    console.log("GraphDataSvc saving to external API", graphObj, "view", view)
    this.externalAPI.saveGraph(this.DisplayedGraphKey, graphObj)
    this.externalAPI.saveView(view)
  }


  /*
    Delete items from the view and the database, can delete nodes or edges, but only one type at a time
    Should pass an array of item IDs, its OK to pass an array with a single id if you want to delete one.
  */
  deleteItemsByIds(type: string, itemIds: string[]) {
    itemIds.forEach( (i) => {
      this.svcCanvas.removeItem(i);
    })

    if (type == 'node') {
      this.externalAPI.deleteNodes(itemIds)
    } else if (type == 'edge') {
      this.externalAPI.deleteEdges(itemIds)
    }
  }



  /*
    filter panel display controls
  */
  hideFilterPanel() {
    this.filterPanelOpen = false;
    this.emit("filter-panel-change", this.filterPanelOpen)
  }
  toggleFilterPanel() {
    this.filterPanelOpen = !this.filterPanelOpen;
    this.emit("filter-panel-change", this.filterPanelOpen)
  }


  // TODO: this extracts a serializable object, doesnt really serialize. Not sure exactly what pattern is needed around here yet.
  serializeSelected(items: any) {
    return _.mapValues(items.nodes, (node) => {
      return node._cfg.model
    })
  }

  setSelected(items: object) {
    this.selectedItems = items;
    this.emit("selected-items", this.serializeSelected(items))
  }


  /*
    Wrapper for the g6 method find, type can be 'node', 'edge', or 'combo'
    https://g6.antv.vision/en/docs/api/graphFunc/find#graphfindtype-fn
  */
  findItem(type:string, fn: any) {
    return this.svcCanvas.find('edge', fn);
  }


// end of class
}

const GraphDataSvc = new GraphData(BlockchainAPISvc);

export default GraphDataSvc;

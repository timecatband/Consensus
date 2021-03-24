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
  DisplayedGraph: G6.Graph; // the graph which is being displayed on the canvas
  DisplayedGraphKey: string // the key of the graph where user edits should be written
  selectedItems: any;
  filterPanelOpen: boolean;
  communities: any[];

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
    This is an important method, because it sets the DisplayedGraphKey

    The DisplayedGraphKey is intended to match the graph which is rendered in the canvas, so that it can be attached to the graph data
    if we try to serialize the DisplayedGraph. If multiple other graphs are combined into one to be displayed, the new result graph
    should have its own key so that it does not overwrite any existing graph in the database

    TODO: explain the importance of DisplayedGraphKey better, and determine a better pattern for multi-player graphing and combining sub-graphs.
  */
  setDisplayedGraph( graph: GraphModel ) {
    this.DisplayedGraphKey = graph.key
    //the event lets the canvas know that it should reset the render
    this.emit("set-displayed-graph", graph)
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
    This is where we begin, we determine if the user has saved a preferred view to blockchain

    If they have a saved view on blockchain, we will load all of views they have saved, process them into lists of Ids
    and then request those actual objects back from peers or the blockchain itself.

    If they do not have a saved view, we will start by requesting a default view from peers or blockchain
    The default view could be "all nodes in the community"

    TODO: implement all of this
    TODO: may require UI for the user to select which community they want to load first
  */
  async requestDataEntrypoint() {
    console.error("Browsing and views not yet implemented, falling back to simple default request")
    this.communities = await this.externalAPI.getAllCommunities()
    console.log("whats up here",  this.communities )
    let firstGraphData = await this.externalAPI.loadGraphData(this.externalAPI.graphContractIds[0])
    this.handleServerGraphResponse(firstGraphData)
  }

  // The initial graph load response
  handleServerGraphResponse(graphData: GraphModel) {
    const newGraph = GraphModel.deSerialize(graphData)
    console.log("got graph from server", newGraph, this.graphs)

    this.cacheGraphData(newGraph.nodes, newGraph.edges)
    this.setDisplayedGraph(newGraph)
    this.graphs[newGraph.key] = newGraph;

    //TODO: get graph names from contract
    this.emit("graph-loaded", newGraph.key)
  }


  // when the socket informs us that a peer has changed part of the graph
  //TODO: we will want to only listen to peer changes for graph_key's that we are both looking at
  handlePeerUpdate(data: any) {

    data.nodes.forEach( (node) => {
      let existingNode = this.DisplayedGraph.findById(node.id)
      if (existingNode != undefined) {
        this.DisplayedGraph.update(node.id, node)
      } else {
        this.DisplayedGraph.addItem('node', node)
        this.emit("new-node-added", node)
      }
    })

    data.edges.forEach( (edge) => {
      let existingEdge = this.DisplayedGraph.findById(edge.id)
      if (existingEdge != undefined) {
        this.DisplayedGraph.update(edge.id, edge)
      } else {
        this.DisplayedGraph.addItem('edge', edge)
        this.emit("new-edge-added", edge)
      }
    })
  }

  // when the socket informs us that a peer has changed part of the graph
  //TODO: we will want to only listen to peer changes for graph_key's that we are both looking at
  handlePeerDelete(data: any) {
    if (data.nodes?.length > 0) {
      data.nodes.forEach( (i) => {
        this.DisplayedGraph.removeItem(i);
      })
    }
    if (data.edges?.length > 0) {
      data.edges.forEach( (i) => {
        this.DisplayedGraph.removeItem(i);
      })
    }
  }



  /*
    any keys in the update object should replace the same keys on the given node
    this method will also call to save
  */
  updateAndSaveNode(nodeId:string, update: any) {
    this.DisplayedGraph.update(nodeId, update)
    this.saveNodes([this.DisplayedGraph.findById(nodeId)])
  }

  addNewNode(x, y) {
    let newNode = new JournalNode("Be kind, free minds", "", "", x, y)
    this.DisplayedGraph.addItem('node', newNode)
    this.saveNodes([this.DisplayedGraph.findById(newNode.id)])
    this.emit("new-node-added", newNode)
  }

  addNewEdge(source:string, target:string) {
    // we don't want to add duplicate edges, they would clutter up the db, so check that before adding
    let alreadyExistingEdge = this.DisplayedGraph.find('edge', (edge: Edge, key) => {
      return edge.getSource().getID() == source && edge.getTarget().getID() == target
    })
    if (alreadyExistingEdge === undefined) {
      let newEdge = new JournalEdge(source, target)
      this.DisplayedGraph.addItem('edge', newEdge)
      this.saveEdges([this.DisplayedGraph.findById(newEdge.id)])
      this.emit("new-edge-added", newEdge)
    }
  }


  /*
    Takes an array of nodes to be saved, marks them as dirty and queue's a debounced save
  */
  saveNodes(nodes: any[]) {
    _.each(nodes, (node) => {
      let n = node.getModel() // pull our model data out from the G6 model
      let originalNode = this.nodeCache[n.id]
      let newNode = this.idx.indexUpdate(n, originalNode)
      console.log("result of merge", newNode)
      this.dirtyNodes[n.id] = n
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
    console.log("Auto-save disabled", this.dirtyNodes, this.dirtyEdges)
    // TODO: disabling auto-save for now. We should auto-save to p2p instead of to blockchain
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

    console.log("GraphDataSvc saving to external API", graphObj)
    this.externalAPI.saveGraph(this.DisplayedGraphKey, graphObj)
  }


  /*
    Delete items from the view and the database, can delete nodes or edges, but only one type at a time
    Should pass an array of item IDs, its OK to pass an array with a single id if you want to delete one.
  */
  deleteItemsByIds(type: string, itemIds: string[]) {
    itemIds.forEach( (i) => {
      this.DisplayedGraph.removeItem(i);
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
    return this.DisplayedGraph.find('edge', fn);
  }


// end of class
}

const GraphDataSvc = new GraphData(BlockchainAPISvc);

export default GraphDataSvc;

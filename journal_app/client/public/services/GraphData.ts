import _ from 'lodash'
//import ServerAPI from './external_data/ServerAPI'
import ServerAPI from './external_data/BlockchainAPI'
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

class GraphData { // this thing should probably just extend EventEmitter
  externalAPI: any;
  emitter: EventEmitter; // allows react components (and anything) to subscribe to changes in the graph model

  graphs: GraphModel[]; // a collection of sub-graphs that have been loaded or created
  DisplayedGraph: G6.Graph; // the graph which is being displayed on the canvas
  DisplayedGraphKey: string // the key of the graph where user edits should be written
  selectedItems: any;
  filterPanelOpen: boolean;

  // write cache to prevent frequent small writes to db
  dirtyNodes: Record<string, JournalNode>;
  dirtyEdges: Record<string, JournalEdge>;


  constructor(externalAPI: any) {
    this.graphs = []
    this.externalAPI = externalAPI;
    this.emitter = new EventEmitter();
    this.filterPanelOpen = false;

    // call to the server for our initial graph, and register a listener for the socket response
    this.externalAPI.on('GET_GRAPH_RSP', this.handleServerGraphResponse.bind(this))
    this.externalAPI.ready.then( () => {
      this.externalAPI.getGraph()
    });

    this.externalAPI.on('PEER_SAVED_GRAPH', this.handlePeerUpdate.bind(this))
    this.externalAPI.on('PEER_DELETED_ITEMS', this.handlePeerDelete.bind(this))

    this.dirtyNodes = {}
    this.dirtyEdges = {}
  }

  ping() {
    this.externalAPI.ping()
  }

  //shortcut to the emitter
  emit(event:string, data?:any) {
    this.emitter.emit(event, data)
  };

  //shortcut to the emitter
  on(event:string, fn:Function){
    this.emitter.on(event,fn)
  };

  toggleFilterPanel() {
    this.filterPanelOpen = !this.filterPanelOpen;
    this.emit("filter-panel-toggle", this.filterPanelOpen)
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

  // The initial graph load response
  handleServerGraphResponse(graphData: GraphModel) {
    const newGraph = GraphModel.deSerialize(graphData)
    console.log("got graph from external", newGraph)
    this.graphs.push(newGraph)
    this.setDisplayedGraph(newGraph)
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
    Wrapper for the g6 method find, type can be 'node', 'edge', or 'combo'
    https://g6.antv.vision/en/docs/api/graphFunc/find#graphfindtype-fn
  */
  findItem(type:string, fn: any) {
    return this.DisplayedGraph.find('edge', fn);
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
      this.emit("new-edge-added", newEdge)
      this.saveEdges([this.DisplayedGraph.findById(newEdge.id)])
    }
  }


  // returns a serializable object, e.g. non-circular literal object. The externalAPI will handle actual stringification
  serializeG6graph(key, g6graph) {
    let nodes = _.values(_.mapValues(g6graph.cfg.nodes, (node) => {
      return node.serialize()
    }));

    let edges = _.values(_.mapValues(g6graph.cfg.edges, (edge) => {
      return edge.serialize()
    }))

    return {key, nodes, edges}
  }


  /*
    Takes an array of nodes to be saved, marks them as dirty and queue's a debounced save
  */
  saveNodes(nodes: any[]) {
    _.each(nodes, (node) => {
      let n = node.getModel()
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
    console.log("Debounced write firing", this.dirtyNodes, this.dirtyEdges)

    let nodes = _.values(this.dirtyNodes);
    let edges = _.values(this.dirtyEdges);

    const graphObj = {
      key: this.DisplayedGraphKey,
      nodes: _.map(nodes,(n) => n.serialize()),
      edges: _.map(edges,(e) => e.serialize())
    }

    console.log("Debounced write firing to server")
    this.externalAPI.saveGraph(graphObj)
  }, 3000)


  /*
    called when the user manually click the button to save the whole graph
    TOOD: Saving the entire graph should be made obsolete by individual auto-saving after each event type, however
      this method will still be useful because its a "save subgraph" method, it can save any collection of nodes and edges
  */
  saveGraph() {
    this.externalAPI.saveGraph(this.serializeG6graph(this.DisplayedGraphKey, this.DisplayedGraph))
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

// end of class
}

const GraphDataSvc = new GraphData(ServerAPI);

export default GraphDataSvc;

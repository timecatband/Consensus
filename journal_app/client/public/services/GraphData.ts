import _ from 'lodash'
import ServerAPI from './ServerAPI'
import GraphModel from '@timecat/GraphJournalShared/models/GraphModel'
import JournalNode from '@timecat/GraphJournalShared/models/JournalNode'
import JournalEdge from '@timecat/GraphJournalShared/models/JournalEdge'
import EventEmitter from '@timecat/GraphJournalShared/models/EventEmitter'
import G6 = require('@antv/g6');
import Edge from '@antv/g6/lib/item/edge.d.ts';

/*
  GraphData is the singleton service which contains any locally loaded graphs, which may only be portions of theoretically infinite graphs of nodes
  The service manages interactions with the server/database, and orchestrates shared graph state among components

  handy reference on the service pattern: https://medium.com/@alshdavid/react-state-and-services-edb95be48851
*/

class GraphData { // this thing should probably just extend EventEmitter
  ServerAPI: any;
  initialized: boolean; // a bool to make sure we only try to set the ready promise once... theres probably a better way to do this
  emitter: EventEmitter; // allows react components (and anything) to subscribe to changes in the graph model

  graphs: GraphModel[]; // a collection of sub-graphs that have been loaded or created
  DisplayedGraph: G6.Graph; // the graph which is being displayed on the canvas
  DisplayedGraphKey: string // the key of the model that went into the DisplayedGraph
  selectedItems: any;

  constructor(ServerAPI: any) {
    this.graphs = []
    this.ServerAPI = ServerAPI;
    this.initialized = false;
    this.emitter = new EventEmitter();

    // call to the server for our initial graph, and register a listener for the socket response
    this.ServerAPI.registerResponseHandler('GET_GRAPH_RSP', this.handleServerGraphResponse.bind(this)).then( () => {
      this.ServerAPI.getGraph()
    });

  }

  //shortcut to the emitter
  emit(event:string, data?:any) {
    this.emitter.emit(event, data)
  };

  //shortcut to the emitter
  on(event:string, fn:Function){
    this.emitter.on(event,fn)
  };

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

  handleServerGraphResponse(graphData: GraphModel) {
    const newGraph = GraphModel.deSerialize(graphData)
    this.graphs.push(newGraph)
    this.setDisplayedGraph(newGraph)
  }

  /*
    any keys in the update object should replace the same keys on the given node
  */
  updateNode(nodeId:string, update: any) {
    this.DisplayedGraph.update(nodeId, update)
    this.saveNodes([this.DisplayedGraph.findById(nodeId)])
  }

  addNewNode(x, y) {
    let newNode = new JournalNode("new!", "some text", x, y)
    this.DisplayedGraph.addItem('node', newNode)
    this.emit("new-node-added", newNode)
  }

  addNewEdge(source:string, target:string) {
    // we don't want to add duplicate edges, they would clutter up the db, so check that before adding
    let alreadyExistingEdge = this.DisplayedGraph.find('edge', (edge: Edge, key) => {
      return edge.getSource().getID() == source && edge.getTarget().getID() == target
      return false
    })
    if (alreadyExistingEdge === undefined) {
      let newEdge = new JournalEdge(source, target)
      this.DisplayedGraph.addItem('edge', newEdge)
      this.emit("new-edge-added", newEdge)
      this.saveEdges([this.DisplayedGraph.findById(newEdge.id)])
    }
  }

  // returns a serializable object, e.g. non-circular literal object. The serverAPI will handle actual stringification
  serializeNode(node:any) {
    let n = node._cfg?.model || {}
    return {
      id: n.id,
      label: n.label,
      text: n.text,
      x: n.x,
      y: n.y
    }
  }

  // returns a serializable object, e.g. non-circular literal object. The serverAPI will handle actual stringification
  serializeEdge(edge:any) {
    let e = edge._cfg?.model || {}
    return {
      id: e.id,
      source: e.source,
      target: e.target
    }
  }

  // returns a serializable object, e.g. non-circular literal object. The serverAPI will handle actual stringification
  serializeG6graph(key, g6graph) {
    let nodes = _.values(_.mapValues(g6graph.cfg.nodes, (node) => {
      return this.serializeNode(node)
    }));

    let edges = _.values(_.mapValues(g6graph.cfg.edges, (edge) => {
      return this.serializeEdge(edge)
    }))

    return {key, nodes, edges}
  }

  /*
    called when the user manually click the button to save the whole graph
    TOOD: Saving the entire graph should be made obsolete by individual auto-saving after each event type, however
      this method will still be useful because its a "save subgraph" method, it can save any collection of nodes and edges
  */
  saveGraph() {
    ServerAPI.saveGraph(this.serializeG6graph(this.DisplayedGraphKey, this.DisplayedGraph))
  }

  /*
    Takes an array of nodes to be saved
  */
  saveNodes(nodes: any[]) {
    let graphObj = {
      key: this.DisplayedGraphKey,
      nodes: _.map(nodes,this.serializeNode),
      edges: []
    }
    ServerAPI.saveGraph( graphObj )
  }

  /*
    Takes an array of nodes to be saved
  */
  saveEdges(edges: any[]) {
    let graphObj = {
      key: this.DisplayedGraphKey,
      nodes: [],
      edges: _.map(edges,this.serializeEdge)
    }
    ServerAPI.saveGraph( graphObj )
  }

}

const GraphDataSvc = new GraphData(ServerAPI);

export default GraphDataSvc;

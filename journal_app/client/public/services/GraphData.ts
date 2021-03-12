import _ from 'lodash'
import ServerAPI from './ServerAPI'
import BaseORM from '@timecat/GraphJournalShared/external_data/BaseORM'
import GraphModel from '@timecat/GraphJournalShared/models/GraphModel'
import JournalNode from '@timecat/GraphJournalShared/models/JournalNode'
import JournalEdge from '@timecat/GraphJournalShared/models/JournalEdge'
import EventEmitter from '@timecat/GraphJournalShared/models/EventEmitter'
//import * as I from '@antv/g6/lib/types';

/*
  GraphData is the singleton service which contains any locally loaded graphs, which may only be portions of theoretically infinite graphs of nodes
  The service manages interactions with the server/database, and orchestrates shared graph state among components

  handy reference on the service pattern: https://medium.com/@alshdavid/react-state-and-services-edb95be48851
*/

class GraphData { // this thing should probably just extend EventEmitter
  ServerAPI: BaseORM;
  ready: Promise<void>; // a promise to let the UI know that the first data load has finished
  readyResolver: Function; // a function to resolve the ready promise
  initialized: boolean; // a bool to make sure we only try to set the ready promise once... theres probably a better way to do this
  renderGraph: Function; // to be set by the external graph canvas

  emitter: EventEmitter; // allows react components (and anything) to subscribe to changes in the graph model
  graphs: GraphModel[]; // a collection of graphs that have been loaded or created
  DisplayedGraph: GraphModel; // the graph which is being displayed, may be a combination of multiple other graphs
  selectedItems: object;

  constructor(ORM: BaseORM) {
    this.graphs = []
    this.DisplayedGraph = new GraphModel();
    this.ServerAPI = ORM;
    this.ready = new Promise( (resolve) => {
      this.readyResolver = resolve
    })
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

  handleServerGraphResponse(graphData: GraphModel) {
    this.DisplayedGraph = graphData
    if ( this.initialized == false ) {
      // theres probably a better way to do this
      this.readyResolver()
      this.initialized = true;
    }
  }

  addNewNode(x, y) {
    let newNode = new JournalNode("new!", "some text", x, y)
    this.DisplayedGraph.nodes.push(newNode)
    console.log("addNewNode in svc", this.DisplayedGraph)
    this.emit("new-node-added", newNode)
  }

  addNewEdge(leftNodeId:string, rightNodeId:string) {
    let newEdge = new JournalEdge(leftNodeId, rightNodeId)
    this.DisplayedGraph.edges.push(newEdge)
    console.log("addNewEdge in svc", this.DisplayedGraph)
    this.emit("new-edge-added", newEdge)
  }


}

const GraphDataSvc = new GraphData(ServerAPI);

export default GraphDataSvc;

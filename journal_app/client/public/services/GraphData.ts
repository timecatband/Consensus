import BaseORM from '@timecat/GraphJournalShared/external_data/BaseORM'
import GraphModel from '@timecat/GraphJournalShared/models/GraphModel'
import JournalNode from '@timecat/GraphJournalShared/models/JournalNode'
import ServerAPI from './ServerAPI'
//import * as I from '@antv/g6/lib/types';

/*
  GraphData is the singleton service which contains any locally loaded graphs, which may only be portions of theoretically infinite graphs of nodes
  The service manages interactions with the server/database, and orchestrates shared graph state among components

  handy reference on the service pattern: https://medium.com/@alshdavid/react-state-and-services-edb95be48851
*/

class GraphData {
  graphs: GraphModel[]; // a collection of graphs that have been loaded or created
  DisplayedGraph: GraphModel; // the graph which is being displayed, may be a combination of multiple other graphs
  ServerAPI: BaseORM;
  ready: Promise<void>; // a promise to let the UI know that the first data load has finished
  readyResolver: Function; // a function to resolve the ready promise
  initialized: boolean; // a bool to make sure we only try to set the ready promise once... theres probably a better way to do this

  constructor(ORM: BaseORM) {
    this.graphs = []
    this.DisplayedGraph = new GraphModel();
    this.ServerAPI = ORM;
    this.ready = new Promise( (resolve) => {
      this.readyResolver = resolve
    })
    this.initialized = false;

    // call to the server for our initial graph, and register a listener for the socket response
    this.ServerAPI.registerResponseHandler('GET_GRAPH_RSP', this.handleServerGraphResponse.bind(this)).then( () => {
      this.ServerAPI.getGraph()
    });

  }

  handleServerGraphResponse(graphData: GraphModel) {
    this.DisplayedGraph = graphData
    if ( this.initialized == false ) {
      // theres probably a better way to do this
      this.readyResolver()
      this.initialized = true;
    }
  }

}

const GraphDataSvc = new GraphData(ServerAPI);

export default GraphDataSvc;

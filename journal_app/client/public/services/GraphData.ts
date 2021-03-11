import BaseORM from '@timecat/GraphJournalShared/external_data/BaseORM'
import GraphModel from '@timecat/GraphJournalShared/models/GraphModel'
import JournalNode from '@timecat/GraphJournalShared/models/JournalNode'
import ServerAPI from './ServerAPI'
//import * as I from '@antv/g6/lib/types';

/*
  GraphData is the singleton service which contains any locally loaded graphs, which may only be portions of theoretically infinite graphs of nodes
  The service manages interactions with the server/database, and orchestrates shared graph state among components
*/
class GraphData {
  graphs: GraphModel[]; // a collection of graphs that have been loaded or created
  DisplayedGraph: GraphModel; // the graph which is being displayed, may be a combination of multiple other graphs
  ORM: BaseORM;

  constructor(ORM: BaseORM) {
    this.graphs = []
    this.DisplayedGraph = new GraphModel();
    this.ORM = ORM;
    ServerAPI.registerResponseHandler('GET_GRAPH_RSP', this.handleServerGraphResponse).then( () => {
      this.initializeGraphData()
    });
  }

  /*
    Load the initial graph data, intended to query some subset of total data from the server according to user prefs
  */
  initializeGraphData() {
    /*
    this.DisplayedGraph.nodes.push(new JournalNode('node0', 'Build an awesome\n graph journal'));
    this.DisplayedGraph.nodes.push(new JournalNode('node1', 'Testing out origin \nnode from model'));
    this.DisplayedGraph.nodes.push(new JournalNode('node2', 'Heyoo!'));
    */
    ServerAPI.getGraph()
  }

  handleServerGraphResponse(graphData: GraphModel) {
    console.log("got graph data from server");
    this.DisplayedGraph = graphData
  }

  /*
    Wrapper around the the actual server API, allows us to handle any local caching or magic before deciding to send requests to the server
  */
  upsertNode(node: JournalNode) {
    console.error("upsertNode is not really implemented");
    ServerAPI.upsertNode(JournalNode)
  }

}

let GraphDataSvc = new GraphData(ServerAPI);

export default GraphDataSvc;

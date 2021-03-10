import BaseORM from '@timecat/GraphJournalShared/external_data/BaseORM'
import Graph from '@timecat/GraphJournalShared/models/Graph'
import JournalNode from '@timecat/GraphJournalShared/models/JournalNode'
import ServerAPI from './external_data/ServerAPI.ts'
//import * as I from '@antv/g6/lib/types';

/*
  GraphData is the singleton service which contains any locally loaded graphs, which may only be portions of theoretically infinite graphs of nodes
  The service manages interactions with the server/database, and orchestrates shared graph state among components
*/
class GraphData {
  graphs: Graph[]; // a collection of graphs that have been loaded or created
  DisplayedGraph: Graph; // the graph which is being displayed, may be a combination of multiple other graphs
  ORM: BaseORM;

  constructor(ORM: BaseORM) {
    this.graphs = []
    this.DisplayedGraph = new Graph();
    this.ORM = ORM;
  }

  /*
    Load the initial graph data, intended to query some subset of total data from the server according to user prefs
  */
  initializeGraphData() {
    console.log("loading initial graph data");

    this.DisplayedGraph.nodes.push(new JournalNode('node0', 'Build an awesome\n graph journal'));
    this.DisplayedGraph.nodes.push(new JournalNode('node1', 'Testing out origin \nnode from model'));
    this.DisplayedGraph.nodes.push(new JournalNode('node2', 'Heyoo!'));
  }

  /*
    Wrapper around the the actual server API, allows us to handle any local caching or magic before deciding to send requests to the server
  */
  upsertNode(test: any) {
    ServerAPI.upsertNode(test)
  }

}

let GraphDataSvc = new GraphData(ServerAPI);
GraphDataSvc.initializeGraphData();

export default GraphDataSvc;

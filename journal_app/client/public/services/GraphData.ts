import JournalNode from '@timecat/GraphJournalShared/models/JournalNode.ts'
import BaseORM from '@timecat/GraphJournalShared/external_data/BaseORM.ts'
import ServerAPI from './external_data/ServerAPI.ts'
import * as I from '@antv/g6/lib/types';

/*
  GraphData is the singleton service which contains the locally loaded portion of a theoretically infinite graph of nodes
  All UI components should syncronize their interactions with graph state via this service
*/
class GraphData implements I.GraphData {
  nodes: I.NodeConfig[];
  edges: I.EdgeConfig[];
  ORM: BaseORM;

  constructor(ORM: BaseORM) {
    this.nodes = [];
    this.edges = [];
    this.ORM = ORM;
  }

  /*
    Load the initial graph data, intended to query some subset of total data from the server according to user prefs
  */
  initializeGraphData() {
    console.log("loading initial graph data");

    this.nodes.push(new JournalNode('node0', 'Build an awesome\n graph journal'));
    this.nodes.push(new JournalNode('node1', 'Testing out origin \nnode from model'));
    this.nodes.push(new JournalNode('node2', 'Heyoo!'));
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

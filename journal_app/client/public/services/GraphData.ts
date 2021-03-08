import JournalNode from '@timecat/GraphJournalShared/models/JournalNode.ts'
import BaseORM from '@timecat/GraphJournalShared/external_data/BaseORM.ts'
import ServerAPI from './external_data/ServerAPI.ts'
import * as I from '@antv/g6/lib/types';

console.log("GraphData service called");

/*
  GraphData is the singleton service which contains the locally loaded portion of a theoretically infinite graph of nodes
  All UI components should syncronize their interactions with graph state via this service
*/
class GraphData implements I.GraphData { //I.GraphData {
  nodes: I.NodeConfig[];
  edges: I.EdgeConfig[];
  ORM: BaseORM;

  constructor(ORM: BaseORM) {
    this.nodes = [];
    this.edges = [];
    this.ORM = ORM;
  }

  initializeGraphData() {
    console.log("loading initial graph data");

    this.nodes.push(new JournalNode('node0', 'Build an awesome\n graph journal'));
    this.nodes.push(new JournalNode('node1', 'Testing out origin node from model'));
    this.nodes.push(new JournalNode('node2', 'Heyoo!'));
  }

}

let GraphDataSvc = new GraphData(ServerAPI);
GraphDataSvc.initializeGraphData();

export default GraphDataSvc;

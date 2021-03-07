import JournalNode from '@timecat/GraphJournalShared/models/JournalNode.ts'
import BaseORM from './external_data/BaseORM.ts'

/*
  GraphData is the singleton service which contains the locally loaded portion of a theoretically infinite graph of nodes
  All UI components should syncronize their interactions with graph state via this service
*/
class GraphData {
  nodes: [string];
  edges: [string];
  ORM: BaseORM;

  constructor() {
    this.nodes = [];
    this.edges = [];

    //this.ORM = ORMFactory.getInstance('sqlite')

  }

  initializeGraphData() {
    console.log("loading initial graph data");
    this.nodes.push(new JournalNode('node0', 'Build an awesome\n graph journal'))
    this.nodes.push(new JournalNode('node1', 'Testing out origin node from model'))
    this.nodes.push(new JournalNode('node2', 'Heyoo!'))
  }

}

let GraphDataSvc = new GraphData()
GraphDataSvc.initializeGraphData()

export default GraphDataSvc;

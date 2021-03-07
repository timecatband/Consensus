import JournalNode from '/journal_app/shared/models/JournalNode.ts'

/*
  GraphData is the singleton service which contains the locally loaded portion of a theoretically infinite graph of nodes
  All UI components should syncronize their interactions with graph state via this service
*/
class GraphData {
  nodes: [string];
  labels: [string];

  constructor(id: string, label: string) {
    this.id = id;
    this.label = label;
  }

}

GraphDataSvc = new GraphData()

export default GraphDataSvc;

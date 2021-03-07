import JournalNode from '/journal_app/shared/models/JournalNode.ts'
import JournalEdge from '/journal_app/shared/models/JournalEdge.ts'

/*
  BaseORM defines methods that different children should implement for reading/writing
  data from external sources
*/
interface BaseORM {
  getNodes(): [JournalNode];
  getEdges(): [JournalEdge];
  upsertNode(node: JournalNode): void;
}

export default BaseORM;

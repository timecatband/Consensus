import JournalNode from '../models/JournalNode.ts'
import JournalEdge from '../models/JournalEdge.ts'

/*
  BaseORM defines methods that different children should implement for reading/writing data from external sources
*/
abstract class BaseORM {
  abstract getNodes(): JournalNode[];
  abstract getEdges(): JournalEdge[];
  abstract upsertNode(node: JournalNode): void;
}

export default BaseORM;

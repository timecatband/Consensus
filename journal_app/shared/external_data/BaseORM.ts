import JournalNode from '../models/JournalNode'
import JournalEdge from '../models/JournalEdge'
import GraphModel from '../models/GraphModel'

/*
  BaseORM defines methods that different children should implement for reading/writing data from external sources
*/
abstract class BaseORM {
  abstract registerResponseHandler(keys:string, handler: Function): Promise<any>;
  abstract getGraph(): GraphModel | void;
  abstract getNodes(): JournalNode[];
  abstract getEdges(): JournalEdge[];
  abstract upsertNode(node: JournalNode): void;
}

export default BaseORM;

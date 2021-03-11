import JournalNode from '../models/JournalNode'
import JournalEdge from '../models/JournalEdge'
import GraphModel from '../models/GraphModel'

/*
  BaseORM defines methods that different children should implement for reading/writing data from external sources

  TODO: this class might not be helping anything. We have several data providers that are pretty similar, but not exactly similar, maybe remove this -KW 2021-03
*/
abstract class BaseORM {
  abstract registerResponseHandler(keys:string, handler: Function): Promise<any>;
  abstract getGraph(): GraphModel | void;
  abstract getNodes(): JournalNode[];
  abstract getEdges(): JournalEdge[];
  abstract upsertNode(node: JournalNode): void;
}

export default BaseORM;

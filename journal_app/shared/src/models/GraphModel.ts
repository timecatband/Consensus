const uuid = require('uuid');
import * as I from '@antv/g6/lib/types';
import JournalNode from './JournalNode';
import JournalEdge from './JournalEdge';

class GraphModel implements I.GraphData {

  key: string;
  nodes: JournalNode[];
  edges: JournalEdge[];
  meta: object;

  constructor(nodes?:JournalNode[], edges?:JournalEdge[], meta?: any, key?: string) {
    this.nodes = nodes || [];
    this.edges = edges || [];
    this.meta = meta || {};
    this.key = key || uuid.v4()
  }

  serializeGraph() {
    return JSON.stringify({nodes: this.nodes, edges: this.edges})
  }

  public static deSerialize(grObj: any) {
    return new GraphModel(grObj.nodes, grObj.edges, grObj.meta, grObj.key)
  }

}

export default GraphModel;
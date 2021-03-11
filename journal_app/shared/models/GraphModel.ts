import * as I from '@antv/g6/lib/types';
import JournalNode from './JournalNode';
import JournalEdge from './JournalEdge';

class GraphModel implements I.GraphData {

  nodes: JournalNode[];
  edges: JournalEdge[];
  meta: object;

  constructor() {
    this.nodes = [];
    this.edges = [];
    this.meta = {};
  }

  serializeGraph() {
    return JSON.stringify({nodes: this.nodes, edges: this.edges})
  }

}

export default GraphModel;

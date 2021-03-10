import * as I from '@antv/g6/lib/types';
import JournalNode from './JournalNode';
import JournalEdge from './JournalEdge';

class Graph implements I.GraphData {

  nodes: JournalNode[];
  edges: JournalEdge[];
  meta: object;

  constructor() {
    this.nodes = [];
    this.edges = [];
    this.meta = {};
  }

}

export default Graph;

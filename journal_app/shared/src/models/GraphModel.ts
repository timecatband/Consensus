import _ from 'lodash';
import uuid from 'uuid';
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

  jsonForBlockchain() {
    return {
      graph_key: this.key,
      nodes: _.map(this.nodes, (n) => {return n.jsonForBlockchain()}),
      edges: _.map(this.edges, (e) => {return e.jsonForBlockchain()})
    }
  }

  public static deSerialize(grObj: any) {
    return new GraphModel(
      _.map(grObj.nodes, JournalNode.deSerialize),
      _.map(grObj.edges, JournalEdge.deSerialize),
      grObj.meta,
      grObj.key
    )
  }

}

export default GraphModel;

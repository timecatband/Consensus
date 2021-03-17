const uuid = require('uuid');
import JournalNode from './JournalNode';

class PublicSquare {
  rootNodes: JournalNode[];

  constructor(rootNodes: JournalNode[]) {
    this.rootNodes = rootNodes;
  }

}

export default PublicSquare;

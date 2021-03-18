const uuid = require('uuid');
import JournalNode from './JournalNode';

class PublicSquare {
  rootNodesIds: string[];

  constructor(rootNodesIds: string[]) {
    this.rootNodesIds = rootNodesIds;
  }

}

export default PublicSquare;

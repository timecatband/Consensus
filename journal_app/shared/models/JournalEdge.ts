const uuid = require('uuid');
import * as I from '@antv/g6/lib/types';
import JournalNode from './JournalNode.ts'

class JournalEdge implements I.EdgeConfig {
  [key: string]: any; // This is a required part of the interface but I dunno what it means - KW
  leftNode: JournalNode;
  rightNode: JournalNode;
  strength: number;
  id: string;
  label?: string;


  constructor(leftNode: JournalNode, rightNode: JournalNode, strength: number) {
    this.leftNode = leftNode;
    this.rightNode = rightNode;
    this.strength = strength;
    this.id = uuid.v4()
  }

}

export default JournalEdge;

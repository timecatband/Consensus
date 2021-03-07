import { v4 as uuidv4 } from 'uuid';
import JournalNode from './JournalNode.ts'

class JournalEdge {
  leftNode: JournalNode;
  rightNode: JournalNode;
  strength: number;
  id: string;
  label: string;


  constructor(leftNode: JournalNode, rightNode: JournalNode, strength: number) {
    this.leftNode = leftNode;
    this.rightNode = rightNode;
    this.strength = strength;
    this.id = uuidv4()
  }

}

export default JournalEdge;

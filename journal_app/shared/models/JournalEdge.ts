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
  meta?: object;


  constructor(leftNode: JournalNode, rightNode: JournalNode, strength: number, meta?: object, id?: string) {
    this.leftNode = leftNode;
    this.rightNode = rightNode;
    this.strength = strength;

    if ( id == undefined ) {
      this.id = uuid.v4()
    } else {
      this.id = id
    }

    if ( meta != undefined) {
      this.meta = meta
    }

  }

  serialize() {
    return {
      "id": this.id,
      "leftNode": this.leftNode.id,
      "rightNode": this.rightNode.id,
      "strength": this.strength,
      "meta": JSON.stringify(this.meta || {})
    }
  }

  public static deSerialize(obj: any) {
    return new JournalEdge(obj.leftNode, obj.rightNode, obj.strength, obj.meta, obj.id)
  }

}

export default JournalEdge;

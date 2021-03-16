const uuid = require('uuid');
import * as I from '@antv/g6/lib/types';

class JournalEdge implements I.EdgeConfig {
  [key: string]: any; // This is a required part of the interface but I dunno what it means - KW
  source: string; //node id
  target: string; //node id
  strength: number;
  id: string;
  label?: string;
  meta?: object;


  constructor(source: string, target: string, strength?: number, meta?: object, id?: string) {
    this.source = source;
    this.target = target;
    this.strength = strength;
    this.meta = meta

    if ( id == undefined ) {
      this.id = uuid.v4()
    } else {
      this.id = id
    }

  }

  serialize() {
    return {
      "id": this.id,
      "source": this.source,
      "target": this.target,
      "strength": this.strength,
      "meta": JSON.stringify(this.meta || {})
    }
  }

  public static deSerialize(obj: any) {
    return new JournalEdge(obj.leftNode, obj.rightNode, obj.strength, obj.meta, obj.id)
  }

}

export default JournalEdge;

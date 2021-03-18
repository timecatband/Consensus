const uuid = require('uuid');
import * as I from '@antv/g6/lib/types';

class JournalEdge implements I.EdgeConfig {
  [key: string]: any; // This is a required part of the interface but I dunno what it means - KW
  source: string; //node id
  target: string; //node id
  strength: number;
  id: string;
  owner?: string; // address id of the original node creator // TODO: node ownership should be handled by rules around invested stake insted of this? -KW-2021-03
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

  // convert to non-circular json object
  serialize() {
    return {
      id: this.id,
      owner: this.owner,
      source: this.source,
      target: this.target,
      strength: this.strength,
      meta: JSON.stringify(this.meta || {})
    }
  }

  // wrap the object as the blockchain api expects
  jsonForBlockchain() {
    return {
      id: this.id,
      owner: this.owner,
      json: this.serialize()
    }
  }

  public static fromBlockchain(json: any) {
    return JournalEdge.deSerialize(JSON.parse(json))
  }

  public static deSerialize(obj: any) {
    return new JournalEdge(obj.source, obj.target, obj.strength, obj.meta, obj.id)
  }

}

export default JournalEdge;

const uuid = require('uuid');
import * as I from '@antv/g6/lib/types';

class JournalNode implements I.NodeConfig {
  [key: string]: any; // This is a required part of the interface but I dunno what it means - KW
  id: string;
  owner?: string; // address id of the original node creator // TODO: node ownership should be handled by rules around invested stake insted of this? -KW-2021-03
  label: string;
  link: string;
  x: number;
  y: number;
  meta: any;

  constructor(label: string, text?: string, link?: string, x?:number, y?:number, id?: string, owner?:string, meta?: any) {
    this.label = label || '';
    this.link = link || '';
    this.text = text || '';
    this.x = x;
    this.y = y;
    this.meta = meta || {};
    this.owner = owner

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
      label: this.label,
      link: this.link,
      text: this.text,
      owner: this.owner,
      x: this.x,
      y: this.y,
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
    return JournalNode.deSerialize(JSON.parse(json))
  }

  public static deSerialize(obj: any) {
    return new JournalNode(obj.label, obj.text, obj.link, obj.x, obj.y, obj.id, obj.owner, obj.meta)
  }

}

export default JournalNode;

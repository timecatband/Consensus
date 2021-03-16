const uuid = require('uuid');
import * as I from '@antv/g6/lib/types';

class JournalNode implements I.NodeConfig {
  [key: string]: any; // This is a required part of the interface but I dunno what it means - KW
  id: string;
  label: string;
  link: string;
  x: number;
  y: number;
  meta: any;

  constructor(label: string, text?: string, link?: string, x?:number, y?:number, id?: string, meta?: any) {
    this.label = label;
    this.link = link;
    this.text = text;
    this.x = x;
    this.y = y;
    this.meta = meta;

    if ( id == undefined ) {
      this.id = uuid.v4()
    } else {
      this.id = id
    }
  }

  public static deSerialize(obj: any) {
    return new JournalNode(obj.label, obj.text, obj.link, obj.x, obj.y, obj.id, obj.meta)
  }

}

export default JournalNode;

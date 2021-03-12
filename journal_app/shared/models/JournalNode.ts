const uuid = require('uuid');
import * as I from '@antv/g6/lib/types';

class JournalNode implements I.NodeConfig {
  [key: string]: any; // This is a required part of the interface but I dunno what it means - KW
  id: string;
  label: string;
  x: number;
  y: number;

  constructor(label: string, text?: string, x?:number, y?:number, id?: string) {
    this.label = label;
    this.text = text
    this.x = x;
    this.y = y;

    if ( id == undefined ) {
      this.id = uuid.v4()
    } else {
      this.id = id
    }
  }

  public static deSerialize(obj: any) {
    return new JournalNode(obj.label, obj.text, obj.x, obj.y, obj.id)
  }

}

export default JournalNode;

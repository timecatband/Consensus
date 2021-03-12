const uuid = require('uuid');
import * as I from '@antv/g6/lib/types';

class JournalNode implements I.NodeConfig {
  [key: string]: any; // This is a required part of the interface but I dunno what it means - KW
  id: string;
  label: string;

  constructor(label: string, text?: string, id?: string) {
    this.label = label;
    this.text = text

    if ( id == undefined ) {
      this.id = uuid.v4()
    } else {
      this.id = id
    }

  }

}

export default JournalNode;

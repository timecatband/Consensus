import * as I from '@antv/g6/lib/types';

class JournalNode implements I.NodeConfig {
  [key: string]: any; // This is a required part of the interface but I dunno what it means - KW
  id: string;
  label: string;

  constructor(id: string, label: string) {
    this.id = id;
    this.label = label;
  }

}

export default JournalNode;

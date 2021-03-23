const uuid = require('uuid');
import JournalNode from './JournalNode'


/*
  Represents a merging of nodes, can be displayed as a node itself in the graph
*/
class JournalAttachment extends JournalNode {
  nodes: Record<string,JournalNode>;
  isAttachment: boolean;

  constructor(label:string, text?:string, link?:string, x?:number, y?:number, id?:string, owner?:string, meta?: any) {
    super(label, text, link, x, y, id, owner, meta);
    this.isAttachment = true;
    this.nodes = {};
  }

  public static fromNode(current:JournalNode, original:JournalNode) {
    // do not cary forward id and owner onto the new key node
    let a = new JournalAttachment(current.label, current.text, current.link, current.x, current.y, undefined, undefined, current.meta)
    a.nodes[current.id] = current;
    return a
  }

  public static fromAttachment(current:JournalAttachment, original:JournalAttachment) {
    // do not cary forward id and owner onto the new key node
    let a = new JournalAttachment(current.label, current.text, current.link, current.x, current.y, undefined, undefined, current.meta)
    a.nodes = current.nodes;
    a.nodes[original.id] = original;
    return a
  }

}

export default JournalAttachment;

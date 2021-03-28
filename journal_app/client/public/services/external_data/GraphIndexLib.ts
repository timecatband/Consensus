import _ from 'lodash'
import JournalAttachment from '@timecat/graph-journal-shared/src/models/JournalAttachment'
import JournalNode from '@timecat/graph-journal-shared/src/models/JournalNode'

/*
  Static library methods to enforce policy for graph data indexing
  prepares nodes for persisting to durable stores, and determines
  when data must be copied or mutated
*/

class GraphIndexLib {
  userKey: string;
  graphKey: string;

  constructor( userKey:string, graphKey:string ) {
    this.userKey = userKey;
    this.graphKey = graphKey;
  }

  /*
    User is trying to edit a node which is not their own,
    so treat it as the creation of an attachment

    TODO: handle the types better here, overload signature?
  */
  copyAndAttach(current:JournalNode, original:JournalNode) {
    if( current.isAttachment ) {
      return JournalAttachment.fromAttachment(current as JournalAttachment, original as JournalAttachment);
    }
    else {
      return JournalAttachment.fromNode(current, original);
    }
  }

  /*
    userKey, the id of the current user, used to check for ownership
  */
  indexUpdate(current:JournalNode, original:JournalNode) {
    console.log("Index update, current:", current, "original:", original)
    if (current.owner != this.userKey) {
      return this.copyAndAttach(current, original);
    } else {
      return current
    }
  }

  /*
    userKey, the id of the current user, used to check for ownership
  */
  indexDelete(current:JournalNode, original:JournalNode) {
    console.log("indexDelete not implemented")
  }

}

export default GraphIndexLib;

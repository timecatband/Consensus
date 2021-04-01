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


  /*
    TODO: replace the entire data model with labels-as-keys and signature lists etc

    Currently this will return the "global union view" of the graph data.
    It will take a list of nodes from the graph, which may be both nodes and attachments
    and it will remove any from the view which are included in a higher attachment
  */
  getGlobalUnion(graphData) {
    let data = _.cloneDeep(graphData)
    let nodesDict = {}
    let replacedDict = {}

    _.each( data.nodes, (n) => {
      nodesDict[n.id] = n
      if (n.isAttachment) {
        _.each(n.nodes, (nn) => {
          replacedDict[nn.id] = true;
        })
      }
    })

    _.each( replacedDict, (r, key) => {
      if (nodesDict[key]) {
        delete nodesDict[key]
      }
    })

    data.nodes = _.values(nodesDict)
    data.edges = _.filter(data.edges, (e) => {
      return nodesDict[e.source] && nodesDict[e.target]
    })
    data.key = "union" // useful for react
    data.name = "Union"
    return data
  }

  /*
    Get the graph view that contains only attachments shared by multiple users
  */
  getGlobalIntersection(graphData) {
    let data = _.cloneDeep(graphData)
    data.nodes = _.filter(data.nodes, (n) => {
      n.isAttachment == true;
    })
    data.key = 'intersection' //useful for react
    data.name = "Intersection"
    return data
  }

  getUserViews(graphData) {
    let userList = _.uniq(_.map(graphData.nodes, (n) => {
      return n.owner
    }))
    let views = {}
    _.each(userList, (u) => {
      views[u] = {
        key: u,
        name: `${u.substring(0,5)}'s view`, //just use shortended version as name for now
        nodes: _.filter(graphData.nodes, (n) => {
          return n.owner == u
        }),
        edges: _.filter(graphData.edges, (e) => {
          return e.owner == u
        })
      }
    })
    return views
  }

  /*
    Prepared the data that is expected to be persistsed in the block chain view index
  */
  getDisplayedViewData(graphData) {
    return {
      stringId: graphData.key,
      label: "Friendly label hay", // TODO: UI for setting view label
      nodes: _.map(graphData.nodes, (n) => {return n.id}),
      edges: _.map(graphData.edges, (e) => {return e.id}),
    }
  }

}

export default GraphIndexLib;

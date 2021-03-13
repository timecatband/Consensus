const _ = require('lodash')
import GraphModel from "@timecat/GraphJournalShared/models/GraphModel"
import JournalNode from '@timecat/GraphJournalShared/models/JournalNode'
import JournalEdge from '@timecat/GraphJournalShared/models/JournalEdge'
import { SqliteClient } from "@timecat/GraphJournalShared/external_data/SqliteClient"

// TODO: this should probably share some common GraphManager base class with the client side
class GraphDataManager {
  sql: SqliteClient;

  constructor(sqlClient: SqliteClient) {
    this.sql = sqlClient
    this.tryInitalizeSqlSchema()
  }


  async tryInitalizeSqlSchema() {
    const nodeRows = await this.sql.query(" select * from sqlite_master where name = 'nodes' and type = 'table' ")
    if (nodeRows.length == 0) {
      console.log("initializing table nodes")
      this.sql.query(" create table nodes ( graph_key text, id text, label text, text text, x real, y real, PRIMARY KEY(graph_key, id) ) ")
    }

    const edgeRows = await this.sql.query(" select * from sqlite_master where name = 'edges' and type = 'table' ")
    if (edgeRows.length == 0) {
      console.log("initializing table edges")
      this.sql.query(" create table edges ( graph_key text, id text, source text, target text, PRIMARY KEY(graph_key, id) ) ")
    }
  }


  async overwriteGraph(graphData: any):Promise<void> {
    return new Promise( async (resolve) => {
      console.log("gonna save the graph now!", graphData)

      let nodeQuery = "insert or replace into nodes VALUES "
      _.each( graphData.nodes, (val, key) => {
        // TODO parameters need to be escaped to avoid sql injection
        nodeQuery = nodeQuery + `('${graphData.key}','${val.id}','${val.label}','${val.text}',${val.x},${val.y}),`
      })
      nodeQuery = nodeQuery.slice(0,-1) // remove last trailing ,

      await this.sql.query(nodeQuery)

      let edgeQuery = "insert or replace into edges VALUES "
      _.each( graphData.edges, (val, key) => {
        // TODO parameters need to be escaped to avoid sql injection
        edgeQuery = edgeQuery + `('${graphData.key}','${val.id}','${val.source}','${val.target}'),`
      })
      edgeQuery = edgeQuery.slice(0,-1) // remove last trailing ,
      await this.sql.query(edgeQuery)

      resolve()
    })
  }


  loadGraph(key: string):Promise<GraphModel> {
    return new Promise( (resolve) => {
      console.log("loading graph with key", key)
      let graphData = new GraphModel();
      graphData.nodes.push(new JournalNode('node0', 'Build an awesome\n graph journal'));
      graphData.nodes.push(new JournalNode('node1', 'Testing out origin \nnode from model'));
      graphData.nodes.push(new JournalNode('node2', 'Heyoo!'));
      resolve(graphData)
    });
  }

}

export default GraphDataManager

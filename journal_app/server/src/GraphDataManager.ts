const _ = require('lodash')
import GraphModel from "@timecat/graph-journal-shared/src/models/GraphModel"
import { SqliteClient } from "@timecat/graph-journal-shared/src/external_data/SqliteClient"

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
      this.sql.query(" create table nodes ( graph_key text, id text, label text, text text, x real, y real, meta text PRIMARY KEY(graph_key, id) ) ")
    }

    const edgeRows = await this.sql.query(" select * from sqlite_master where name = 'edges' and type = 'table' ")
    if (edgeRows.length == 0) {
      console.log("initializing table edges")
      this.sql.query(" create table edges ( graph_key text, id text, source text, target text, strength number, meta text PRIMARY KEY(graph_key, id) ) ")
    }
  }


  async saveSubgraph(graphData: any):Promise<void> {
    return new Promise( async (resolve) => {

      if (graphData.nodes.length > 0) {
        let nodeQuery = "insert or replace into nodes VALUES "
        _.each( graphData.nodes, (val, key) => {
          // TODO parameters need to be escaped to avoid sql injection
          nodeQuery = nodeQuery + `('${graphData.key}','${val.id}','${val.label}','${val.text}',${val.x},${val.y},'${JSON.stringify(val.meta)}'),`
        })
        nodeQuery = nodeQuery.slice(0,-1) // remove last trailing ,

        await this.sql.query(nodeQuery)
      }

      if (graphData.edges.length > 0) {
        let edgeQuery = "insert or replace into edges VALUES "
        _.each( graphData.edges, (val, key) => {
          // TODO parameters need to be escaped to avoid sql injection
          edgeQuery = edgeQuery + `('${graphData.key}','${val.id}','${val.source}','${val.target}','${val.strength}','${val.meta}'),`
        })
        edgeQuery = edgeQuery.slice(0,-1) // remove last trailing ,

        await this.sql.query(edgeQuery)
      }

      resolve()
    })
  }


  async deleteItems(graphData: any):Promise<void> {
    return new Promise( async (resolve) => {

      if (graphData.nodes?.length > 0) {
        let whereList = ''
        _.each( graphData.nodes, (val, key) => {
          // TODO parameters need to be escaped to avoid sql injection
          whereList = whereList + `'${val}',`
        })
        whereList = whereList.slice(0,-1) // remove last trailing comma ,

        let nodeQuery = `delete from nodes where id in (${whereList})`
        let nodeEdgeQuery = `delete from edges where source in (${whereList}) or target in (${whereList})`

        await this.sql.query(nodeQuery)
        await this.sql.query(nodeEdgeQuery)
      }

      if (graphData.edges?.length > 0) {
        let edgeQuery = "delete from edges where id in ("
        _.each( graphData.edges, (val, key) => {
          // TODO parameters need to be escaped to avoid sql injection
          edgeQuery = edgeQuery + `'${val}',`
        })
        edgeQuery = edgeQuery.slice(0,-1) // remove last trailing comma ,
        edgeQuery = edgeQuery + ')'

        await this.sql.query(edgeQuery)
      }

      resolve()
    })
  }


  async loadGraph(key: string):Promise<GraphModel> {
    return new Promise( async (resolve) => {
      console.log("loading graph with key", key)

      // TODO: imeplement graph_key where clause stuff
      const nodes = await this.sql.query("select * from nodes")
      const edges = await this.sql.query("select * from edges")

      const graphKey = nodes[0].graph_key
      const graph = GraphModel.deSerialize({nodes: nodes, edges: edges, key: graphKey})

      resolve(graph)
    });
  }

}

export default GraphDataManager

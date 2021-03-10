const app = require('express')();
const config = require("@timecat/GraphJournalShared/config/config.dev.json")
import SocketListener from './src/SocketListener'
import { SqliteClient } from "@timecat/GraphJournalShared/external_data/SqliteClient"

import JournalNode from '@timecat/GraphJournalShared/models/JournalNode'
import JournalEdge from '@timecat/GraphJournalShared/models/JournalEdge'


class ServerGraphData {
  nodes: JournalNode[];
  edges: JournalEdge[];

  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  loadFromSql(sqlDb: any) {
      // TODO
  }
  dumpFromSql(sqlDb: any) {
      // TODO
  }
  
  serializeGraph() {
      return JSON.stringify({nodes: this.nodes, edges: this.edges});
  }
}


/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
*/

let SqliteClientSvc = new SqliteClient()
let graphData = new ServerGraphData();
let SocketSingleton = new SocketListener(graphData);

SocketSingleton.listen();



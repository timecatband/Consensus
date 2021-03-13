const app = require('express')();
const config = require("@timecat/GraphJournalShared/config/config.dev.json")
import SocketListener from './src/SocketListener'
import GraphDataManager from './src/GraphDataManager'
import { SqliteClient } from "@timecat/GraphJournalShared/external_data/SqliteClient"



/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
*/

let SqlSingleton = new SqliteClient();
let DataMgrSingleton = new GraphDataManager(SqlSingleton)
let SocketSingleton = new SocketListener(DataMgrSingleton, SqlSingleton);

SocketSingleton.listen();

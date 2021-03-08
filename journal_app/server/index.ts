const app = require('express')();
const http = require('http').Server(app);
const config = require("@timecat/GraphJournalShared/config/config.dev.json")
import SocketListener from './src/SocketListener'
import { SqliteClient } from "@timecat/GraphJournalShared/external_data/SqliteClient"


/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
*/

let SqliteClientSvc = new SqliteClient()
let SocketSingleton = new SocketListener(http, SqliteClientSvc);

http.listen(3000, () => {
  console.log('listening on *:3000');
  SocketSingleton.initializeSocketListeners()
});

const app = require('express')();
const http = require('http').Server(app);
const config = require("@timecat/GraphJournalShared/config/config.dev.json")
import SocketListener from './src/SocketListener'

/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
*/

let SocketSingleton = new SocketListener(http);

http.listen(3000, () => {
  console.log('listening on *:3000');
  SocketSingleton.initializeSocketListeners()
});

const app = require('express')();
const config = require("@timecat/GraphJournalShared/config/config.dev.json")
import SocketListener from './src/SocketListener'
import { SqliteClient } from "@timecat/GraphJournalShared/external_data/SqliteClient"

import JournalNode from '@timecat/GraphJournalShared/models/JournalNode'
import JournalEdge from '@timecat/GraphJournalShared/models/JournalEdge'
import GraphModel from "@timecat/GraphJournalShared/models/GraphModel"


/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
*/

let graphData = new GraphModel();
graphData.nodes.push(new JournalNode('node0', 'Build an awesome\n graph journal'));
graphData.nodes.push(new JournalNode('node1', 'Testing out origin \nnode from model'));
graphData.nodes.push(new JournalNode('node2', 'Heyoo!'));

let SqlSingleton = new SqliteClient();
let SocketSingleton = new SocketListener(graphData, SqlSingleton);

SocketSingleton.listen();

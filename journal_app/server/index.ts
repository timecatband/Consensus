const app = require('express')();
import SocketListener from './src/SocketListener'
import GraphDataManager from './src/GraphDataManager'
import { SqliteClient } from "@timecat/graph-journal-shared/src/external_data/SqliteClient"

let SqlSingleton = new SqliteClient();
let DataMgrSingleton = new GraphDataManager(SqlSingleton)
let SocketSingleton = new SocketListener(DataMgrSingleton, SqlSingleton);

SocketSingleton.listen();

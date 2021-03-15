const _ = require('lodash')
import GraphDataManager from "./GraphDataManager"
const WebSocket = require("ws")

class SocketListener {
  graphData: any;
  sqlServer: any;
  server: any;
  connections: any;
  connectionCounter: number;

  constructor(dataMgr: GraphDataManager, sqlServer: any) {
      this.graphData = dataMgr;
      this.sqlServer = sqlServer;
      this.connections = {};
      this.connectionCounter = 0;
  }

  formatAndSend(socket: any, type: string, data?: any) {
    let payload = JSON.stringify({type:type, data:data})
    console.log("sending!", type)
    socket.send(payload);
  }

  listen() {
    this.server = new WebSocket.Server({ port: 3000});
    this.server.on("connection", this.handleNewConnection.bind(this))
  }

  handleConnectionClose(socketId:string, code:number, reason:string) {
    console.log("Socket connection closed, id:", socketId, "code:", code, "reason:", reason)
  }

  handleNewConnection(socket: any) {
    socket.clientId = this.connectionCounter++;
    console.log("Socket client connected, id#:", socket.clientId)

    let allClients = []
    this.server.clients.forEach( (val) => {
      allClients.push(val.clientId)
    })
    console.log("Open client IDs:", allClients)

    socket.on("close", (code:number, reason:string) => { this.handleConnectionClose(socket.clientId, code, reason) } )

    socket.on("message", (message: any) => {
        let data;
        try {
          data = JSON.parse(message);
        } catch (error) {
          console.error(error)
          return;
        }
        console.log("Socket message ", data.type, "from id#:", socket.clientId)

        switch (data.type) {
          case "PING":
            this.formatAndSend(socket, "PING_PANG")
            break;

          case "GET_GRAPH":
            this.graphData.loadGraph(data.data).then( (graph) => {
              this.formatAndSend(socket, "GET_GRAPH_RSP", graph)
            })
            break;

          case "SAVE_GRAPH":
            this.graphData.saveSubgraph(data.data).then(() => {
              this.formatAndSend(socket, "SAVE_GRAPH_RSP", "success")
            });
            break;

          case "QUERY_SQL":
            this.sqlServer.query(data.data).then( (rows) => {
              socket.send( JSON.stringify({type:"SQL_QUERY_RSP", data:rows}, null, 4) );
            }).catch( (err) => {
              socket.send( JSON.stringify({type:"SQL_QUERY_RSP", data:err}, null, 4) )
            });
            break;

          default:
            console.log("Unknown socket message type", data, message);
        }
    });
  }
}

export default SocketListener

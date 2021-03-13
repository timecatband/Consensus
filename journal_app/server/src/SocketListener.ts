import GraphDataManager from "./GraphDataManager"
const WebSocket = require("ws")

class SocketListener {
  graphData: any
  sqlServer: any
  server: any

  constructor(dataMgr: GraphDataManager, sqlServer: any) {
      this.graphData = dataMgr
      this.sqlServer = sqlServer
  }

  listen() {
      let connectionCounter = 0
      this.server = new WebSocket.Server({ port: 3000});
      this.server.on("connection", (socket: any)=> {
          connectionCounter++;
          let connectionId = connectionCounter;

          function formatAndSend(type: string, data?: any) {
            let payload = JSON.stringify({type:type, data:data})
            console.log("sending!", payload)
            socket.send(payload);
          }

          socket.on("message", (message: any) => {
              let data;
              try {
                data = JSON.parse(message);
              } catch (error) {
                console.error(error)
              }
              console.log("Socket message ", data.type, "from", connectionId)

              switch (data.type) {
                case "PING":
                  formatAndSend("PING_PANG")
                  break;

                case "GET_GRAPH":
                  this.graphData.loadGraph(data.data).then( (graph) => {
                    formatAndSend("GET_GRAPH_RSP", graph)
                  })
                  break;

                case "SAVE_GRAPH":
                  this.graphData.overwriteGraph(data.data).then(() => {
                    formatAndSend("SAVE_GRAPH_RSP", "success")
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
      });
  }
}

export default SocketListener

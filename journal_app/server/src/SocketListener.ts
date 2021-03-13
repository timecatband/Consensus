import GraphModel from "@timecat/GraphJournalShared/models/GraphModel"
const WebSocket = require("ws")

class SocketListener {
  graphData: any
  sqlServer: any
  server: any

  constructor(graphData: GraphModel, sqlServer: any) {
      this.graphData = graphData
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
                  formatAndSend("GET_GRAPH_RSP", this.graphData)
                  break;

                case "SAVE_GRAPH":
                  console.log("its a graph!", data)
                  break;

                case "QUERY_SQL":
                  console.log("got quertsql", data)
                  let cb = (rows) => {
                    socket.send(JSON.stringify({type:"SQL_QUERY_RSP", data:rows}, null, 4));
                  }
                  let rows = this.sqlServer.query(data.data, cb)
                  break;

                default:
                  console.log("Unknown socket message type", data, message);
              }

          });
      });
  }
}

export default SocketListener

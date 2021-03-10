const http = require('http')
const config = require("@timecat/GraphJournalShared/config/config.dev.json")
const WebSocket = require("ws")

class SocketListener {
  graphData: any
  server: any

  constructor(graphData: any) {
      this.graphData = graphData
  }

  listen() {
      let connectionCounter = 0
      this.server = new WebSocket.Server({ port: 3000});
      this.server.on("connection", (socket: any)=> {
          connectionCounter++;
          let connectionId = connectionCounter;

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
                  console.log("got ping from id", connectionId);
                  socket.send("PingPang!");
                  break;

                case "GET_GRAPH":
                  const reply = this.graphData.serializeGraph();
                  socket.send(reply);
                  break;

                default:
                  console.log("Unknown socket message type", data, message);
              }

          });
      });
  }
}

export default SocketListener

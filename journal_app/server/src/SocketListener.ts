const http = require('http')
const config = require("@timecat/GraphJournalShared/config/config.dev.json")
const WebSocket = require("ws")

class SocketListener {
  graphData: any
  server: any

  constructor(graphData: any) { //this should be type http.Server but that wsnt working and I'm sick of chasing type defs
      this.graphData = graphData
  }

  listen() {
      this.server = new WebSocket.Server({ port: 3000});
      this.server.on("connection", (socket: any)=> {
          socket.on("message", (message: any) => {
              const data = JSON.parse(message);
              switch (data.type) {
                case "GET_GRAPH":
                  const reply = this.graphData.serializeGraph();
                  socket.send(reply);
              }
          });        
      });
  }
}

export default SocketListener

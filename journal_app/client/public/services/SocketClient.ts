import socket from "./Socket"

const config = require("@timecat/GraphJournalShared/config/config.dev.json")
const WebSocket = require("ws")

class SocketListener {
  graphView: any
  socket: any

  constructor(graphView any) { //this should be type http.Server but that wsnt working and I'm sick of chasing type defs
      this.graphView = graphView
  }

  listen() {
    this.socket = new WebSocket("ws://localhost:3000");
    socket.on("open", () => {
        socket.on("message", messageHandler)
        socket.write(JSON.stringify({type: "GET_GRAPH"});
    });

    messageHandler(message: any) {
        console.log(message);
    }
}

export default SocketListener

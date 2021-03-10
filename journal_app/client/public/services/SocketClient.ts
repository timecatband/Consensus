const config = require("@timecat/GraphJournalShared/config/config.dev.json")
const WebSocket = require("ws")

class SocketListener {
  socket: any;

  constructor() {
      this.socket = new WebSocket("ws://localhost:3000");
  }

  messageHandler(message: any) {
      console.log(message);
  }

  listen() {
    this.socket.on("open", () => {
        this.socket.on("message", this.messageHandler);
        this.socket.send(JSON.stringify({type: "GET_GRAPH"}));
    });
  }
}

export default SocketListener;

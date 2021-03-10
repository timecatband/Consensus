/*
  Singleton service for the websocket connection
*/

class SocketClient {
  socket: any;

  constructor() {
      this.socket = new WebSocket("ws://localhost:3000");
      this.socket.onopen = () => {
        console.log("Socket connection opened")
        this.socket.onmessage = this.messageHandler;
      };
  }

  messageHandler(message: any) {
    console.log("Received socket message:", message);
  }

}

let SocketClientSvc = new SocketClient();

export default SocketClientSvc.socket;

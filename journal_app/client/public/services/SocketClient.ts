/*
  Singleton service for the websocket connection
*/

class SocketClient {
  socket: Promise<any>;
  responseHandlers: object;

  constructor() {
    this.responseHandlers = {};

    function connect(thisObj) {
      return new Promise( resolve => {
        const socket = new WebSocket("ws://localhost:3000");
        socket.onopen = () => {
          console.log("Socket connection opened", thisObj.responseHandlers)
          thisObj.socket.onmessage = thisObj.messageHandler.bind(thisObj);
          resolve(socket)
        };

        socket.onclose = function(e) {
          console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
          setTimeout(function() {
            connect(thisObj);
          }, 3000);
        };
    })};
    this.socket = connect(this)
  }

  registerResponseHandler(key: string, handler: Function) {
    // TODO: this only allows one registered handler per type, extend to lists
    return this.socket.then( () => {
      this.responseHandlers[key] = handler
      console.log('response handler registered', this.responseHandlers)
    })
  }

  messageHandler(message: any) {
    console.log("raw socket response", message)
    let parsed = JSON.parse(message.data);
    console.log("Received socket message:", parsed.type);
    if ( parsed.type && this.responseHandlers && this.responseHandlers[parsed.type] ) {
      this.responseHandlers[parsed.type](parsed.data)
    }
  }

}

let SocketClientSvc = new SocketClient();

export default SocketClientSvc;

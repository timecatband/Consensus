/*
  Singleton service for the websocket connection
*/
import config from '../config/config';
import EventEmitter from '@timecat/GraphJournalShared/models/EventEmitter'

class SocketClient extends EventEmitter {
  socket: Promise<any>;

  constructor() {
    super()

    function connect(thisObj) {
      return new Promise( resolve => {
        const socket = new WebSocket(`${config.graphServerProtocol}://${config.graphServerHost}:${config.graphServerPort}`);
        socket.onopen = () => {
          console.log("Socket connection opened")
          socket.onmessage = thisObj.messageHandler.bind(thisObj);
          resolve(socket)
        };

        socket.onclose = function(e) {
          console.log('Socket is closed. Trying to reconnect...', e.reason);
          setTimeout(function() {
            connect(thisObj);
          }, 3000);
        };
    })};
    this.socket = connect(this)
  }

  messageHandler(message: any) {
    let parsed = JSON.parse(message.data);
    console.log("Received socket message:", parsed.type, parsed.data);
    if ( parsed.type ) {
      this.emit(parsed.type, parsed.data)
    }
  }

}

let SocketClientSvc = new SocketClient();

export default SocketClientSvc;

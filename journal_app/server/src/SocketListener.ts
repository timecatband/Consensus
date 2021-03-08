const http = require('http')
const config = require("@timecat/GraphJournalShared/config/config.dev.json")

class SocketListener {
  io: any; //this would ideally be typed as socket.io, but whatever no one is going to break this
  sqlDb: any;

  constructor(http: any, sqlDb: any) { //this should be type http.Server but that wsnt working and I'm sick of chasing type defs
    this.sqlDb = sqlDb
    this.io = require('socket.io')(http, {
      cors: {
        origin: config.socketAllowedOrigin,
        methods: ["GET", "POST"],
        allowedHeaders: ["timecat!"],
        credentials: true
      }
    });
  }

  initializeSocketListeners() {
    console.log("Socket listeners started")

    this.io.on('connection', (socket: any) => {
      console.log('a user connected', socket.id);

      socket.on('upsert-graph-node', (message: any) => {
        console.log("got upsert: ", message)
        this.sqlDb.query('create table nodes')
      });
    });

  }

}

export default SocketListener

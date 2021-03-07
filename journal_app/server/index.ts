const app = require('express')();
const http = require('http').Server(app);
const config = require("@timecat/GraphJournalShared/config/config.dev.json")

const io = require('socket.io')(http, {
  cors: {
    origin: config.socketAllowedOrigin,
    methods: ["GET", "POST"],
    allowedHeaders: ["timecat!"],
    credentials: true
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

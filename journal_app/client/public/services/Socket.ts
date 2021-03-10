import { io } from "socket.io-client";
const config = require("@timecat/GraphJournalShared/config/config.dev.json")

/*
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  DEPRECATED - use SocketClient instead
  consider removing socket.io dependency if we don't come back to this file

  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  Singleton service for the websocket connection
*/

const socket = io(config.serverAddress,
  {
    withCredentials: true,
    extraHeaders: {
      "timecat!": "band" // TODO: figure out the proper way to handle this and the CORS stuff (see socketListener in server)
    }
  });

socket.on("connect", () => {
  console.log("Socket connected", socket.id);
});

export default socket;

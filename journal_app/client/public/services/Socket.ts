console.log("hellooo")
import { io } from "socket.io-client";
const config = require("@timecat/GraphJournalShared/config/config.dev.json")

/*
  Singleton service for the websocket connection
*/

console.log("test in socket", config)

const socket = io(config.serverAddress,
  {
    withCredentials: true,
    extraHeaders: {
      "timecat!": "band"
    }
  });

console.log("Socket service called", socket.id)

socket.on("connect", () => {
  console.log("Socket connected", socket.id);
});

export default socket;

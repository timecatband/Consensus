import SocketClient from './SocketClient'

/*
  Singleton service ServerAPI provides methods for reading/writing via our own journal server instance
*/
class ServerAPI {
  socketClient: any;
  ready: Promise<any>;

  constructor( socketClient: any ) {
    this.ready = socketClient.socket;
    this.socketClient = socketClient
  }

  formatAndSend(type:string, data?: any) {
    console.log("sending", type)
    this.ready.then( (socket) => {
      const payload = JSON.stringify({type:type, data:data})
      socket.send(payload);
    })
  }

  // pass through to the socket
  on(key: string, handler: Function): Promise<void> {
    return this.socketClient.on(key, handler)
  }

  ping(data: any) {
    this.formatAndSend("PING", data);
  }

  saveGraph(graphData: any) {
    this.formatAndSend("SAVE_GRAPH", graphData);
  }

  getGraph() {
    this.formatAndSend("GET_GRAPH");
  }

  upsertNode(data: any) {
    this.formatAndSend("UPSERT_NODE", data);
  }

  deleteNodes( nodeIds: string[] ) {
    this.formatAndSend("DELETE_ITEMS", {nodes: nodeIds});
  }

  deleteEdges( edgeIds: string[] ) {
    this.formatAndSend("DELETE_ITEMS", {edges: edgeIds});
  }

  querySql(query:string) {
    this.formatAndSend("QUERY_SQL", query);
  }

}

/*
  TODO: commenting these out for now, but if we want to be able to switch back and forth btw server and blockchain, then we should
  switch based on config
*/
//const SocketClientSvc = new SocketClient();
const SocketClientSvc = {}
var ServerApiSvc = new ServerAPI(SocketClientSvc)

export default ServerApiSvc;

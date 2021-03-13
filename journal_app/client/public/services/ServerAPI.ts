import BaseORM from '@timecat/GraphJournalShared/external_data/BaseORM.ts'
// import Socket from '../Socket'
import SocketClient from './SocketClient'

/*
  Singleton service ServerAPI provides the BaseORM methods for reading/writing via our own journal server instance
*/
class ServerAPI extends BaseORM {
  constructor() {
    super();
  }

  formatAndSend(type:string, data?: any) {
    SocketClient.socket.then( (socket) => {
      const payload = JSON.stringify({type:type, data:data})
      socket.send(payload);
    })
  }

  // pass through to the socket
  registerResponseHandler(key: string, handler: Function): Promise<void> {
    return SocketClient.registerResponseHandler(key, handler)
  }

  ping(data: any) {
    console.log("ServerAPI PING called");
    this.formatAndSend("PING", data);
  }

  saveGraph(graphData: any) {
    console.log("sending SAVE_GRAPH", graphData)
    this.formatAndSend("SAVE_GRAPH", graphData);
  }

  getGraph() {
    console.log("sending GET_GRAPH")
    this.formatAndSend("GET_GRAPH");
  }

  getNodes() {
    console.error("ServerAPI.getNodes is not implemented");
    return [];
  }

  getEdges() {
    console.error("ServerAPI.getNodes is not implemented");
    return [];
  }

  upsertNode(data: any) {
    this.formatAndSend("UPSERT_NODE", data);
  }

  querySql(query:string) {
    this.formatAndSend("QUERY_SQL", query);
  }

}

var ServerApiSvc = new ServerAPI()

export default ServerApiSvc;

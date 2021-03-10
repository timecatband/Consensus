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

  ping(data: any) {
    console.log("ServerAPI PING called");
    const payload = JSON.stringify({type:"PING", data:data})
    SocketClient.send(payload);
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
    console.log("ServerAPI upsertNode called", data);
    const payload = JSON.stringify({type:"UPSERT_NODE", data:data})
    SocketClient.send(payload)
  }

}

var ServerApiSvc = new ServerAPI()

export default ServerApiSvc;

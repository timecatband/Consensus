import BaseORM from '@timecat/GraphJournalShared/external_data/BaseORM.ts'
import Socket from '../Socket'

/*
  Singleton service ServerAPI provides the BaseORM methods for reading/writing via our own journal server instance
*/
class ServerAPI extends BaseORM {
  constructor() {
    super();
  }

  getNodes() {
    console.error("ServerAPI.getNodes is not implemented");
    return [];
  }

  getEdges() {
    console.error("ServerAPI.getNodes is not implemented");
    return [];
  }

  upsertNode(test: any) {
    console.log("ServerAPI upsertNode called", test);
    Socket.emit("upsert-graph-node", test)
    return;
  }

}

var ServerApiSvc = new ServerAPI()

export default ServerApiSvc;

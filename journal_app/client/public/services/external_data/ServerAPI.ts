import BaseORM from '@timecat/GraphJournalShared/external_data/BaseORM.ts'

/*
  Singleton service ServerAPI provides the BaseORM methods for reading/writing via our own journal server instance
*/
class ServerAPI extends BaseORM {
  constructor() {
    super();
    console.log("Hey its an API client");
  }

  getNodes() {
    console.error("ServerAPI.getNodes is not implemented");
    return [];
  }

  getEdges() {
    console.error("ServerAPI.getNodes is not implemented");
    return [];
  }

  upsertNode() {
    console.error("ServerAPI.getNodes is not implemented");
    return;
  }

}

var ServerApiSvc = new ServerAPI()

export default ServerApiSvc;

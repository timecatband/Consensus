import BaseORM from './BaseORM.ts'

/*
  ServerAPI provides the BaseORM methods by interacting with a server instance
  It's not obvious that we really need a server layer, so leaving this unimplemented for now - KW 2021-03
*/
class ServerAPI extends BaseORM {
  console.error("not implemented")
}

export default ServerAPI;

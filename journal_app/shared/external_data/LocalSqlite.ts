import BaseORM from './BaseORM.ts'

/*
  LocalSqlite is intended to allow reading and writing serialized GraphNodes from a local sqlite file which can be checked into the repo
  for demo purposes or easy initial dev versions.
*/
class LocalSqlite extends BaseORM {
  constructor() {
    super();
    console.log("LocalSqlite not implemented");
  }

  getNodes() {
    console.error("LocalSqlite.getNodes is not implemented");
    return [];
  }

  getEdges() {
    console.error("LocalSqlite.getNodes is not implemented");
    return [];
  }

  upsertNode() {
    console.error("LocalSqlite.getNodes is not implemented");
    return;
  }
}

export default LocalSqlite;

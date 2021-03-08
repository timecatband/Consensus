import BaseORM from './BaseORM'
import config from '../config/config.dev.json'
const sqlite3 = require('sqlite3').verbose();

/*
  LocalSqlite is intended to allow reading and writing serialized GraphNodes from a local sqlite file which can be checked into the repo
  for demo purposes or easy initial dev versions.
*/
class SqliteClient extends BaseORM {
  db: any;

  constructor() {
    super();
    this.db = new sqlite3.Database(config.sqliteFilepath, (err: any) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the SQlite database.');
    });
  }

  /*
    get all nodes from the db
  */
  getNodes() {
    console.error("LocalSqlite.getNodes is not implemented");
    return [];
  }

  /*
    get all edges from the db
  */
  getEdges() {
    console.error("LocalSqlite.getNodes is not implemented");
    return [];
  }

  /*
    add or overwrite a single node
  */
  upsertNode() {
    console.error("LocalSqlite.getNodes is not implemented");
    return;
  }


  query(query: string) {
    console.log("query called......", query)
    this.db.all(query, [], (err: any, rows: any) => {
      if (err) {
        throw err;
      }
      rows.forEach((row:any) => {
        console.log(row.name);
      });
    });
  }

}

export { SqliteClient };

import BaseORM from './BaseORM'
import config from '../config/config.dev.json'
const sqlite3 = require('sqlite3').verbose();

/*
  LocalSqlite is intended to allow reading and writing serialized GraphNodes from a local sqlite file which can be checked into the repo
  for demo purposes or easy initial dev versions.
*/
class SqliteClient {
  db: Promise<any>;

  constructor() {
    this.db = new Promise( (resolve) => {
      const sql = new sqlite3.Database(config.sqliteFilepath, (err: any) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Connected to the SQlite database.');
        resolve(sql)
      });
    });
  }

  query(query: string):Promise<any> {
    return this.db.then( (sql) => {
      return new Promise( (resolve, reject) => {

        let result = [];
        try {
          sql.all(query, [], (err: any, rows: any) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(rows);
            }
          });
        } catch (error) {
          console.error(error)
          reject(error)
        }

    })})
  }

  static printQueryResult(rows) {
    rows.forEach((row:any) => {
      console.log(row);
    });
  };

}

export { SqliteClient };

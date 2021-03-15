import React, { useEffect, useState } from 'react'
import ServerAPI from '../services/ServerAPI'

let once = false;

function SqlClientInterface(props: any): any {

  const [queryStr, setQuery] = useState("select * from sqlite_master");
  const [resultStr, setResult] = useState('');

  function onQueryClick() {
    console.log("queryCLick", queryStr)
    ServerAPI.querySql(queryStr)
  }

  // this use effect will only call once on load to set up the graph and window listeners
  useEffect(() => {

    function handleResponse(rows) {
      setResult(JSON.stringify(rows,null,1))
    }

    if (once == false) {
      once = true;
      ServerAPI.ready.then( () => {
        ServerAPI.on('SQL_QUERY_RSP', handleResponse);
      });
    }

  }, []); // Empty array ensures that effect is only run on mount


  return  (
    <div className="com-sql-client">
      <label> Sql client </label>
      <textarea id="query"
          onChange={event => setQuery(event.target.value)}
          defaultValue={queryStr}
          rows={10}
          cols={50}>
      </textarea>
      <button onClick={onQueryClick}>Send query</button>
      <textarea id="result"
          onChange={event => setResult(event.target.value)}
          defaultValue={resultStr}
          rows={10}
          cols={50}>
      </textarea>
    </div>
  )

}

export default SqlClientInterface

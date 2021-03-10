import React from 'react'

function SqlClientInterface(props: any): any {

  console.log("Test sqclient", props)

  function onQueryClick() {
    console.log("got a click to ping the server")
  }

  return  (
    <div className="com-sql-client">
      <label> Sql client </label>
      <textarea id="query" rows={10} cols={50}></textarea>
      <button onClick={onQueryClick}>Send query</button>
      <textarea id="result" rows={10} cols={50}></textarea>
    </div>
  )

}

export default SqlClientInterface

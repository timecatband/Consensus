import React, { useEffect, useState } from 'react'
import ServerAPI from '../services/ServerAPI'

function onAddButtonClick() {
  console.log("got add button click")
}

function onPingServerClick() {
  console.log("got a click to ping the server")
  ServerAPI.ping("test message")
}

function GraphControlBar(props: any): any {
  return  (
    <div className="graph-control-bar">
      <input id="newName" type='text'></input>
      <button onClick={onAddButtonClick}>Add node</button>
      <button onClick={onPingServerClick}>Ping server</button>
    </div>
  )
}

export default GraphControlBar

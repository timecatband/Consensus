import React, { useEffect, useState } from 'react'
import ServerAPI from '../services/ServerAPI'
import GraphDataSvc from '../services/GraphData'

function GraphControlBar(props: any): any {

  function onAddButtonClick() {
    console.log("got add button click")
    console.log("props", props)
  }

  function onSaveClick() {
    console.log("got a click to save graph")
    GraphDataSvc.saveGraph()
  }

  function onPingServerClick() {
    console.log("got a click to ping the server")
    ServerAPI.ping("test message")
  }

  function editFilters() {
    console.log("got a click to editFilters")
  }


  return  (
    <div className="graph-control-bar">
      <div className="leftBar">
        <input id="newName" type='text'></input>
        <button onClick={onAddButtonClick}>Search</button>
        <span className="muteText instructionLabel">Dbl-click to add. Click to select, Shift+click for multi</span>
      </div>
      <div className="rightBar">
        <span className="muteText confirmSave">Saved!</span>
        <button onClick={onSaveClick}>Save graph</button>
        <button onClick={onPingServerClick}>Ping server</button>
        <button onClick={editFilters}>Filters</button>
      </div>
    </div>
  )
}

export default GraphControlBar

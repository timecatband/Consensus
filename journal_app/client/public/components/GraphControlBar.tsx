import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../services/GraphData'

function GraphControlBar(props: any): any {

  function onPingServerClick() {
    GraphDataSvc.ping()
  }

  function editFilters() {
    GraphDataSvc.toggleFilterPanel()
  }

  return  (
    <div className="graph-control-bar">
      <div className="leftBar">
        <input id="newName" type='text'></input>
        <button onClick={onPingServerClick}>Search</button>
        <select id="selector">
          <option value="default">Default</option>
          <option value="addNode">Add Node</option>
          <option value="addEdge">Add Edge</option>
        </select>
        <span className="muteText instructionLabel">Dbl-click to add. Click to select, Shift+click for multi</span>
      </div>
      <div className="rightBar">
        <button onClick={onPingServerClick}>Ping server</button>
        <button onClick={editFilters}>Filters</button>
      </div>
    </div>
  )
}

export default GraphControlBar

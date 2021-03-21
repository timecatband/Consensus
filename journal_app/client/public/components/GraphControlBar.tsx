import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../services/GraphData'
import { yangGang } from '../services/external_data/ConsensusGraphContract'

function GraphControlBar(props: any): any {

  function onPingServerClick() {
    GraphDataSvc.ping()
  }

  function editFilters() {
    GraphDataSvc.toggleFilterPanel()
  }

  function plzGimmeMoreMrYang() {
    yangGang(GraphDataSvc.DisplayedGraphKey);
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
        <span className="muteText instructionLabel">Try clicking 'Filters and Settings'</span>
      </div>
      <div className="rightBar">
        {/*<button onClick={onPingServerClick}>Ping server</button>*/}
        <button onClick={GraphDataSvc.saveGraph.bind(GraphDataSvc)}>Save to chain</button>
        <button onClick={plzGimmeMoreMrYang}>Air DROP!</button>
        <button onClick={editFilters}>Filters and Settings</button>
      </div>
    </div>
  )
}

export default GraphControlBar

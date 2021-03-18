import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../services/GraphData'
import BlockchainAPISvc from '../services/external_data/BlockchainAPI'
import { elonMusk } from '../services/external_data/ConsensusGraphContract'

function GraphControlBar(props: any): any {

  function onPingServerClick() {
    GraphDataSvc.ping()
  }

  async function createConsensusGraph() {
    // todo: make this better, probably don't pull in BlockchainAPISvc here
    const inputElement = document.getElementById('newGraphName') as HTMLInputElement;
    const graphName = inputElement.value
    if (graphName.length > 0) {
      await BlockchainAPISvc.createGraph(graphName);
      console.log('created the new graph!', graphName)
    }
  }

  function editFilters() {
    GraphDataSvc.toggleFilterPanel()
  }

  function gimmeElonMusk() {
    elonMusk(GraphDataSvc.contract);
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
      <div>
        <input id="newGraphName" type='text' />
        <button onClick={createConsensusGraph}>Create Graph</button>
      </div>
      <div>
        <button onClick={gimmeElonMusk}>AIRDROP!</button>
      </div>
      <div className="rightBar">
        <button onClick={onPingServerClick}>Ping server</button>
        <button onClick={editFilters}>Filters</button>
      </div>
    </div>
  )
}

export default GraphControlBar

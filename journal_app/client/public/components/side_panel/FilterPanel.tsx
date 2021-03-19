import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../../services/GraphData'

function FilterPanel(props: any): any {

  const [newGraphName, setNewGraphName] = useState("")

  useEffect(() => {
    console.log("filter panel effect?")
    console.log("test", GraphDataSvc?.graphs || 'none')

    GraphDataSvc.on('graph-loaded', (e) => {
      console.log("graph loaded filter panle", e)
    })
  },[])

  async function createConsensusGraph() {
    if (newGraphName.length > 0) {
      await GraphDataSvc.createGraph(newGraphName);
      console.log('created the new graph!', newGraphName)
    }
  }

  return (
    <div className="panelContainer">

      <div className="panelContainer section">
        <div className="panelHeaderText">
          Active graphs
        </div>
        <div>..</div>
        <div>..</div>
      </div>

      <div className="panelContainer section">
        <div className="panelHeaderText">
          Filter actions
        </div>
        <div>..</div>
        <div>..</div>
      </div>

      <div className="panelContainer section">
        <div className="panelHeaderText">
          Create a new community
        </div>
        <div className="inputControl">
          <input type='text'
            placeholder="new..."
            value={newGraphName}
            onChange={e => {setNewGraphName(e.target.value)}} />
          <button onClick={createConsensusGraph}>Send request</button>
        </div>
      </div>

    </div>
  )
}

export default FilterPanel

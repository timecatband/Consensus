import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../../services/GraphData'

function FilterPanel(props: any): any {

  // the control for creating a new community
  const [newGraphName, setNewGraphName] = useState("")
  // the list of active graphs which can be filtered
  const [loadedGraphs, setLoadedGraphs] = useState({})

  useEffect(() => {
    //initialize
    setLoadedGraphs(GraphDataSvc.graphs)

    // called any time a new sub-graph is loaded
    let cleanGraphLoad = GraphDataSvc.on('graph-loaded', (e) => {
      //stay up to date when graphs are added
      setLoadedGraphs(GraphDataSvc.graphs)
    })

    return () => {
      cleanGraphLoad()
    }
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
        {_.values(_.mapValues(loadedGraphs, (g) => {
          return <div key={g.key} className="filterItem btnLink">{g.name}</div>
        }))}
        <div className="filterItem btnLink">My personal view</div>
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

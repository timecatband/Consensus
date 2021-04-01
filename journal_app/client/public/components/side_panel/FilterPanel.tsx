import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../../services/GraphData'

function FilterPanel(props: any): any {

  // the control for creating a new community
  const [newGraphName, setNewGraphName] = useState("")
  // the list of active graphs which can be filtered
  const [loadedGraphs, setLoadedGraphs] = useState({})

  function onViewClick(key) {
    console.log("onview click", key)
    GraphDataSvc.setView(key)
  }

  useEffect(() => {
    //initialize
    setLoadedGraphs(GraphDataSvc.views)

    // called any time a new sub-graph is loaded
    let cleanGraphLoad = GraphDataSvc.on('graph-loaded', (e) => {
      //stay up to date when graphs are added
      setLoadedGraphs(GraphDataSvc.views)
    })

    return () => {
      cleanGraphLoad()
    }
  },[])

  return (
    <div className="panelContainer">

      <div className="panelContainer section">
        <div className="panelHeaderText">
          Available views
        </div>
        {_.values(_.mapValues(loadedGraphs, (g) => {
          return <div key={g.key} className="filterItem btnLink" onClick={()=>{onViewClick(g.key)}}>{g.name}</div>
        }))}
      </div>

      <div className="panelContainer section">
        <div className="panelHeaderText">
          Filter actions
        </div>
        <div>..</div>
        <div>..</div>
      </div>

    </div>
  )
}

export default FilterPanel

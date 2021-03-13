import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../services/GraphData'

function GraphSidePanel(props: any): any {

  const [selectedItems, setSelectedItems] = useState({test:"test"})
  const [numItems, setNumItems] = useState(0)

  function onAddEdgeClick(source:string, target:string) {
    GraphDataSvc.addNewEdge(source, target)
  }

  useEffect(() => {
    GraphDataSvc.on('selected-items', setSelectedItems)
    setNumItems(_.keys(selectedItems).length)
  },[selectedItems])

  if ( numItems == 1 ) {
    return (
      <div className={`graph-side-panel ${props.showPanel ? '' : 'hidden'}`}>
        <div className='panelHeader'>
          {selectedItems['0']?.label}
        </div>
        {selectedItems['0']?.text}
        <div className="codeBlock">
          <code>{JSON.stringify(selectedItems, null, 3)}</code>
        </div>
      </div>
    )
  } else if ( numItems == 2) {
    return (
      <div className={`graph-side-panel ${props.showPanel ? '' : 'hidden'}`}>
        <div className='panelHeader'>
          {numItems} nodes selected
        </div>
        <div>{selectedItems['0']?.label}</div>
        <div>{selectedItems['1']?.label}</div>
        <div className="panelActions">
          <button onClick={() => {onAddEdgeClick(selectedItems['0']?.id, selectedItems['1']?.id)}}>Create edge</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`graph-side-panel ${props.showPanel ? '' : 'hidden'}`}>
        <div className='panelHeader'>
          {numItems} nodes selected
        </div>
      </div>
    )
  }
}

export default GraphSidePanel

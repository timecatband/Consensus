import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../services/GraphData'

function GraphSidePanel(props: any): any {

  const [selectedItems, setSelectedItems] = useState({test:"test"})

  useEffect(() => {
    GraphDataSvc.on('selected-items', setSelectedItems)
  })

  return  (
    <div className={`graph-side-panel ${props.showPanel ? '' : 'hidden'}`}>
      {JSON.stringify(selectedItems, null, 3)}
    </div>
  )
}

export default GraphSidePanel

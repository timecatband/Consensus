import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../services/GraphData'

console.log("initialize stuff here?")

const updateModel = _.debounce( (nodeId:string, update: any) => {
  GraphDataSvc.updateNode(nodeId, update)
},500)

function GraphSidePanel(props: any): any {

  const [selectedItems, setSelectedItems] = useState({label:"", text:""})
  const [numItems, setNumItems] = useState(0)
  const [itemText, setText] = useState("")
  const [itemLabel, setLabel] = useState("")

  function onAddEdgeClick(source:any, target:any) {
    GraphDataSvc.addNewEdge(source, target)
  }

  function updateItem(update:any) {
    if (update.text != undefined) { setText(update.text) }
    if (update.label != undefined) { setLabel(update.label) }
    updateModel(selectedItems['0'].id, update)
  };

  useEffect(() => {
    GraphDataSvc.on('selected-items', (selected) => {
      if ( selected['0'] != undefined ) {
        setSelectedItems(selected);
        setNumItems(_.keys(selected)?.length)
        setText(selected['0'].text)
        setLabel(selected['0'].label)
      }
    })
  },[])

  if ( numItems == 1 ) {
    return (
      <div className={`graph-side-panel ${props.showPanel ? '' : 'hidden'}`}>
        <div className='panelHeader'>
          <input type="text"
            onChange={event => updateItem({label:event.target.value})}
            value={itemLabel}>
          </input>
        </div>
        <textarea className="itemText"
            onChange={event => updateItem({text:event.target.value})}
            value={itemText}
            rows={10}>
        </textarea>
        <div className="codeBlock">
          <div>Metadata:</div>
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

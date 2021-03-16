import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../../services/GraphData'
import SingleNodePanel from './SingleNodePanel'

function wrapText(text: string) {
  let words = text.replace('\n','').split(' ');
  let wrapped = '';
  let line = ''

  for(let n = 0; n < words.length; n++) {
    line = line + words[n].replace(' ','');
    if (line.length > 20) {
      wrapped = wrapped + line + '\n'
      line = ''
    }
    else {line = line + ' '}
  }

  wrapped = wrapped + line
  return wrapped.trim();
}

const updateModel = _.debounce( (nodeId:string, update: any) => {
  if (update.label != undefined) {
    update.label = wrapText(update.label)
  }
  GraphDataSvc.updateAndSaveNode(nodeId, update)
},500)

function GraphSidePanel(props: any): any {

  const [selectedItems, setSelectedItems] = useState({label:"", text:""})
  const [numItems, setNumItems] = useState(0)

  // single node state
  const [itemText, setText] = useState("")
  const [itemLabel, setLabel] = useState("")
  const [confirmDelete, setConfirmDelete] = useState(false)

  // two-node state
  const [existingEdge, setExistingEdge] = useState({id: undefined})

  function onAddEdgeClick(source:any, target:any) {
    GraphDataSvc.addNewEdge(source, target)
  }

  function setLabelRemoveWrapping(label: string) {
    setLabel(label.replace(/\n/g,' '))
  }

  function updateItem(update:any) {
    if (update.text != undefined) { setText(update.text) }
    if (update.label != undefined) { setLabelRemoveWrapping(update.label) }
    updateModel(selectedItems['0'].id, update)
  };

  function deleteNode(evt:any) {
    setConfirmDelete(false)
    GraphDataSvc.deleteItemsByIds('node', [selectedItems[0].id])
  }

  function deleteEdge(evt:any) {
    GraphDataSvc.deleteItemsByIds('edge', [existingEdge.id])
  }

  useEffect(() => {
    GraphDataSvc.on('selected-items', (selected) => {
      let num = _.keys(selected)?.length
      if ( num > 0 ) {

        if ( num == 2 ) {
          let edge = GraphDataSvc.findItem('edge',(e) => {
            let model = e.get('model')
            let node1id = selected['0'].id
            let node2id = selected['1'].id
            return (model.source == node1id && model.target == node2id) || (model.target == node1id && model.source == node2id)
          })?.get('model')
          setExistingEdge(edge)
        }

        setSelectedItems(selected);
        setNumItems(num)
        setText(selected['0'].text)
        setLabelRemoveWrapping(selected['0'].label)
      }
    })
  },[])

  // delete button for single nodes
  let delBtn;
  if ( confirmDelete == true) {
    delBtn = (
      <div>
        <span>Are you sure?</span>
        <button className="deleteBtn confirmDelBtn" onClick={deleteNode}>Yes, delete</button>
        <button onClick={() => {setConfirmDelete(false)}}>Oops, no!</button>
      </div>)
  } else {
    delBtn = <button className="deleteBtn" onClick={() => {setConfirmDelete(true)}}>Delete</button>
  }

  // create or delete button for edges
  let edgeCDBtn;
  if ( existingEdge === undefined) {
    edgeCDBtn = <button onClick={() => {onAddEdgeClick(selectedItems['0']?.id, selectedItems['1']?.id)}}>Create edge</button>
  } else {
    edgeCDBtn = (
      <div>
        <button className="deleteBtn" onClick={deleteEdge}>Delete edge</button>
      </div>
    )
  }

  if ( numItems == 1 ) {
    return (
      <div className={`graph-side-panel ${props.showPanel ? '' : 'hidden'}`}>
        <SingleNodePanel itemLabel={itemLabel} itemText={itemText} updateItem={updateItem} delBtn={delBtn} selectedItems={selectedItems} />
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
          {edgeCDBtn}
        </div>
        <div className="codeBlock">
          <div>Metadata:</div>
          <code>{JSON.stringify(existingEdge, null, 3)}</code>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`graph-side-panel ${props.showPanel ? '' : 'hidden'}`}>
        <div className='panelHeader'>
          {numItems} nodes selected
        </div>
        <div className="codeBlock comparison">
          <div>Metadata:</div>
          <code>{JSON.stringify(selectedItems, null, 3)}</code>
        </div>
      </div>
    )
  }
}

export default GraphSidePanel

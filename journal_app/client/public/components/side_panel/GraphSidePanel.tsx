import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../../services/GraphData'
import SingleNodePanel from './SingleNodePanel'
import FilterPanel from './FilterPanel'

function wrapText(text: string) {
  if (text != undefined) {

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
  else {return ''}
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
  const [itemLink, setLink] = useState("")
  const [itemLabel, setLabel] = useState("")
  const [confirmDelete, setConfirmDelete] = useState(false)

  // two-node state
  const [existingEdge, setExistingEdge] = useState({id: undefined})

  // filter panel state
  const [showFilters, setShowFilters] = useState(false);


  function onAddEdgeClick(source:any, target:any) {
    GraphDataSvc.addNewEdge(source, target)
  }

  function setLabelRemoveWrapping(label: string) {
    if (label != undefined) {
      setLabel(label.replace(/\n/g,' '))
    }
  }

  function updateItem(update:any) {
    if (update.text != undefined) { setText(update.text) }
    if (update.link != undefined) { setLink(update.link) }
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

  /*
    when the component initiates, set up listeners to determine when to show different
    types of side panels
  */
  useEffect(() => {
    GraphDataSvc.on('selected-items', (selected) => {
      let num = _.keys(selected)?.length
      setNumItems(num)

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
        setText(selected['0'].text || '')
        setLink(selected['0'].link || '')
        setLabelRemoveWrapping(selected['0'].label)
      }
    })

    GraphDataSvc.on('filter-panel-change', (filterState) => {
      setShowFilters(filterState);
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

  let component;
  if (showFilters) {
    component = <FilterPanel />
  } else if ( numItems == 1 ) {
    component = <SingleNodePanel itemLabel={itemLabel} itemText={itemText} itemLink={itemLink} updateItem={updateItem} delBtn={delBtn} selectedItems={selectedItems} />
  } else if ( numItems == 2) {
    component = (
      <div>
        <div className='panelContainer'>
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
  } else if ( numItems > 2) {
    component = (
      <div>
        <div className='panelContainer'>
          {numItems} nodes selected
        </div>
        <div className="codeBlock comparison">
          <div>Metadata:</div>
          <code>{JSON.stringify(selectedItems, null, 3)}</code>
        </div>
      </div>
    )
  }

  return (
    <div className={`graph-side-panel ${ (showFilters || numItems > 0) ? '' : 'hidden'}`}>
      {component}
    </div>
  )
}

export default GraphSidePanel

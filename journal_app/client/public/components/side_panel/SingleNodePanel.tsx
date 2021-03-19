import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import GraphDataSvc from '../../services/GraphData'

function SingleNodePanel(props: any): any {

  return (
    <div>
      <div className='panelContainer'>
        <div className="panelText">
          Label:
        </div>
        <input type="text"
          onChange={event => props.updateItem({label:event.target.value})}
          value={props.itemLabel}>
        </input>
      </div>
      <div className="panelText">
        Link:
      </div>
      <input className="itemLink"
        onChange={event => props.updateItem({link:event.target.value})}
        value={props.itemLink}>
      </input>
      <div className="panelText">
        Text:
      </div>
      <textarea className="itemText"
          onChange={event => props.updateItem({text:event.target.value})}
          value={props.itemText}
          rows={10}>
      </textarea>
      <div className="panelActions">
        {props.delBtn}
      </div>
      <div className="codeBlock">
        <div>Metadata:</div>
        <code>{JSON.stringify(props.selectedItems[0], null, 3)}</code>
      </div>
    </div>
  )
}

export default SingleNodePanel

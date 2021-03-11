import React, { useEffect, useState } from 'react'

function GraphSidePanel(props: any): any {

  if (props.showPanel == false) {
    return null
  } else {
    return  (
      <div className="graph-side-panel">
        Hi!
      </div>
    )
  }
}

export default GraphSidePanel

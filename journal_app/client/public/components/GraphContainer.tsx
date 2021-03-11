import React, { useEffect, useState } from 'react'
import GraphControlBar from './GraphControlBar';
import GraphCanvas from './GraphCanvas';


function GraphContainer(props: any): any {

  const [DisplayedGraph, setDisplayedGraph] = useState({});

  return  (
    <div className="com-graph-container">
      <GraphControlBar />
      <GraphCanvas />
    </div>
  )

}

export default GraphContainer

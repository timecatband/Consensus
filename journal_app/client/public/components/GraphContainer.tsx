import React, { useEffect, useState } from 'react'
import GraphControlBar from './GraphControlBar';
import GraphCanvas from './GraphCanvas';
import GraphSidePanel from './GraphSidePanel';


function GraphContainer(props: any): any {

  const [showPanel, setShowPanel] = useState(false);

  return  (
    <div className="com-graph-container">
      <GraphControlBar />
      <GraphCanvas setShowPanel={setShowPanel} />
      <GraphSidePanel showPanel={showPanel} />
    </div>
  )

}

export default GraphContainer

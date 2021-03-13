import React, { useEffect, useState, useContext } from 'react'
import G6 = require('@antv/g6');
import * as I from '@antv/g6/lib/types';
import GraphDataSvc from '../services/GraphData'
import GraphModel from '@timecat/GraphJournalShared/models/GraphModel'

let graphCanvas: G6.Graph;
let focusedNode: any = null;
let canvasWidth:number = 100 //initial value only, resizes on first render to container width
let canvasHeight:number = 500

function getDefaultNodeProperties() {
  return {
    shape: 'ellipse',
    size: [150,80],
    labelCfg: {
      positions: 'center',
      style: {
        fill: '#000000A6',
        fontSize: 14,
        cursor: 'pointer'
      }
    },
    style: {
      stroke: '#777777',
      fill: '#C5EEEE',
      //radius: 3
    }
  };
}

function getDefaultEdgeProperties() {
  return {
    type: 'line',
    style: {
      stroke: "#000000",
      lineWidth:1
    }
  };
}


/////////////////////////////////////////////////////////////////
// The React Element -------------------------------------------

const GraphCanvas = (props) => {
  const canvasRef = React.useRef<HTMLDivElement>();

  function renderGraph(g6graph: G6.Graph, newGraph: GraphModel) {
    g6graph.data(newGraph)
    g6graph.render()
  }

  // this use effect will only call once on load to set up the graph and window listeners
  useEffect(() => {
    graphCanvas = new G6.Graph({
      container: 'graph-container',
      width: canvasWidth,
      height: canvasHeight,
      modes: {
        default: [
          { type: 'drag-canvas',
            //enableOptimize: true, //this will hide text on drag
          },
          {
            type: 'zoom-canvas',
            //enableOptimize: true, //this will hide text on zoom
            //optimizeZoom: 0.01,
            sensitivity: 1
          } as I.ModeType,
          'drag-node',
          'click-select',
          // 'shortcuts-call', //https://g6.antv.vision/en/docs/manual/middle/states/defaultBehavior#shortcuts-call
        ],
      },
      defaultNode: getDefaultNodeProperties(),
      defaultEdge: getDefaultEdgeProperties(),
      layout: {
        // https://g6.antv.vision/en/docs/api/graphLayout/dagre
        type:"concentric",
        preventOverlap: true,
        nodeStrength: (d:any) => {
          if (d.id === 'node0') {
            return 1000;
          }
          return 300;
        },

      },
      nodeStateStyles: {
        hover: {
          stroke: 'black',
          lineWidth: 1,
          fill: '#fff8e6',
          cursor: 'pointer'
        },
        selected: {
          //fill: '#A3DDDD',
          fill: '#fff8e6',
          stroke: '#298A8B',
          lineWidth: 1,
          shadowColor: '#A3DDDD'
        }
      },
      edgeStateStyles: {
        hover: {
          stroke: 'blue',
          lineWidth: 3
        }
      }
    })

    /*
    graphCanvas.on('node:click', (evt:any) => {
      //props.setShowPanel(true)
    })
    */

    graphCanvas.on('node:mouseenter', (evt) => {
      const { item } = evt;
      graphCanvas.setItemState(item, 'hover', true);
    });

    graphCanvas.on('node:mouseleave', (evt) => {
      const { item } = evt;
      graphCanvas.setItemState(item, 'hover', false);
    });

    graphCanvas.on('click', (evt:any) => {
      props.setShowPanel(false)
    })

    graphCanvas.on('dblclick', (evt:any) => {
      GraphDataSvc.addNewNode(evt.canvasX, evt.canvasY)
    })

    graphCanvas.on('nodeselectchange', e => {
      console.log("node select change", e.selectedItems)
      if (e.selectedItems.nodes.length != 0) {
        props.setShowPanel(true)
      } else {
        props.setShowPanel(false)
      }

      GraphDataSvc.setSelected(e.selectedItems);
    })

    GraphDataSvc.DisplayedGraph = graphCanvas;
    GraphDataSvc.on('set-displayed-graph', () => {
      renderGraph(graphCanvas, GraphDataSvc.graphs[0])
    })

    // Handler to call on window resize
    function handleResize() {
      graphCanvas.changeSize(canvasRef?.current?.offsetWidth, canvasHeight)
    }
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);

  }, []); // Empty array ensures that effect is only run on mount

  return  (
    <div className="graph-canvas" ref={canvasRef} id="graph-container"></div>
  )

}

export default GraphCanvas;

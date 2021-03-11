import React, { useEffect, useState, useContext } from 'react'
import G6 = require('@antv/g6');
import GraphDataSvc from '../services/GraphData'
import GraphModel from '@timecat/GraphJournalShared/models/GraphModel'

let graph: G6.Graph;
let focusedNode: any = null;
let canvasWidth:number = 100 //initial value only, resizes on first render to container width
let canvasHeight:number = 500

function getDefaultNodeProperties() {
  return {
    shape: 'node',
    size: 150,
    labelCfg: {
      positions: 'center',
      style: {
        fill: '#000000A6',
        fontSize: 12
      }
    },
    style: {
      stroke: '#777777',
      width: 150
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
    graph = new G6.Graph({
      container: 'graph-container',
      width: canvasWidth,
      height: canvasHeight,
      modes: {
        default: ['drag-canvas', 'zoom-canvas']
      },
      defaultNode: getDefaultNodeProperties(),
      defaultEdge: getDefaultEdgeProperties(),
      layout: {
        // https://g6.antv.vision/en/docs/api/graphLayout/dagre
        type:"dagre",
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
          lineWidth: 3
        }
      },
      edgeStateStyles: {
        hover: {
          stroke: 'blue',
          lineWidth: 3
        }
      }
    })

    graph.on('node:click', (evt:any) => {
      //console.log("got node click")
      if (focusedNode != null) {
        graph.setItemState(focusedNode, 'hover', false)
      }

      focusedNode = evt.item;
      graph.setItemState(focusedNode, 'hover', true)

    })

    graph.on('click', (evt:any) => {
      //console.log("got non-node click")

      if (focusedNode != null) {
        graph.setItemState(focusedNode, 'hover', false)
      }

    })

    //GraphDataSvc.registerRenderFn(renderGraph)

    // Handler to call on window resize
    function handleResize() {
      graph.changeSize(canvasRef?.current?.offsetWidth, canvasHeight)
      renderGraph(graph, GraphDataSvc.DisplayedGraph)
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);

  }, []); // Empty array ensures that effect is only run on mount


  function onAddButtonClick() {
    //console.log("got button click")
    let text: string | null;
    let inputEl = document.getElementById("newName") as HTMLInputElement;
    text = inputEl.value;
    if (text == null) {
      console.error("document element newName has no value")
    }

    console.error("add node not implemented")
    //data.nodes.push({id:text, label:text})
    //data.edges.push({ source: focusedNode._cfg.id, target: text });
    //graph.data(data)
    graph.render()
  }


  return  (
    <div className="graph-canvas" ref={canvasRef} id="graph-container"></div>
  )

}

export default GraphCanvas;

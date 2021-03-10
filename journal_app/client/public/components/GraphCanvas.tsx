import React, { useEffect, useState } from 'react'
import G6 = require('@antv/g6');
import GraphData from '../services/GraphData'

let graph: G6.Graph;
let data = GraphData.DisplayedGraph;
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

const GraphCanvas = () => {
  const canvasRef = React.useRef<HTMLDivElement>();

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

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

    graph.data(data)
    graph.render()

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


    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount


  //this useEffect will be called any time the state changes, including when the window resizes thanks to the state call above
  useEffect(() => {
    graph.changeSize(canvasRef?.current?.offsetWidth, canvasHeight)
  });


  function onAddButtonClick() {
    //console.log("got button click")
    let text: string | null;
    let inputEl = document.getElementById("newName") as HTMLInputElement;
    text = inputEl.value;
    if (text == null) {
      console.error("document element newName has no value")
    }

    data.nodes.push({id:text, label:text})
    //data.edges.push({ source: focusedNode._cfg.id, target: text });
    graph.data(data)
    graph.render()
  }


  return  (
    <div className="graph-canvas" ref={canvasRef} id="graph-container"></div>
  )

}

export default GraphCanvas;

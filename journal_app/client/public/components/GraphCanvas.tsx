import React, { useEffect, useState, useContext } from 'react'
import G6 = require('@antv/g6');
import * as I from '@antv/g6/lib/types';
import GraphDataSvc from '../services/GraphData'
import GraphModel from '@timecat/GraphJournalShared/models/GraphModel'

let graphCanvas: G6.Graph;
let focusedNode: any = null;
let canvasWidth:number = 100 //initial value only, resizes on first render to container width
let canvasHeight:number = 500


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
        type: 'gForce',
        center: [200, 200], // The center of the graph by default
        linkDistance: 1,
        nodeStrength: 1000,
        edgeStrength: 200,
        nodeSize: 30,
        onTick: () => {
          console.log('ticking');
        },
        onLayoutEnd: () => {
          console.log('force layout done');
        },
        workerEnabled: true, // Whether to activate web-worker
        gpuEnabled: true     // Whether to enable the GPU parallel computing, supported by G6 4.0
      },
      nodeStateStyles: {
        hover: {
          fill: '#fff8e6',
          stroke: '#67B4B4',
          lineWidth: 1,
          cursor: 'pointer',
          shadowColor: '#FFF',
          shadowBlur: 0
        },
        selected: {
          fill: '#fff8e6',
          stroke: '#67B4B4',
          lineWidth: 1,
          shadowColor: '#FFF',
          shadowBlur: 0
        }
      },
      edgeStateStyles: {
        hover: {
          lineWidth: 3,
          stroke: '#67B4B4',
          shadowColor: '#C6FAFA',
          shadowBlur: 11,
          cursor: 'pointer'
        },
      }
    })


    function getDefaultNodeProperties() {
      return {
        shape: 'ellipse',
        size: [200,100],
        labelCfg: {
          positions: 'center',
          style: {
            fill: '#000000A6',
            fontSize: 14,
            cursor: 'pointer',
            background: {
                //fill: '#C5EEEE',
                radius: 10,
                cursor: 'pointer',
                //stroke: '#298A8B',
                //lineWidth?: number,
                //padding: 5
            }
          }
        },
        style: {
          stroke: '#777777',
          fill: '#C5EEEE',
          shadowColor: '#FFF',
          shadowBlur: 0,
          radius: 40
        }
      };
    }

    function getDefaultEdgeProperties() {
      return {
        type: 'line',
        style: {
          stroke: '#298A8B',
          lineWidth:3
        }
      };
    }

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

    graphCanvas.on('edge:mouseenter', (evt) => {
      const { item } = evt;
      graphCanvas.setItemState(item, 'hover', true);
    });

    graphCanvas.on('edge:mouseleave', (evt) => {
      const { item } = evt;
      graphCanvas.setItemState(item, 'hover', false);
    });

    graphCanvas.on('dblclick', (evt:any) => {
      if (evt.target.cfg.type == undefined) {
        GraphDataSvc.addNewNode(evt.canvasX, evt.canvasY)
      }
    })

    graphCanvas.on('click', (evt:any) => {

      // if an edge is clicked, set its connected nodes to selected
      if (evt.target.cfg.type == 'path') {
        const { source } = evt.item._cfg;
        const { target } = evt.item._cfg;
        graphCanvas.setItemState(source, 'selected', true);
        graphCanvas.setItemState(target, 'selected', true);
        const selectedNodes = graphCanvas.findAllByState('node', 'selected');
        //let selectedCombos = graph.findAllByState('combo', this.selectedState);

        graphCanvas.emit('nodeselectchange', {
          selectedItems: {
            nodes: selectedNodes,
            //combos: selectedCombos
        }});
      }
    })

    graphCanvas.on('nodeselectchange', e => {
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

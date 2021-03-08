import React, { useEffect } from 'react'
import G6 = require('@antv/g6');
import GraphData from '../services/GraphData'

let data = GraphData;
let graph: G6.Graph;
let focusedNode: any = null;

function getDefaultNodeProperties() {
  return {
    shape: 'node',
    size: 50,
    labelCfg: {
      positions: 'center',
      style: {
        fill: '#000000A6',
        fontSize: 5
      }
    },
    style: {
      stroke: '#72CC4A',
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

const DefaultGraphView = () => {
     const ref = React.useRef(null);
     useEffect(() => {
        graph = new G6.Graph({
            container: 'container',
            width: 600,
            height: 400,
            modes: {
              default: ['drag-canvas', 'zoom-canvas']
            },
            defaultNode: getDefaultNodeProperties(),
            defaultEdge: getDefaultEdgeProperties(),
            layout: {
              type:"dagre",
              preventOverlap: true,
              nodeStrength: (d:any) => {
                if (d.id === 'node0') {
                  return 100;
                }
                return 30;
              },

            },
            nodeStateStyles: {
              hover: {
                stroke: 'red',
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
          if (focusedNode != null) {
            graph.setItemState(focusedNode, 'hover', false)
          }

          focusedNode = evt.item;

          graph.setItemState(focusedNode, 'hover', true)
        })

    });

    function handleClick() {
      let text: string | null;
      let inputEl = document.getElementById("newName") as HTMLInputElement;
      text = inputEl.value;
      if (text == null) {
        console.error("document element newName has no value")
      }

      data.nodes.push({id:text, label:text})
      console.log(focusedNode)
      data.edges.push({ source: focusedNode._cfg.id, target: text });
      graph.data(data)
      graph.render()
    }

    return  (<div><div ref={ref}></div><input id="newName" type='text'></input><button onClick={handleClick}> Add</button></div>)

}

export default DefaultGraphView;

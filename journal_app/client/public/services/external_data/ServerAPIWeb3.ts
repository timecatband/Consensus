import SocketClient from './SocketClient'
import {setProvider, upsertNode, upsertEdge, getNodes, getEdges} from './ConsensusGraphContract'

/*
  Singleton service ServerAPI provides methods for reading/writing via Web3 blockchain shenanigans
*/
class ServerAPIWeb3 {
  ready: any;

  constructor( socketClient: any ) {
    this.ready = setProvider();
  }

  //on(key: string, handler: Function): Promise<void> {
  //   return this.socketClient.on(key, handler)
  //}

  ping(data: any) {
    this.ready.then(() => {
        // Woo!
        console.log("woo! ping! ready! web3!")
    })
  }

  saveGraph(graphData: any) {
    for (let i = 0; i < graphData.nodes.length; i++) {
        const node = graphData.nodes[i];
        upsertNode(node.id, JSON.stringify(node));
    }
    for (let i = 0; i < graphData.edges.length; i++) {
        const edge = graphData.edges[i];
        upsertEdge(edge.id, JSON.stringify(edge));
    }
  }

  getGraph() {
    console.log("Blockchain api getting graph")
    let nodes = getNodes()
    let edges = getEdges()
    console.log("gotgraph blcokcahin style", nodes, edges)
  }

  on(type: string, fn: Function) {
    
  }

  /*
  upsertNode(data: any) {
  }

  deleteNodes( nodeIds: string[] ) {
  }

  deleteEdges( edgeIds: string[] ) {
  }

  querySql(query:string) {
  }
  */

}

var ServerApiWeb3 = new ServerAPIWeb3(SocketClient)

export default ServerApiWeb3;

import EventEmitter from '@timecat/graph-journal-shared/src/models/EventEmitter'
import {setProvider, upsertNode, upsertEdge, getNodes, getEdges} from './ConsensusGraphContract'

/*
  Singleton service ServerAPI provides methods for reading/writing via Web3 blockchain shenanigans
*/
class BlockchainAPI extends EventEmitter {
  ready: any;

  constructor() {
    super()
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

  async getGraph() {
    let nodes = await getNodes()
    let edges = await getEdges()
    this.emit("GET_GRAPH_RSP", {key: 'firstBlockchainGraph', nodes: nodes, edges: edges})
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

var BlockchainAPISvc = new BlockchainAPI()

export default BlockchainAPISvc;

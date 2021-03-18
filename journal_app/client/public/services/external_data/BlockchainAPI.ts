import _ from 'lodash'
import EventEmitter from '@timecat/graph-journal-shared/src/models/EventEmitter'
import JournalNode from '@timecat/graph-journal-shared/src/models/JournalNode'
import JournalEdge from '@timecat/graph-journal-shared/src/models/JournalEdge'
import PublicSquare from '@timecat/graph-journal-shared/src/models/PublicSquare'
import {setProvider, upsertNode, upsertEdge, getNodes, getEdges} from './ConsensusGraphContract'
import {setProviderPublicSquare, getConsensusGraphIds, createGraph} from './PublicSquareContract'

/*
  Singleton service ServerAPI provides methods for reading/writing via Web3 blockchain shenanigans
*/
class BlockchainAPI extends EventEmitter {
  ready: any;

  constructor() {
    super()
    // this.ready = setProvider() && setProviderPublicSquare();
    this.ready = setProviderPublicSquare();
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
        upsertNode(node.id, node);
    }
    for (let i = 0; i < graphData.edges.length; i++) {
        const edge = graphData.edges[i];
        upsertEdge(edge.id, edge);
    }
  }

  async getGraph() {
    // let nodes = await Promise.all(await getNodes())
    // let edges = await Promise.all(await getEdges())

    // this.emit("GET_GRAPH_RSP", {
    //   key: 'firstBlockchainGraph',
    //   nodes: _.map(nodes, (n) => JournalNode.fromBlockchain(n.json)),
    //   edges: _.map(edges, (e) => JournalEdge.fromBlockchain(e.json))
    // });
  }

  async getPublicSquare() {
    let consensusGraphIds = await getConsensusGraphIds();
    console.log('consensusGraphIds', consensusGraphIds);
    // this.emit("GET_PUBLIC_SQUARE_RSP", {
    //   key: 'publicSquare',
    //   consensusGraphIds: new PublicSquare(consensusGraphIds)
    // });
  }

  async createGraph(publicSquareName: string) {
    await createGraph(publicSquareName);
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

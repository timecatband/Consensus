let Web3 = require('Web3');
import _ from 'lodash'
import EventEmitter from '@timecat/graph-journal-shared/src/models/EventEmitter'
import JournalNode from '@timecat/graph-journal-shared/src/models/JournalNode'
import JournalEdge from '@timecat/graph-journal-shared/src/models/JournalEdge'
import PublicSquare from '@timecat/graph-journal-shared/src/models/PublicSquare'
import {getGraphContract, upsertNode, upsertEdge, getNodes, getEdges} from './ConsensusGraphContract'
import {getAllConsensusGraphIds, createGraph, setProvider} from './PublicSquareContract'

/*
  Singleton service ServerAPI provides methods for reading/writing via Web3 blockchain shenanigans
*/
class BlockchainAPI extends EventEmitter {
  ready: any;

  constructor() {
    super()
    this.ready = setProvider();
  }

  ping(data: any) {
    this.ready.then(() => {
      // Woo!
      console.log("woo! ping! ready! web3!")
    })
  }

  async saveGraph(graphId: any, graphData: any) {
    const graphContract = await getGraphContract(graphId);
    for (let i = 0; i < graphData.nodes.length; i++) {
        const node = graphData.nodes[i];
        upsertNode(graphContract, node.id, node);
    }
    for (let i = 0; i < graphData.edges.length; i++) {
        const edge = graphData.edges[i];
        upsertEdge(graphContract, edge.id, edge);
    }
  }

  async getGraph(graphId) {
    const graphContract = await getGraphContract(graphId);
    let nodes = await Promise.all(await getNodes(graphContract))
    let edges = await Promise.all(await getEdges(graphContract))
    let graphName = await graphContract.methods.name().call()

    // make sure we didn't get junk data back
    nodes = _.map(nodes, (n) => JournalNode.fromBlockchain(n.json))
    let filteredNodes = _.filter(nodes, (n) => { return n.label != undefined })

    if ( filteredNodes.length != nodes.length ) {
      console.warn("Warning: apparently bad nodes loaded from blockchain")
    }

    // prevent junk data, and prevent edges that refer to non-existant nodes as that will fuck g6
    let nodeIds = _.values(_.mapValues(filteredNodes, (n) => {return n.id}));
    edges = _.map(edges, (e) => JournalEdge.fromBlockchain(e.json))
    let filteredEdges = _.filter(edges, (e) => {
      return e.source != undefined && nodeIds.includes(e.source) && nodeIds.includes(e.target)
    })

    if ( filteredEdges.length != edges.length ) {
      console.warn("Warning: apparently bad edges loaded from blockchain")
    }

    this.emit("GET_GRAPH_RSP", {
      key: graphId,
      name: graphName,
      nodes: filteredNodes,
      edges: filteredEdges
    });
  }

  async getFirstGraphFromPublicSquare() {
    let consensusGraphIds = await getAllConsensusGraphIds();
    if (consensusGraphIds.length > 0) {
      // just use the first one we find, for now
      await this.getGraph(consensusGraphIds[0])
    } else {
      this.emit("NO_GRAPHS", {})
    }
    // this.emit("GET_PUBLIC_SQUARE_RSP", {
    //   key: 'publicSquare',
    //   consensusGraphIds: new PublicSquare(consensusGraphIds)
    // });
  }

  async createGraph(publicSquareName: string) {
    await createGraph(publicSquareName);
    // refresh public square
    await this.getFirstGraphFromPublicSquare();
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

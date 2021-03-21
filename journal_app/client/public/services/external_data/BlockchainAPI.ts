let Web3 = require('Web3');
import _ from 'lodash'
import EventEmitter from '@timecat/graph-journal-shared/src/models/EventEmitter'
import JournalNode from '@timecat/graph-journal-shared/src/models/JournalNode'
import JournalEdge from '@timecat/graph-journal-shared/src/models/JournalEdge'
import PublicSquare from '@timecat/graph-journal-shared/src/models/PublicSquare'
import {getGraphContract, upsertcollections, upsertNode, upsertEdge, getNodes, getEdges} from './ConsensusGraphContract'
import {getAllConsensusGraphIds, getAccountAddress, createGraph, setProvider} from './PublicSquareContract'


/*
  Singleton service ServerAPI provides methods for reading/writing via Web3 blockchain shenanigans
*/
class BlockchainAPI extends EventEmitter {
  ready: any;
  metamaskWeb3: any;
  accounts: any[];
  networkId: string;
  publicSquare: PublicSquare;

  constructor() {
    super();
    this.ready = this.setup().then(() => {
      this.publicSquare = new PublicSquare(this.metamaskWeb3, this.accounts[0])
    });
  }

  async setup() {
    if (window.ethereum) {
      this.metamaskWeb3 = new Web3(ethereum);
      try {
        // Request account access if needed
        await ethereum.enable();
      }
      catch (error) {
        console.error("User denied access", error)
      }
    } else if (window.web3) {
      this.metamaskWeb3 = new Web3(web3.currentProvider);
    }
    this.metamaskWeb3.eth.handleRevert = true;
    this.networkId = await metamaskWeb3.eth.net.getId();
    this.accounts = await this.metamaskWeb3.eth.getAccounts()
  }

  ping(data: any) {
    this.ready.then(() => {
      // Woo!
      console.log("woo! ping! ready! web3!")
    })
  }

  async saveGraph(graphId: any, graphData: any) {
    const graphContract = await getGraphContract(graphId);
    upsertCollections(graphContract, graphData.nodes, graphData.edges);
    await graphContract.methods.upsertCollections(node, edges).send({
      from: getAccountAddress()[0]
    })
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

}

var BlockchainAPISvc = new BlockchainAPI()

export default BlockchainAPISvc;

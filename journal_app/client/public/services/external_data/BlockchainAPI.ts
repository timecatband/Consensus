let Web3 = require('Web3');
import _ from 'lodash'
import EventEmitter from '@timecat/graph-journal-shared/src/models/EventEmitter'
import JournalNode from '@timecat/graph-journal-shared/src/models/JournalNode'
import JournalEdge from '@timecat/graph-journal-shared/src/models/JournalEdge'
import PublicSquare from '@timecat/graph-journal-shared/src/external_data/PublicSquare'


/*
  Singleton service provides methods for reading/writing via Web3 blockchain shenanigans
*/
class BlockchainAPI extends EventEmitter {
  ready: any;
  metamaskWeb3: any;
  accounts: any[];
  networkId: string;
  publicSquare: PublicSquare;
  graphContracts: Record<string, any>; // a list of all currently loaded ConsesnusGraph contracts

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

  yangGang(graphId: string) {
    if (this.graphContracts[graphId]) {
      this.graphContracts[graphId].yangGang()
    } else {
      console.error("Yang Gang cant find the graph with id", graphId)
    }
  }

  async createGraph(name:string) {
    return this.publicSquare.createGraph(name);
  }

  async saveGraph(graphId: any, graphData: any) {
    this.graphContracts[graphId].upsertCollections(graphData.nodes, graphData.edges);
  }

  async loadGraphContract(graphId) {
    if (this.graphContracts[graphId] === undefined) {
      let graphContract = await this.publicSquare.getGraphContract(graphId)
      this.graphContracts[graphId] = graphContract
      await graphContract.ready
    }
  }

  async loadGraphData(graphId) {
    if (this.graphContracts[graphId]) {

      let graphContract = this.graphContracts[graphId]
      let nodes = await Promise.all(await graphContract.getNodes())
      let edges = await Promise.all(await graphContract.getEdges())
      let graphName = graphContract.name

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
    } else {
      console.error("Could not find graph with this id", graphId)
    }
  }

  async getFirstGraphFromPublicSquare() {
    let consensusGraphIds = await this.publicSquare.getAllConsensusGraphIds();
    if (consensusGraphIds.length > 0) {
      // just use the first one we find, for now
      await this.loadGraphContract(consensusGraphIds[0])
      await this.loadGraphData(consensusGraphIds[0])
    } else {
      this.emit("NO_GRAPHS", {})
    }
  }

}

var BlockchainAPISvc = new BlockchainAPI()

export default BlockchainAPISvc;

import Web3 from 'Web3';
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
  readyResolver: Function;
  metamaskWeb3: any;
  accounts: any[];
  networkId: string;
  publicSquare: PublicSquare;
  graphContracts: Record<string, any>; // a list of all currently loaded ConsesnusGraph contracts
  graphContractIds: string[];

  constructor() {
    super();
    this.graphContracts = {}
    this.graphContractIds = []
    this.ready = new Promise((resolve) => {
      this.readyResolver = resolve
    })
  }

  async setWeb3(web3:any) {
    this.metamaskWeb3 = web3;
    this.metamaskWeb3.eth.handleRevert = true;
    this.networkId = await metamaskWeb3.eth.net.getId();
    this.accounts = await this.metamaskWeb3.eth.getAccounts()
    this.publicSquare = new PublicSquare(this.metamaskWeb3, this.accounts[0], this.networkId)
    this.readyResolver()
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



  async getAllCommunities() {
    this.graphContractIds = await this.publicSquare.getAllConsensusGraphIds();
    let waitForLoad = []
    _.each(this.graphContractIds, async (id) => {
      waitForLoad.push(this.loadGraphContract(id))
    })
    await Promise.all(waitForLoad)

    // make sure each community contract has access to its own id easily
    _.each(this.graphContracts, (val, id) => {
      val.id = id
    })

    return this.graphContracts
  }

  async loadGraphContract(graphId) {
    if (this.graphContracts[graphId] === undefined) {
      let graphContract = await this.publicSquare.getGraphContract(graphId)
      this.graphContracts[graphId] = graphContract
      return graphContract.ready
    }
  }

  async loadGraphData(graphId) {
    if (this.graphContracts[graphId]) {

      let graphContract = this.graphContracts[graphId]
      let nodes = await graphContract.getNodes()
      let edges = await graphContract.getEdges()
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

      return {
        key: graphId,
        name: graphName,
        nodes: filteredNodes,
        edges: filteredEdges
      }
    } else {
      return Promise.reject({msg:"Could not find graph with this id", graphId})
    }
  }

  async getFirstGraphFromPublicSquare() {
    if (this.graphContracts.length > 0) {
      // just use the first one we find, for now
      return this.loadGraphData(this.graphContractIds[0])
    } else {
      return Promise.reject({msg: "NO_GRAPHS"});
    }
  }

} // end of class

var BlockchainAPISvc = new BlockchainAPI()

declare global {
  interface Window {
    ethereum:any;
    web3:any;
  }
}

let metamaskWeb3;
if (window.ethereum) {
  metamaskWeb3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    window.ethereum.enable();
  }
  catch (error) {
    console.error("User denied access", error)
  }
} else if (window.web3) {
  metamaskWeb3 = new Web3(window.web3.currentProvider);
}

BlockchainAPISvc.setWeb3(metamaskWeb3)

export default BlockchainAPISvc;

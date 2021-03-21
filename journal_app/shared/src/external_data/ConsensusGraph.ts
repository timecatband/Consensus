import ConsensusGraphABI from './ABI/ConsensusGraphABI'

/*
  Represents an instance of a ConsensusGraph contract deployed on a blockchain somewhere
*/

class ConsensusGraph {
  contract: any; // instance of deployed contract on the blockchain
  account: string; // the account address of the current user
  name: string; // name of the graph
  ready: Promise<any>;

  constructor(contract:any, account:string) {
    this.contract = contract
    this.account = account
    this.ready = this.getName().then( (name) => {
      this.name = name
    })
  }

  async getName() {
    this.contract.methods.name().call()
  }

  async yangGang() {
    console.log(await this.contract.methods.tokenContract().call())
    return contract.methods.airdropMe().send({from: this.account})
  }

  async upsertCollections(nodes, edges) {
    return this.contract.methods.upsertCollections(nodes, edges).send({from: this.account})
  }

  async getNode() {
    return this.contract.methods.nodes(id).call();
  }

  async getNodes() {
    // TODO: add batch get to contract
    let nodeIds = await this.contract.methods.getNodeIds().call();

    let nodes = []
    for (let i = 0; i < nodeIds.length; i++) {
      nodes.push(this.getNode(nodeIds[i]));
    }
    return nodes;
  }

  async getEdge(contract, id) {
    return this.contract.methods.edges(id).call();
  }

  async getEdges(contract) {
    // TODO: add batch get to contract
    let edgeIds = await this.contract.methods.getEdgeIds().call();

    let edges = []
    for (let i = 0; i < edgeIds.length; i++) {
      edges.push(this.getEdge(edgeIds[i]));
    }
    return edges;
  }

  async onNewNode(contract, callback) {
    this.contract.events.NewNode({},
      async(id) => {
        node = await getNode(contract, id);
        callback(node)
      });
  }

  async onNewEdge(contract, callback) {
    this.contract.events.NewNode({},
      async(id) => {
        edge = await getEdge(contract, id);
        callback(edge)
      });
  }

}

export default ConsensusGraph;

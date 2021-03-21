import _ from 'lodash'
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
    this.ready = this.getName().then( (name:string) => {
      this.name = name
    })
  }

  async getName():Promise<string> {
    return this.contract.methods.name().call()
  }

  async yangGang() {
    console.log(await this.contract.methods.tokenContract().call())
    return this.contract.methods.airdropMe().send({from: this.account})
  }

  formatCollectionForSend(collection) {

  }

  async upsertCollections(nodes, edges) {
    console.log("upsert collection reached", nodes, edges)

    _.each( nodes, n => {
      if (n.owner === undefined) {
        // TODO: this setting of owner needs to happen when the node is actually created
        n.owner = this.account
        n.json.owner = this.account
      }
      n.json = JSON.stringify(n.json)
    })

    _.each( edges, e => {
      if (e.owner === undefined) {
        // TODO: this setting of owner needs to happen when the node is actually created
        e.owner = this.account
        e.json.owner = this.account
      }
      e.json = JSON.stringify(e.json)
    })

    return this.contract.methods.upsertCollections(nodes, edges).send({from: this.account})
  }

  async getNode(nodeId) {
    return this.contract.methods.Nodes(nodeId).call();
  }

  async getNodes() {
    // TODO: add batch get to contract
    let nodeIds = await this.contract.methods.getNodeIds().call();

    let nodes = []
    for (let i = 0; i < nodeIds.length; i++) {
      nodes.push(this.getNode(nodeIds[i]));
    }
    nodes = await Promise.all(nodes)
    console.log("getNodes in graph contract", nodes)
    return nodes;
  }

  async getEdge(edgeId) {
    return this.contract.methods.Edges(edgeId).call();
  }

  async getEdges() {
    // TODO: add batch get to contract
    let edgeIds = await this.contract.methods.getEdgeIds().call();

    let edges = []
    for (let i = 0; i < edgeIds.length; i++) {
      edges.push(this.getEdge(edgeIds[i]));
    }
    return edges;
  }

  async onNewNode(callback:Function) {
    this.contract.events.NewNode({},
      async(id) => {
        let node = await this.getNode(id);
        callback(node)
      });
  }

  async onNewEdge(callback:Function) {
    this.contract.events.NewNode({},
      async(id) => {
        let edge = await this.getEdge(id);
        callback(edge)
      });
  }

}

export default ConsensusGraph;

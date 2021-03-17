
let Web3 = require('Web3');
let metamaskWeb3 = new Web3('http://localhost:8545')
import ConsensusGraphABI from './ConsensusGraphABI'
let account = null
let consensusGraphContract
let consensusGraphContractAddress

// Low level wrapper for interacting with the contracts.
// Types are "contract types". ServerAPIWeb3 serializes to<->from
// client types.

export function web3() {
  return metamaskWeb3
}

export const accountAddress = () => {
  return account
}

export async function setProvider() {
  if (window.ethereum){
   metamaskWeb3 = new Web3(ethereum);
    try{
   // Request account access if needed
        await ethereum.enable();
  }
   catch (error){
   // User denied account access...
   }
  } else if (window.web3){
    metamaskWeb3 = new Web3(web3.currentProvider);
  }
  account = await metamaskWeb3.eth.getAccounts()
  let id = await metamaskWeb3.eth.net.getId()
  metamaskWeb3.eth.handleRevert = true;
  consensusGraphContractAddress = ConsensusGraphABI.networks[id]["address"]
}


function getConsensusGraphContract() {
  consensusGraphContract = consensusGraphContract || new metamaskWeb3.eth.Contract(ConsensusGraphABI.abi, consensusGraphContractAddress);
  return consensusGraphContract;
}

export async function getNode(id) {
  let contract = getConsensusGraphContract();
  await contract.methods.nodes(nodeIds[i]).call();
}

export async function getNodes() {
  let contract = getConsensusGraphContract();
  nodeIds = await contract.methods.nodeIds().call();

  nodes = []
  for (let i = 0; i < nodeIds.length; i++) {
    nodes.push(getNode(nodeIds[i]));
  }
  return nodes;
}

export async function getEdge(id) {
  let contract = getConsensusGraphContract()
  return await contract.methods.edges(edgeIds[i]).call();
}

export async function getEdges() {
  let contract = getConsensusGraphContract()
  edgeIds = await contract.methods.edgeIds().call();

  edges = []
  for (let i = 0; i < edgeIds.length; i++) {
      edges.push(getEdge(edgeIds[i]));
  }
  return edges;
}

export async function upsertNode(id, json) {
    await getConsensusGraphContract().methods.upsertNode(id, json).send({
        from: account[0]
    })
}

export async function upsertEdge(id, json) {
    await getConsensusGraphContract().methods.upsertEdge(id, json).send({
        from: account[0]
    })
}

export async function onNewNode(callback) {
  getConsensusGraphContract().events.NewNode({},
    async(id) => {
      node = await getNode(id);
      callback(node)
    });
}

export async function onNewEdge(callback) {
  getConsensusGraphContract().events.NewNode({},
    async(id) => {
      edge = await getEdge(id);
      callback(edge)
    });
}

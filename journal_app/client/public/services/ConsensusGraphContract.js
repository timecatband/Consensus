
let Web3 = require('Web3');
let metamaskWeb3 = new Web3('http://localhost:8545')
let account = null
let consensusGraphContract
let consensusGraphContractAddress

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
  consensusGraphContract = consensusGraphContract || new metamaskWeb3.eth.Contract(ConsensusGraphABI.abi, consensusGraphContractAddress)
  return consensusGraphContract;
}

//export async function getName(address) {
  //return await getConsensusGraphContract().methods.names(address[0]).call()
//}

export async function getNodes() {
  let contract = getConsensusGraphContract()
  nodeIds = await contract.methods.nodeIds().call();
  nodes = []
  for (let i = 0; i < nodeIds.length; i++) {
    nodes.push(await contract.methods.nodes(nodeIds[i]).call());
  }
  return nodes;
}

export async function getEdges() {
  let contract = getConsensusGraphContract()
  nodeIds = await contract.methods.edgeIds().call();
  edges = []
  for (let i = 0; i < edgeIds.length; i++) {
    edges.push(await contract.methods.edges(edgeIds[i]).call());
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

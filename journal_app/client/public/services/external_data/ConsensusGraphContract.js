
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
  if (window.ethereum) {
    metamaskWeb3 = new Web3(ethereum);
    try {
        // Request account access if needed
        await ethereum.enable();
    }
    catch (error) {
      // User denied account access...
    }
  } else if (window.web3) {
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

/*
  helper method for writing objects
  1. attach the sender address to the payload for the blockchain
  2. format the json as the contract expects
  3. serialize
  TODO: node ownership should be handled by rules around invested stake insted of this? -KW-2021-03
*/
function checkOwnerAndFormat(json) {
  // if there is no owner on the model, this must be a newly  created node, so attach the current users address to it
  if (json.owner === undefined ) {
    json.owner = account[0];
  }

  let payload = {
    id: json.id,
    owner: json.owner, // this may be the sender if its a new node, otherwise the original owner
    json: json
  }

  return JSON.stringify(payload);
}

export async function getNode(id) {
  let contract = getConsensusGraphContract();
  return await contract.methods.nodes(id).call();
}

export async function getNodes() {
  let contract = getConsensusGraphContract();
  let nodeIds = await contract.methods.getNodeIds().call();

  let nodes = []
  for (let i = 0; i < nodeIds.length; i++) {
    nodes.push(getNode(nodeIds[i]));
  }
  return nodes;
}

export async function getEdge(id) {
  let contract = getConsensusGraphContract()
  return await contract.methods.edges(id).call();
}

export async function getEdges() {
  let contract = getConsensusGraphContract()
  let edgeIds = await contract.methods.getEdgeIds().call();

  let edges = []
  for (let i = 0; i < edgeIds.length; i++) {
    edges.push(getEdge(edgeIds[i]));
  }
  return edges;
}

export async function upsertNode(id, json) {
  json = checkOwnerAndFormat(json)
  await getConsensusGraphContract().methods.upsertNode(id, json).send({
    from: account[0]
  })
}

export async function upsertEdge(id, json) {
  json = checkOwnerAndFormat(json)
  await getConsensusGraphContract().methods.upsertEdge(id, json).send({
      from: account[0]
  })
}

export async function elonMusk() {
  console.log(await getConsensusGraphContract().methods.tokenContract().call())

  await getConsensusGraphContract().methods.airdropMe().send({
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

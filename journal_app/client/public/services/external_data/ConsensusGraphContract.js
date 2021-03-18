
// let Web3 = require('Web3');
// let metamaskWeb3 = new Web3('http://localhost:8545')
// import ConsensusGraphABI from './ConsensusGraphABI'
// let account = null
// let consensusGraphContract
// let consensusGraphContractAddress

// Low level wrapper for interacting with the contracts.
// Types are "contract types". ServerAPIWeb3 serializes to<->from
// client types.

// function getConsensusGraphContract() {
//   consensusGraphContract = consensusGraphContract || new metamaskWeb3.eth.Contract(ConsensusGraphABI.abi, consensusGraphContractAddress);
//   return consensusGraphContract;
// }

// attach the sender address to the payload for the blockchain
// TODO: node ownership should be handled by rules around invested stake insted of this? -KW-2021-03
// function checkOwnerAndSerialize(json) {
//   if (json.owner === undefined ) {
//     json.owner = account[0];
//   }
//   return JSON.stringify(json);
// }

import { accountAddress } from './PublicSquareContract'

export async function getNode(contract, id) {
  return await contract.methods.nodes(id).call();
}

export async function getNodes(contract) {
  console.log(contract);
  console.log(contract.methods);
  let nodeIds = await contract.methods.getNodeIds().call();

  let nodes = []
  for (let i = 0; i < nodeIds.length; i++) {
    nodes.push(getNode(contract, nodeIds[i]));
  }
  return nodes;
}

export async function getEdge(contract, id) {
  return await contract.methods.edges(id).call();
}

export async function getEdges(contract) {
  let edgeIds = await contract.methods.getEdgeIds().call();

  let edges = []
  for (let i = 0; i < edgeIds.length; i++) {
    edges.push(getEdge(contract, edgeIds[i]));
  }
  return edges;
}

export async function upsertNode(contract, id, json) {
  // json = checkOwnerAndSerialize(json)
  console.log('upsertNode contract', contract)
  await contract.methods.upsertNode(id, json).send({
    from: accountAddress()[0]
  })
}

export async function upsertEdge(contract, id, json) {
  // json = checkOwnerAndSerialize(json)
  await contract.methods.upsertEdge(id, json).send({
      from: accountAddress()[0]
  })
}

export async function onNewNode(contract, callback) {
  contract.events.NewNode({},
    async(id) => {
      node = await getNode(id);
      callback(node)
    });
}

export async function onNewEdge(contract, callback) {
  contract.events.NewNode({},
    async(id) => {
      edge = await getEdge(id);
      callback(edge)
    });
}


let Web3 = require('Web3');
let metamaskWeb3 = new Web3('http://localhost:8545')
import PublicSquareABI from './PublicSquareABI'
let account = null
let publicSquareContract
let publicSquareContractAddress

// todo: put this common code (shares with publicSquareContract) in a common spot

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
  publicSquareContractAddress = PublicSquareABI.networks[id]["address"]
}


function getPublicSquareContract() {
  publicSquareContract = publicSquareContract || new metamaskWeb3.eth.Contract(PublicSquareABI.abi, publicSquareContractAddress);
  return publicSquareContract;
}

// // attach the sender address to the payload for the blockchain
// // TODO: node ownership should be handled by rules around invested stake insted of this? -KW-2021-03
// function checkOwnerAndSerialize(json) {
//   if (json.owner === undefined ) {
//     json.owner = account[0];
//   }
//   return JSON.stringify(json);
// }

export async function getPublicSquare() {
  let contract = getpublicSquareContract();
  return await contract.methods.nodes(id).call();
}

export async function getNodes() {
  let contract = getpublicSquareContract();
  let nodeIds = await contract.methods.getNodeIds().call();

  let nodes = []
  for (let i = 0; i < nodeIds.length; i++) {
    nodes.push(getNode(nodeIds[i]));
  }
  return nodes;
}

export async function getEdge(id) {
  let contract = getpublicSquareContract()
  return await contract.methods.edges(id).call();
}

export async function getEdges() {
  let contract = getpublicSquareContract()
  let edgeIds = await contract.methods.getEdgeIds().call();

  let edges = []
  for (let i = 0; i < edgeIds.length; i++) {
    edges.push(getEdge(edgeIds[i]));
  }
  return edges;
}

export async function upsertNode(id, json) {
  json = checkOwnerAndSerialize(json)
  await getpublicSquareContract().methods.upsertNode(id, json).send({
    from: account[0]
  })
}

export async function upsertEdge(id, json) {
  json = checkOwnerAndSerialize(json)
  await getpublicSquareContract().methods.upsertEdge(id, json).send({
      from: account[0]
  })
}

export async function onNewNode(callback) {
  getpublicSquareContract().events.NewNode({},
    async(id) => {
      node = await getNode(id);
      callback(node)
    });
}

export async function onNewEdge(callback) {
  getpublicSquareContract().events.NewNode({},
    async(id) => {
      edge = await getEdge(id);
      callback(edge)
    });
}

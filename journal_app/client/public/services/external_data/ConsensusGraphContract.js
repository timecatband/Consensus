import { getPublicSquareContract, getAccountAddress, getWeb3 } from './PublicSquareContract'
import ConsensusGraphABI from './ConsensusGraphABI'


export async function getGraphContract(graphId) {
  // Is it weird that we need the public square in order to get a graph?
  const publicSquareContract = getPublicSquareContract();
  const graphAddress = await publicSquareContract.methods.consensusGraphs(graphId).call();
  const web3 = getWeb3();
  return new web3.eth.Contract(ConsensusGraphABI.abi, graphAddress);
}

export async function getNode(contract, id) {
  return await contract.methods.nodes(id).call();
}

export async function getNodes(contract) {
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
    edges.push(await getEdge(contract, edgeIds[i]));
  }
  return edges;
}

export async function upsertNode(contract, id, json) {
  await contract.methods.upsertNode(id, JSON.stringify(json)).send({
    from: getAccountAddress()[0]
  })
}

export async function upsertEdge(contract, id, json) {
  await contract.methods.upsertEdge(id, JSON.stringify(json)).send({
      from: getAccountAddress()[0]
  })
}

export async function yangGang(contract) {
  console.log(await contract.methods.tokenContract().call())
  await contract.methods.airdropMe().send({
    from: getAccountAddress()[0]
  })
}

export async function onNewNode(contract, callback) {
  contract.events.NewNode({},
    async(id) => {
      node = await getNode(contract, id);
      callback(node)
    });
}

export async function onNewEdge(contract, callback) {
  contract.events.NewNode({},
    async(id) => {
      edge = await getEdge(contract, id);
      callback(edge)
    });
}

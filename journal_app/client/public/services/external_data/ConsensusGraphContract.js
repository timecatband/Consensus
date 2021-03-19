import { getPublicSquareContract } from './PublicSquareContract'
import ConsensusGraphABI from './ConsensusGraphABI'
import { getContract, accountAddress } from './MetaMask';


export async function getGraphContract(graphId) {
  const publicSquareContract = await getPublicSquareContract();
  const graphAddress = await publicSquareContract.methods.consensusGraphs(graphId).call();
  return getContract(ConsensusGraphABI.abi, graphAddress);
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
    from: accountAddress()[0]
  })
}

export async function upsertEdge(contract, id, json) {
  await contract.methods.upsertEdge(id, JSON.stringify(json)).send({
      from: accountAddress()[0]
  })
}

export async function elonMusk(graphId) {
  const contract = await getGraphContract(graphId)
  console.log(await contract.methods.tokenContract().call())

  await contract.methods.airdropMe().send({
    from: accountAddress()[0]
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

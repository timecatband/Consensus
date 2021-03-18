
let Web3 = require('Web3');
let metamaskWeb3 = new Web3('http://localhost:8545')
import PublicSquareABI from './PublicSquareABI'
import ConsensusGraphABI from './ConsensusGraphABI'
let account = null
let publicSquareContract
let publicSquareContractAddress

export function web3() {
  return metamaskWeb3
}

export const accountAddress = () => {
  return account
}

export async function setProviderPublicSquare() {
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

export async function getAllConsensusGraphContracts() {
  const contract = getPublicSquareContract();
  const graphIds = await contract.methods.getConsensusGraphIds().call();

  const graphContracts = [];
  for (const graphId of graphIds) {
    const graphAddress = await contract.methods.consensusGraphs(graphId).call();
    graphContracts.push(new metamaskWeb3.eth.Contract(ConsensusGraphABI.abi, graphAddress));
  }
  return graphContracts;  
}

export async function createGraph(graphName) {
  await getPublicSquareContract().methods.createConsensusGraph(graphName).send({
    from: account[0]
  })
}



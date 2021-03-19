import PublicSquareABI from './PublicSquareABI'

let Web3 = require('Web3');
let metamaskWeb3 = new Web3('http://localhost:8545')
let account = null;
let publicSquareContract = null;

export const getWeb3 = () => {
  return metamaskWeb3;
}

export const getAccountAddress = () => {
  return account;
}

export const getPublicSquareContract = () => {
  return publicSquareContract;
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
  metamaskWeb3.eth.handleRevert = true;
  
  // Initialize the public square contract
  let id = await metamaskWeb3.eth.net.getId();
  const publicSquareContractAddress = PublicSquareABI.networks[id]["address"];
  publicSquareContract = new metamaskWeb3.eth.Contract(PublicSquareABI.abi, publicSquareContractAddress);
}

export async function getAllConsensusGraphIds() {
  const contract = getPublicSquareContract();
  
  // todo: think about retrieving a tuple of (id/name) here instead of just id, so we don't need to go fetching all graph contracts
  const graphIds = await contract.methods.getConsensusGraphIds().call();
  return graphIds;
}

export async function createGraph(graphName) {
  const publicSquareContract = getPublicSquareContract();
  await publicSquareContract.methods.createConsensusGraph(graphName).send({
    from: getAccountAddress()[0]
  })
}



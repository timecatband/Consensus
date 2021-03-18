
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
  // console.log('id', id);
  // console.log(PublicSquareABI.networks);
  publicSquareContractAddress = PublicSquareABI.networks[id]["address"]
}


function getPublicSquareContract() {
  publicSquareContract = publicSquareContract || new metamaskWeb3.eth.Contract(PublicSquareABI.abi, publicSquareContractAddress);
  return publicSquareContract;
}

export async function getConsensusGraphIds() {
  let contract = getPublicSquareContract();
  console.log(contract);
  return await contract.methods.getConsensusGraphIds().call();
}

export async function createGraph(graphName) {
  await getPublicSquareContract().methods.createConsensusGraph(graphName).send({
    from: account[0]
  })
}


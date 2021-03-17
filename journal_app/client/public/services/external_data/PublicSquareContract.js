
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
  let contract = getPublicSquareContract();
  return await contract.methods.nodes(id).call();
}

// export async function onNewEdge(callback) {
//   getpublicSquareContract().events.NewNode({},
//     async(id) => {
//       edge = await getEdge(id);
//       callback(edge)
//     });
// }

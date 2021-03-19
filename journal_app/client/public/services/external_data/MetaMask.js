
let Web3 = require('Web3');
let metamaskWeb3 = new Web3('http://localhost:8545')

// let id = null
let account = null

export const web3 = () => {
  return metamaskWeb3
}

export const accountAddress = () => {
  return account
}

// export const networkId = () => {
//     return id
// }

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
//   id = await metamaskWeb3.eth.net.getId()
}

export function getContract(abi, address) {
    return new metamaskWeb3.eth.Contract(abi, address);
}
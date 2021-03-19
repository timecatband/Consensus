import PublicSquareABI from './PublicSquareABI'
import { web3, accountAddress } from './MetaMask';

export async function getPublicSquareContract() {
  const metamaskWeb3 = web3();
  const publicSquareContractAddress = await getPublicSquareContractAddress();
  const publicSquareContract = new metamaskWeb3.eth.Contract(PublicSquareABI.abi, publicSquareContractAddress);
  return publicSquareContract;
}

async function getPublicSquareContractAddress() {
  const metamaskWeb3 = web3();
  let id = await metamaskWeb3.eth.net.getId();
  const publicSquareContractAddress = PublicSquareABI.networks[id]["address"];
  return publicSquareContractAddress;
}

export async function getAllConsensusGraphIds() {
  const contract = await getPublicSquareContract();
  
  // todo: think about retrieving a tuple of (id/name) here instead of just id, so we don't need to go fetching all graph contracts
  const graphIds = await contract.methods.getConsensusGraphIds().call();
  return graphIds;
}

export async function createGraph(graphName) {
  const publicSquareContract = await getPublicSquareContract();
  await publicSquareContract.methods.createConsensusGraph(graphName).send({
    from: accountAddress()[0]
  })
}



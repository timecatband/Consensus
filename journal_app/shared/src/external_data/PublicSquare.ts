import PublicSquareABI from './ABI/PublicSquareABI'
import ConsensusGraphABI from './ABI/ConsensusGraphABI'
import ConsensusGraph from './ConsensusGraph'

/*
  Represents an instance of a PublicSquare contract deployed on a blockchain somewhere
*/

class PublicSquare {
  web3: any; // web3 library
  contract: any; // instance of deployed contract on the blockchain
  account: string // the account address of the current user

  constructor(web3:Web3, account:string) {
    this.web3 = web3;
    this.account = account
    this.contract = new this.web3.eth.Contract(
      PublicSquareABI.abi,
      PublicSquareABI.networks[id]["address"]
    );
  }

  async createGraph(graphName):Promise<any> {
    return this.contract.methods.createConsensusGraph(graphName).send({from: this.account})
  }

  async getGraphContract(graphId: string):Promise<any> {
    address = await this.contract.methods.consensusGraphs(graphId).call();
    graphContract = new web3.eth.Contract(ConsensusGraphABI.abi, address);
    return new ConsensusGraph(graphContract)
  }

  async getAllConsensusGraphIds():Promise<any> {
    // todo: think about retrieving a tuple of (id/name) here instead of just id, so we don't need to go fetching all graph contracts
    return this.contract.methods.getConsensusGraphIds().call();
  }

}

export default PublicSquare;

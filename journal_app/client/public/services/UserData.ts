import _ from 'lodash'
import BlockchainAPISvc from './external_data/BlockchainAPI'
import EventEmitter from '@timecat/graph-journal-shared/src/models/EventEmitter'

/*
  UserData singleton service, tracks the current user, and could potentially track multiple users / impersonation
  handy reference on the service pattern: https://medium.com/@alshdavid/react-state-and-services-edb95be48851
*/

class UserData extends EventEmitter {
  userKey: string; // should match the metamask address and the p2p address/key
  externalAPI: any;
  ready: Promise<any>;

  constructor(externalAPI: any) {
    super()
    this.externalAPI = externalAPI;
    this.ready = this.externalAPI.ready.then( () => {
      this.userKey = this.externalAPI.accounts[0]
      console.log("current user key", this.userKey)
    })
  }

}

const UserDataSvc = new UserData(BlockchainAPISvc);

export default UserDataSvc;

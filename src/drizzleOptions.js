import SmartPoolKey from './solc/contracts/SmartPoolKey.json'
import PoolKey from './solc/contracts/PoolKey.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      //url: 'ws://127.0.0.1:8545'
      url: 'https://rinkeby.infura.io/8BNRVVlo2wy7YaOLcKCR'
    }
  },
  contracts: [
    SmartPoolKey,
    //PoolKey
  ],
  //events: {
  //  SimpleStorage: ['StorageSet']
  //},
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions
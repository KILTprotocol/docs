import { config as envConfig } from 'dotenv'

import { BlockchainUtils } from '@kiltprotocol/sdk-js'

import { runAll as runAllClaiming } from './claiming'
import { runAll as runAllCore } from './did'
import { runAll as runAllLinking } from './linking'
import { runAll as runAllWeb3 } from './web3names'

async function main() {
  envConfig()
  try {
    // await runAllCore()
    // await runAllWeb3()
    // await runAllClaiming()
    await runAllLinking(BlockchainUtils.IS_IN_BLOCK)
  } catch (e) {
    console.error('Oh no! There was an error!!\n', e)
    process.exit(1)
  } finally {
    process.exit()
  }
}

main()

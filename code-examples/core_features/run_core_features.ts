import { config as envConfig } from 'dotenv'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

import { runAll as runAllClaiming } from './claiming'
import { runAll as runAllDid } from './did'
import { runAll as runAllLinking } from './linking'
import { runAll as runAllWeb3 } from './web3names'

async function main() {
  envConfig()
  try {
    await runAllClaiming()
    // Runs all DID stuff and return the last upgraded light DID
    const did = await runAllDid(BlockchainUtils.IS_IN_BLOCK)
    await runAllWeb3(did, BlockchainUtils.IS_IN_BLOCK)
    await runAllLinking(did, BlockchainUtils.IS_IN_BLOCK)
  } catch (e) {
    console.error('Oh no! There was an error!!\n', e)
    process.exit(1)
  } finally {
    process.exit()
  }
}

main()

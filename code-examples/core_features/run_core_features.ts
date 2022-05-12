import { config as envConfig } from 'dotenv'

import { DemoKeystore } from '@kiltprotocol/did'

import { runAll as runAllDid } from './did'
import { runAll as runAllLinking } from './linking'
import { runAll as runAllWeb3 } from './web3names'

async function main() {
  envConfig()
  const keystore = new DemoKeystore()
  try {
    // Runs all DID stuff and return the last upgraded light DID
    const did = await runAllDid(keystore)
    await runAllWeb3(keystore, did)
    await runAllLinking(keystore, did)
  } catch (e) {
    console.error('Oh no! There was an error!!\n', e)
    process.exit(1)
  } finally {
    process.exit()
  }
}

main()

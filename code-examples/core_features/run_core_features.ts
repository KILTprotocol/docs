import { config as envConfig } from 'dotenv'

import { DemoKeystore } from '@kiltprotocol/did'
import { init } from '@kiltprotocol/sdk-js'

import { runAll as runAllDid } from './did'
import { runAll as runAllGettingStarted } from './getting_started'
import { runAll as runAllLinking } from './linking'
import { runAll as runAllWeb3 } from './web3names'
import { main as runDevSetup } from './dev_setup'

async function main() {
  envConfig()
  const keystore = new DemoKeystore()
  try {
    await init()
    // Runs all DID stuff and return the last upgraded light DID
    const did = await runAllDid(keystore)
    await runAllWeb3(keystore, did)
    await runAllLinking(keystore, did)
    await runAllGettingStarted()
    await runDevSetup()
  } catch (e) {
    console.error('Oh no! There was an error!!\n', e)
    process.exit(1)
  } finally {
    process.exit()
  }
}

main()

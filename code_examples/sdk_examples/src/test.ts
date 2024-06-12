import * as Kilt from '@kiltprotocol/sdk-js'

import { config as envConfig } from 'dotenv'
import { hexToU8a } from '@polkadot/util'
import { program } from 'commander'

import { testCoreFeatures } from './core_features'
import { testDapp } from './dapp'
import { testStaking } from './staking'
import { testWorkshop } from './workshop'
;(async () => {
  const whichToRun = {
    workshop: false,
    dapp: false,
    core: false,
    staking: false
  }
  // Can pass specific tests via command line arguments, or run all tests by default.
  program.description('Test the code examples used in the KILT documentation.')
  program
    .command('all', { isDefault: true })
    .description('Run all tests')
    .action(() => {
      for (const key in whichToRun) {
        whichToRun[key] = true
      }
    })
  program
    .command('workshop')
    .description('Test code examples inside the workshop')
    .action(() => {
      whichToRun.workshop = true
    })
  program
    .command('dapp')
    .description('Test code examples inside the DApp section')
    .action(() => {
      whichToRun.dapp = true
    })
  program
    .command('core')
    .description('Test code examples inside the Core Feature section')
    .action(() => {
      whichToRun.core = true
    })
  program
    .command('staking')
    .description('Test code examples inside the Staking section')
    .action(() => {
      whichToRun.staking = true
    })
  program.parse()

  envConfig()
  await Kilt.init()
  const wssAddress = process.env.WSS_ADDRESS || 'wss://peregrine.kilt.io'
  const faucetSeed = process.env.FAUCET_SEED

  let [workshopAccount, dappAccount, coreAccount] = new Array(3)

  const faucetAccount = Kilt.Utils.Crypto.makeKeypairFromSeed(
    hexToU8a(faucetSeed),
    'sr25519'
  ) as Kilt.KeyringPair
  workshopAccount = faucetAccount
  dappAccount = faucetAccount
  coreAccount = faucetAccount

  // If any of these flows fail, just send some more tokens to the account that is failing.
  try {
    if (whichToRun.workshop) {
      await testWorkshop(workshopAccount, wssAddress)
    }
    if (whichToRun.dapp) {
      await testDapp(dappAccount, wssAddress)
    }
    if (whichToRun.core) {
      await testCoreFeatures(coreAccount, wssAddress)
    }
    if (whichToRun.staking) {
      await testStaking(wssAddress)
    }
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()

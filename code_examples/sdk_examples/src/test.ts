import * as Kilt from '@kiltprotocol/sdk-js'

import { Keyring } from '@polkadot/api'
import { config as envConfig } from 'dotenv'
import { program } from 'commander'

import { testCoreFeatures } from './core_features'
import { testDapp } from './dapp'
import { testStaking } from './staking'
import { testWorkshop } from './workshop'

const MNEMONIC_ENV = 'BASE_MNEMONIC'

;(async () => {
  const whichToRun = {
    workshop: false,
    dapp: false,
    core: false,
    staking: false
  }
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

  const wssAddress =
    process.env.WSS_ADDRESS || 'wss://peregrine.kilt.io/parachain-public-ws'
  const mnemonic = process.env[MNEMONIC_ENV]

  if (!mnemonic) {
    console.log(
      `The base mnemonic to generate the test accounts has not been specified.
        Set the secret seed using the ${MNEMONIC_ENV} environment variable.`
    )
    throw new Error('Account seed is missing')
  }

  const baseAccount = await new Keyring({ type: 'sr25519' }).addFromMnemonic(
    mnemonic
  )

  // If any of these flows fail, just send some more tokens to the account that is failing.
  try {
    if (whichToRun.workshop) {
      await testWorkshop(baseAccount.derive('//workshop'), wssAddress)
    }
    if (whichToRun.dapp) {
      await testDapp(baseAccount.derive('//dapp'), wssAddress)
    }
    if (whichToRun.core) {
      await testCoreFeatures(baseAccount.derive('//core'), wssAddress)
    }
    if (whichToRun.staking) {
      await testStaking(baseAccount.derive('//staking'), wssAddress)
    }
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()

import * as Kilt from '@kiltprotocol/sdk-js'

import { config as envConfig } from 'dotenv'
import { hexToU8a } from '@polkadot/util'
import { program } from 'commander'

import { testCoreFeatures } from './core_features'
import { testDapp } from './dapp'
import { testStaking } from './staking'
import { testWorkshop } from './workshop'

const MNEMONIC_ENV = 'BASE_MNEMONIC'
const FAUCET_SEED_ENV = 'FAUCET_SEED'

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
  const mnemonic = process.env[MNEMONIC_ENV]
  const faucetSeed = process.env[FAUCET_SEED_ENV]

  let baseAccountStrategy: 'base-mnemonic' | 'faucet-seed' = 'base-mnemonic'

  // Faucet seed only a fallback if mnemonic is not specified. Otherwise mnemonic always wins.
  if (!mnemonic && faucetSeed) {
    baseAccountStrategy = 'faucet-seed'
  } else if (!mnemonic && !faucetSeed) {
    console.log(
      `Neither base mnemonic "${MNEMONIC_ENV}" nor faucet seed "${FAUCET_SEED_ENV}" have been specified.
        Please specify at least one of them.`
    )
    throw new Error('Account mnemonic or faucet seed is missing.')
  }

  let [workshopAccount, dappAccount, coreAccount] = new Array(3)

  switch (baseAccountStrategy) {
    case 'base-mnemonic': {
      const baseAccount = new Kilt.Utils.Keyring({
        type: 'sr25519',
        ss58Format: Kilt.Utils.ss58Format
      }).addFromMnemonic(mnemonic as string)
      workshopAccount = baseAccount.derive('//workshop')
      dappAccount = baseAccount.derive('//dapp')
      coreAccount = baseAccount.derive('//core')

      break
    }
    case 'faucet-seed': {
      const faucetAccount = Kilt.Utils.Crypto.makeKeypairFromSeed(
        hexToU8a(faucetSeed),
        'sr25519'
      ) as Kilt.KeyringPair
      workshopAccount = faucetAccount
      dappAccount = faucetAccount
      coreAccount = faucetAccount
    }
  }

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

import * as Kilt from '@kiltprotocol/sdk-js'
import { config as envConfig } from 'dotenv'
import { hexToU8a } from '@polkadot/util'
import { program } from 'commander'
import { testCoreFeatures } from './core_features'
import { testDapp } from './dapp'
import { testStaking } from './staking'
import { testWorkshop } from './workshop'

const SEED_ENV = 'FAUCET_SEED'

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
  const faucetSeed = process.env[SEED_ENV]

  if (!faucetSeed) {
    console.log(
      `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
    )
    throw new Error('Account seed is missing')
  }
  const faucetAccount = Kilt.Utils.Crypto.makeKeypairFromSeed(
    hexToU8a(faucetSeed),
    'sr25519'
  )

  try {
    if (whichToRun.workshop) {
      await testWorkshop(faucetAccount, wssAddress)
    }
    if (whichToRun.dapp) {
      await testDapp(faucetAccount, wssAddress)
    }
    if (whichToRun.core) {
      await testCoreFeatures(faucetAccount, wssAddress)
    }
    if (whichToRun.staking) {
      await testStaking(faucetAccount, wssAddress)
    }
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()

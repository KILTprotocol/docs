import Keyring from '@polkadot/keyring'
import { randomAsHex } from '@polkadot/util-crypto'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

import { main as main1 } from './1_did'
import { main as main2 } from './2_did'
import { main as main3 } from './3_did'

const SEED_ENV = 'FAUCET_SEED'

export async function runAll() {
  let keyring = new Keyring({
    type: 'sr25519',
    ss58Format: 38,
  })

  console.log('main1')
  await main1()
  console.log('main2')
  await main2()

  const faucetSeed = process.env[SEED_ENV]
  if (faucetSeed === undefined) {
    console.log(
      `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
    )
    throw 'Account seed is missing'
  }

  const faucetAccount = keyring.createFromUri(faucetSeed)

  console.log('main3')
  // this is not a secure way to create a seed!
  await main3(faucetAccount, BlockchainUtils.IS_IN_BLOCK, '0x' + Math.random().toString(16).substr(0))
}

runAll()

import Keyring from '@polkadot/keyring'
import { randomAsHex } from '@polkadot/util-crypto'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { init as kiltInit } from '@kiltprotocol/core'

import { main as main1 } from './1_did'
import { main as main2 } from './2_did'
import { main as main3 } from './3_did'
import { main as main4 } from './4_did'

const SEED_ENV = 'FAUCET_SEED'

export async function runAll() {
  await kiltInit({ address: 'wss://peregrine.kilt.io' })

  let keyring = new Keyring({
    type: 'sr25519',
    ss58Format: 38,
  })

  const faucetSeed = process.env[SEED_ENV]
  if (faucetSeed === undefined) {
    console.log(
      `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
    )
    throw 'Account seed is missing'
  }

  const faucetAccount = keyring.createFromUri(faucetSeed)

  console.log('main1')
  await main1()
  console.log('main2')
  await main2()

  console.log('main3')
  const randomMini3 = randomAsHex(32)
  await main3(faucetAccount, BlockchainUtils.IS_IN_BLOCK, randomMini3)

  console.log('main4')
  const randomMini4 = randomAsHex(32)
  await main4(faucetAccount, BlockchainUtils.IS_IN_BLOCK, randomMini4)
}

runAll().finally(() => {
  process.exit(0)
})

import { randomAsHex } from '@polkadot/util-crypto'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { DemoKeystore } from '@kiltprotocol/did'
import { Keyring } from '@kiltprotocol/utils'
import { SubscriptionPromise } from '@kiltprotocol/sdk-js'
import { init as kiltInit } from '@kiltprotocol/core'

import { main as main1 } from './1_did'
import { main as main2 } from './2_did'
import { main as main3 } from './3_did'
import { main as main4 } from './4_did'
import { main as main5 } from './5_did'
import { main as main6 } from './6_did'
import { main as main7 } from './7_did'
import { main as main8 } from './8_did'
import { main as main9 } from './9_did'

const SEED_ENV = 'FAUCET_SEED'

export async function runAll(
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })

  const keyring = new Keyring({
    type: 'sr25519',
    ss58Format: 38
  })
  const keystore = new DemoKeystore()

  const faucetSeed = process.env[SEED_ENV]
  if (!faucetSeed) {
    throw `Account seed with sufficient balance is required. Set the secret seed using the ${SEED_ENV} environment variable.`
  }

  const faucetAccount = keyring.createFromUri(faucetSeed)

  console.log('main1 - create light DID')
  await main1(keystore)
  console.log('main2 - create light DID with encryption key')
  await main2(keystore)

  console.log('main3 - create full DID')
  const randomMini3 = randomAsHex(32)
  const did3 = await main3(keystore, faucetAccount, randomMini3, resolveOn)

  console.log(
    'main4 - create full DID with encryption key and service endpoints'
  )
  const authSeed4 = randomAsHex(32)
  const encSeed4 = randomAsHex(32)
  const did4 = await main4(
    keystore,
    faucetAccount,
    authSeed4,
    encSeed4,
    resolveOn
  )

  console.log('main5 - update auth key, remove service endpoint')
  const randomMini5 = randomAsHex(32)
  const did5 = await main5(
    keystore,
    faucetAccount,
    randomMini5,
    did4,
    resolveOn
  )

  console.log('main6 - delete DID')
  await main6(keystore, faucetAccount, did5, resolveOn)

  console.log('main7 - claim DID deposit')
  await main7(faucetAccount, did3.identifier, resolveOn)

  console.log('main8 - upgrade light DID')
  const randomMini8 = randomAsHex(32)
  const did8 = await main8(keystore, faucetAccount, randomMini8)
  console.log('main7 - again, delete DID from main8')
  await main7(faucetAccount, did8.identifier, resolveOn)

  console.log('main9 - batching extrinsics')
  await main9(keystore, faucetAccount, resolveOn)
}

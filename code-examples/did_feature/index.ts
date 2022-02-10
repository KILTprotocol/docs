import { randomAsHex } from '@polkadot/util-crypto'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { init as kiltInit } from '@kiltprotocol/core'
import {
  FullDidDetails,
  DemoKeystore,
  DefaultResolver,
} from '@kiltprotocol/did'
import * as Kilt from '@kiltprotocol/sdk-js'

import { main as main1 } from './1_did'
import { main as main2 } from './2_did'
import { main as main3 } from './3_did'
import { main as main4 } from './4_did'
import { main as main5 } from './5_did'
import { main as main6 } from './6_did'
import { main as main7 } from './7_did'
import { main as main8 } from './8_did'

const SEED_ENV = 'FAUCET_SEED'

export async function runAll() {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })

  let keyring = new Kilt.Utils.Keyring({
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

  const keystore = new DemoKeystore()

  console.log('main1 - create light DID')
  await main1()
  console.log('main2 - create light DID with encryption key')
  await main2()

  console.log('main3 - create full DID')
  const randomMini3 = randomAsHex(32)
  const did3 = await main3(
    keystore,
    faucetAccount,
    BlockchainUtils.IS_IN_BLOCK,
    randomMini3
  )

  console.log(
    'main4 - create full DID with encryption key and service endpoints'
  )
  const authSeed4 = randomAsHex(32)
  const encSeed4 = randomAsHex(32)
  const did4 = await main4(
    keystore,
    faucetAccount,
    BlockchainUtils.IS_IN_BLOCK,
    authSeed4,
    encSeed4
  )

  console.log('main5 - update auth key, remove service endpoint')
  const randomMini5 = randomAsHex(32)
  await main5(
    keystore,
    faucetAccount,
    BlockchainUtils.IS_IN_BLOCK,
    randomMini5,
    did4.details as FullDidDetails
  )

  console.log('main6 - delete DID')
  // Get the updated DID Doc
  const updatedDidDetails4 = (await (
    await DefaultResolver.resolveDoc(did4.details.did)
  )?.details) as FullDidDetails
  if (updatedDidDetails4 === undefined) {
    throw 'We just created the did'
  }
  await main6(
    keystore,
    faucetAccount,
    BlockchainUtils.IS_IN_BLOCK,
    updatedDidDetails4
  )

  console.log('main7 - claim DID deposit')
  await main7(
    faucetAccount,
    BlockchainUtils.IS_IN_BLOCK,
    did3.details as FullDidDetails
  )

  console.log('main8 - upgrade light DID')
  const randomMini8 = randomAsHex(32)
  const did8 = await main8(
    keystore,
    faucetAccount,
    BlockchainUtils.IS_IN_BLOCK,
    randomMini8
  )
  console.log('main7 - again, delete DID from main8')
  await main7(
    faucetAccount,
    BlockchainUtils.IS_IN_BLOCK,
    did8.details as FullDidDetails
  )
}

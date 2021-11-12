import Keyring from '@polkadot/keyring'
import { randomAsHex } from '@polkadot/util-crypto'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { init as kiltInit } from '@kiltprotocol/core'
import { FullDidDetails, DemoKeystore } from '@kiltprotocol/did'

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
  const didAccountSeed = randomAsHex(32)
  const didAccount = keyring.createFromUri(didAccountSeed)

  const keystore = new DemoKeystore();

  console.log('main1 - create light DID')
  await main1()
  console.log('main2 - create light DID with encryption key')
  await main2()

  console.log('main3 - create full DID')
  const randomMini3 = randomAsHex(32)
  const did3 = await main3(keystore, faucetAccount, BlockchainUtils.IS_IN_BLOCK, randomMini3)

  console.log('main4 - create full DID with encryption key')
  const authSeed4 = randomAsHex(32)
  const encSeed4 = randomAsHex(32)
  const did4 = await main4(keystore, faucetAccount, BlockchainUtils.IS_IN_BLOCK, authSeed4, encSeed4)

  console.log('main5 - update DID')
  const randomMini5 = randomAsHex(32)
  await main5(keystore, faucetAccount, BlockchainUtils.IS_IN_BLOCK, randomMini5, did4.details as FullDidDetails)

  console.log('main6 - delete DID')
  await main6(faucetAccount, BlockchainUtils.IS_IN_BLOCK, did4.details as FullDidDetails)

  console.log('main7 - claim DID deposit')
  await main7(faucetAccount, BlockchainUtils.IS_IN_BLOCK, did3.details as FullDidDetails)

  console.log('main8 - claim DID deposit')
  const did8 = await main8(faucetAccount, BlockchainUtils.IS_IN_BLOCK, didAccount)
  console.log('main7 - again, delete DID from main8')
  await main7(faucetAccount, BlockchainUtils.IS_IN_BLOCK, did8.details as FullDidDetails)
}

runAll().catch((e) => {
  console.error('Oh no! There was an error!!', e)
  process.exit(1)
}).then(() => {
  process.exit(0)
})

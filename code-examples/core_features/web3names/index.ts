import { randomAsHex } from '@polkadot/util-crypto'

import { BlockchainUtils, SubscriptionPromise } from '@kiltprotocol/sdk-js'
import { DemoKeystore, Web3Names } from '@kiltprotocol/did'
import { Keyring, UUID } from '@kiltprotocol/utils'
import { connect as kiltConnect, init as kiltInit } from '@kiltprotocol/core'

import { main as createDid } from '../did/3_did'

import { main as main1 } from './1_web3name'
import { main as main2 } from './2_web3name'
import { main as main3 } from './3_web3name'

const SEED_ENV = 'FAUCET_SEED'

export async function runAll(
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  await kiltConnect()

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

  const did = await createDid(keystore, faucetAccount, randomAsHex(32), resolveOn)
  console.log(`DID randomly generated: "${did.did}"`)

  // Generate a random web3 name each time
  const web3Name = UUID.generate().substring(2, 34).toLowerCase()
  console.log(`Web3 name randomly generated: "${web3Name}"`)
  const web3NameOwner = await Web3Names.queryDidForWeb3Name(web3Name)
  if (web3NameOwner) {
    console.log(`Early exit. Web3 name "${web3Name}" already present.`)
    return
  }

  console.log('main1 - claim new Web3 name')
  await main1(keystore, did, faucetAccount, web3Name, resolveOn)

  console.log('main2 - release the Web3 name by the owner')
  await main2(keystore, did, faucetAccount, resolveOn)

  console.log('main1 - again, claim the Web3 name again')
  await main1(keystore, did, faucetAccount, web3Name, resolveOn)

  console.log('main3 - reclaim the Web3 name by the deposit payer')
  await main3(faucetAccount, web3Name, resolveOn)
}

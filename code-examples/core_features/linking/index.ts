import { mnemonicGenerate } from '@polkadot/util-crypto'

import { AccountLinks, DemoKeystore } from '@kiltprotocol/did'
import { BlockchainUtils, SubscriptionPromise } from '@kiltprotocol/sdk-js'
import { connect as kiltConnect, init as kiltInit } from '@kiltprotocol/core'
import { Keyring } from '@kiltprotocol/utils'

import { main as main1 } from './1_account_linking'
import { main as main2 } from './2_account_linking'
import { main as main3 } from './3_account_linking'
import { main as main4 } from './4_account_linking'

const SEED_ENV = 'FAUCET_SEED'

export async function runAll(
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await kiltConnect()

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

  // Generate a random account each time
  const newAccount = keyring.addFromMnemonic(mnemonicGenerate())
  console.log(`Account randomly generated: "${newAccount.address}"`)

  const accountLinkedDid = await AccountLinks.getConnectedDidForAccount(
    newAccount.address
  )
  if (accountLinkedDid) {
    console.log(`Early exit. Account "${newAccount}" already linked to a DID.`)
    return
  }

  console.log('main1 - link sender to DID')
  const fullDid = await main1(api, keystore, faucetAccount, resolveOn)

  const faucetLinkedDid = await AccountLinks.getConnectedDidForAccount(
    faucetAccount.address
  )
  if (faucetLinkedDid) {
    console.log(
      `Skipping main2 as the faucet account is already linked to did:kilt:${faucetLinkedDid}`
    )
    return
  }
  console.log('main2 - link submitter to DID')
  await main2(keystore, faucetAccount, newAccount, fullDid, resolveOn)

  console.log('main3 - remove submitter account link')
  await main3(faucetAccount, resolveOn)

  console.log('main4 - remove account link via DID')
  await main4(keystore, faucetAccount, newAccount.address, fullDid, resolveOn)
}

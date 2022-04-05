import { mnemonicGenerate } from '@polkadot/util-crypto'

import { AccountLinks, DemoKeystore, FullDidDetails } from '@kiltprotocol/did'
import { BlockchainUtils, SubscriptionPromise } from '@kiltprotocol/sdk-js'
import { Keyring } from '@kiltprotocol/utils'

import { main as main1 } from './1_account_linking'
import { main as main2 } from './2_account_linking'
import { main as main3 } from './3_account_linking'
import { main as main4 } from './4_account_linking'

const SEED_ENV = 'FAUCET_SEED'

export async function runAll(
  keystore: DemoKeystore,
  did: FullDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  const keyring = new Keyring({
    type: 'sr25519',
    ss58Format: 38
  })

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

  console.log('main1 - link account to DID')
  await main1(keystore, did, faucetAccount, newAccount, resolveOn)

  console.log('main2 - link submitter (faucet) to DID')
  await main2(keystore, did, faucetAccount, resolveOn)

  console.log('main3 - remove account link by DID')
  await main3(keystore, did, faucetAccount, newAccount.address, resolveOn)

  console.log('main4 - remove sender (faucet) link from DID')
  await main4(faucetAccount, resolveOn)
}

import { mnemonicGenerate } from '@polkadot/util-crypto'

import {
  AccountLinks,
  DemoKeystore,
  FullDidDetails,
  Web3Names
} from '@kiltprotocol/did'
import { BlockchainUtils, SubscriptionPromise } from '@kiltprotocol/sdk-js'
import { Keyring } from '@kiltprotocol/utils'

import { main as main1 } from './1_account_linking'
import { main as main2 } from './2_account_linking'
import { main as main3 } from './3_account_linking'
import { main as main4 } from './4_account_linking'
import { main as main5 } from './5_account_linking'

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

  const accountLinkedDid = await AccountLinks.queryConnectedDidForAccount(
    newAccount.address
  )
  if (accountLinkedDid) {
    console.log(`Early exit. Account "${newAccount}" already linked to a DID.`)
    return
  }

  let didWeb3Name = await Web3Names.queryWeb3NameForDidIdentifier(
    did.identifier
  )
  if (didWeb3Name) {
    console.log(`DID "${did.did}" associated to the name "${didWeb3Name}"`)
  } else {
    didWeb3Name = 'test-core-feature-name'
    console.log(
      `DID "${did.did}" not associated to any name. Claiming "${didWeb3Name}"...`
    )
    const signedTx = await Web3Names.getClaimTx(didWeb3Name).then((tx) =>
      did.authorizeExtrinsic(tx, keystore, faucetAccount.address)
    )
    await BlockchainUtils.signAndSubmitTx(signedTx, faucetAccount, {
      resolveOn
    })
    console.log('Web3 name claimed.')
  }

  console.log('main1 - link account to DID')
  await main1(keystore, did, faucetAccount, newAccount, resolveOn)

  console.log('main2 - link submitter (faucet) to DID')
  await main2(keystore, did, faucetAccount, resolveOn)

  console.log('main 3 - retrieving the account Web3 name')
  await main3(newAccount.address)

  console.log('main4 - remove account link by DID')
  await main4(keystore, did, faucetAccount, newAccount.address, resolveOn)

  console.log('main5 - remove sender (faucet) link from DID')
  await main5(faucetAccount, resolveOn)

  console.log(`Releasing the name "${didWeb3Name}"...`)
  const signedTx = await Web3Names.getReleaseByOwnerTx().then((tx) =>
    did.authorizeExtrinsic(tx, keystore, faucetAccount.address)
  )
  await BlockchainUtils.signAndSubmitTx(signedTx, faucetAccount, { resolveOn })
  console.log('Web3 name released.')
}

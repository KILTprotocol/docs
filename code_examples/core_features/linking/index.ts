import type { KeyringPair } from '@polkadot/keyring/types'

import { ApiPromise } from '@polkadot/api'

import { DemoKeystore, FullDidDetails } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

import { linkAccountToDid } from './01_did_link'
import { linkDidToAccount } from './02_account_link'
import { queryAccountWeb3Name as queryAccountWithSdk } from './03_account_web3name_query'
import { queryAccountWeb3Name as queryAccountWithoutSdk } from './04_account_web3name_query_no_sdk'
import { reclaimLinkDeposit } from './07_reclaim_deposit'
import { unlinkAccountFromDid } from './05_did_unlink'
import { unlinkDidFromAccount } from './06_account_unlink'

// The provided DID is assumed to have an associated Web3 name.
export async function runAll(
  keystore: DemoKeystore,
  api: ApiPromise,
  submitterAccount: KeyringPair,
  did: FullDidDetails,
  linkAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  console.log('Running linking flow...')
  console.log('1) Link link account to DID')
  await linkAccountToDid(
    keystore,
    did,
    submitterAccount,
    linkAccount,
    resolveOn
  )
  console.log('2) Link DID to submitter account')
  await linkDidToAccount(keystore, did, submitterAccount, resolveOn)
  console.log('3) Query Web3 name for link account with SDK')
  let web3Name = await queryAccountWithSdk(linkAccount.address)
  if (!web3Name) {
    throw `The DID "${did.did}" is assumed to have a linked Web3 name, which it does not.`
  }
  console.log('4) Query Web3 name for submitter account without SDK')
  web3Name = await queryAccountWithoutSdk(api, submitterAccount.address)
  if (!web3Name) {
    throw 'The retrieved Web3 name should have been the same as the one of the link account, which is not.'
  }
  console.log('5) Unlink link account from DID')
  await unlinkAccountFromDid(
    keystore,
    did,
    submitterAccount,
    linkAccount.address,
    resolveOn
  )
  console.log('6) Unlink submitter account from DID')
  await unlinkDidFromAccount(submitterAccount, resolveOn)
  console.log('7) Re-add submitter account and claim deposit back')
  await linkDidToAccount(keystore, did, submitterAccount, resolveOn)
  await reclaimLinkDeposit(submitterAccount, submitterAccount.address)
  console.log('Linking flow completed!')
}

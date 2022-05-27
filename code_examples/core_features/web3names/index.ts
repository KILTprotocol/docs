import type { KeyringPair } from '@polkadot/keyring/types'

import { DemoKeystore, FullDidDetails, Web3Names } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'

import { claimWeb3Name } from './01_claim'
import { queryPublishedCredentials } from './03_query_name_credentials'
import { reclaimWeb3NameDeposit } from './05_reclaim_deposit'
import { releaseWeb3Name } from './04_release'
import { verifyNameAndDidEquality } from './02_query_did_name'

export async function runAll(
  keystore: DemoKeystore,
  submitterAccount: KeyringPair,
  did: FullDidDetails,
  web3Name: Web3Names.Web3Name,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  console.log('Running Web3name flow...')
  console.log('1) Claim Web3 name')
  await claimWeb3Name(keystore, did, submitterAccount, web3Name, resolveOn)
  console.log('2) Verify Web3 name owner and DID Web3 name')
  await verifyNameAndDidEquality(web3Name, did.did)
  console.log('3) Query credentials for "john_doe" Web3 name')
  await queryPublishedCredentials('john_doe')
  console.log('4) Release Web3 name')
  await releaseWeb3Name(keystore, did, submitterAccount, resolveOn)
  console.log('5) Re-claim Web3 name and reclaim deposit')
  await claimWeb3Name(keystore, did, submitterAccount, web3Name, resolveOn)
  await reclaimWeb3NameDeposit(submitterAccount, web3Name, resolveOn)
  console.log('Web3name flow completed!')
}

import type { KeyringPair } from '@polkadot/keyring/types'

import { randomUUID } from 'crypto'

import { ApiPromise } from '@polkadot/api'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { DemoKeystore } from '@kiltprotocol/did'
import { SubscriptionPromise } from '@kiltprotocol/types'

import { createSimpleFullDid } from '../did/04_full_did_simple'

import { claimWeb3Name } from './01_claim'
import { queryPublishedCredentials } from './03_query_name_credentials'
import { reclaimWeb3NameDeposit } from './05_reclaim_deposit'
import { releaseWeb3Name } from './04_release'
import { verifyNameAndDidEquality } from './02_query_did_name'

export async function runAll(
  api: ApiPromise,
  submitterAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  console.log('Running Web3name flow...')
  const keystore = new DemoKeystore()
  const fullDid = await createSimpleFullDid(
    keystore,
    api,
    submitterAccount,
    undefined,
    resolveOn
  )
  const randomWeb3Name = randomUUID().substring(0, 32)

  console.log('1 w3n) Claim Web3 name')
  await claimWeb3Name(
    keystore,
    fullDid,
    submitterAccount,
    randomWeb3Name,
    resolveOn
  )
  console.log('2 w3n) Verify Web3 name owner and DID Web3 name')
  await verifyNameAndDidEquality(randomWeb3Name, fullDid.did)
  console.log('3 w3n) Query credentials for "john_doe" Web3 name')
  await queryPublishedCredentials('john_doe')
  console.log('4 w3n) Release Web3 name')
  await releaseWeb3Name(keystore, fullDid, submitterAccount, resolveOn)
  console.log('5 w3n) Re-claim Web3 name and reclaim deposit')
  await claimWeb3Name(
    keystore,
    fullDid,
    submitterAccount,
    randomWeb3Name,
    resolveOn
  )
  await reclaimWeb3NameDeposit(submitterAccount, randomWeb3Name, resolveOn)
  console.log('Web3name flow completed!')
}

import type { KeyringPair } from '@polkadot/keyring/types'

import { FetchError } from 'node-fetch'
import { randomUUID } from 'crypto'

import { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { claimWeb3Name } from './01_claim'
import { createSimpleFullDid } from '../did/04_full_did_simple'
import { queryPublishedCredentials } from './03_query_name_credentials'
import { reclaimWeb3NameDeposit } from './05_reclaim_deposit'
import { releaseWeb3Name } from './04_release'
import { verifyNameAndDidEquality } from './02_query_did_name'

export async function runAll(
  api: ApiPromise,
  submitterAccount: KeyringPair,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  console.log('Running web3name flow...')
  const keystore = new Kilt.Did.DemoKeystore()
  const fullDid = await createSimpleFullDid(
    keystore,
    api,
    submitterAccount,
    undefined,
    resolveOn
  )
  const randomWeb3Name = randomUUID().substring(0, 32)

  console.log('1 w3n) Claim web3name')
  await claimWeb3Name(
    keystore,
    fullDid,
    submitterAccount,
    randomWeb3Name,
    resolveOn
  )
  console.log('2 w3n) Verify web3name owner and DID web3name')
  await verifyNameAndDidEquality(randomWeb3Name, fullDid.did)
  console.log('3 w3n) Query credentials for "john_doe" web3name')
  try {
    await queryPublishedCredentials('john_doe')
  } catch (e) {
    if (e instanceof FetchError) {
      console.log(
        'Query credentials for "john_doe" web3name failed because of bad IPFS gateway. Ignoring this.'
      )
    } else {
      // This one should not have happened.
      throw e
    }
  }
  console.log('4 w3n) Release web3name')
  await releaseWeb3Name(keystore, fullDid, submitterAccount, resolveOn)
  console.log('5 w3n) Re-claim web3name and reclaim deposit')
  await claimWeb3Name(
    keystore,
    fullDid,
    submitterAccount,
    randomWeb3Name,
    resolveOn
  )
  await reclaimWeb3NameDeposit(submitterAccount, randomWeb3Name, resolveOn)
  console.log('web3name flow completed!')
}

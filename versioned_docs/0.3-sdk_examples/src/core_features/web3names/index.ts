import { FetchError } from 'node-fetch'
import { randomUUID } from 'crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { claimWeb3Name } from './01_claim'
import { createSimpleFullDid } from '../did/04_full_did_simple'
import { queryDidDocument } from './02_query_did_name'
import { queryPublishedCredentials } from './03_query_name_credentials'
import { reclaimWeb3NameDeposit } from './05_reclaim_deposit'
import { releaseWeb3Name } from './04_release'

import { generateKeypairs } from '../utils/generateKeypairs'

export async function runAll(
  submitterAccount: Kilt.KiltKeyringPair
): Promise<void> {
  console.log('Running web3name flow...')
  const { authentication } = generateKeypairs()
  const fullDid = await createSimpleFullDid(
    submitterAccount,
    {
      authentication
    },
    async ({ data }) => ({
      signature: authentication.sign(data),
      keyType: authentication.type
    })
  )
  const randomWeb3Name = randomUUID().substring(0, 32)

  console.log('1 w3n) Claim web3name')
  await claimWeb3Name(
    fullDid.uri,
    submitterAccount,
    randomWeb3Name,
    async ({ data }) => ({
      signature: authentication.sign(data),
      keyType: authentication.type
    })
  )
  console.log('2 w3n) Verify web3name owner and DID web3name')
  const doc = await queryDidDocument(randomWeb3Name)
  if (doc.uri !== fullDid.uri) {
    throw new Error('web3name is registered for a wrong DID')
  }

  console.log('3 w3n) Query credentials for "kiltnerd123" web3name')
  try {
    await queryPublishedCredentials('kiltnerd123')
  } catch (e) {
    if (e instanceof FetchError) {
      console.log(
        'Query credentials for "kiltnerd123" web3name failed because of bad IPFS gateway. Ignoring this.'
      )
    } else {
      // This one should not have happened.
      throw e
    }
  }
  console.log('4 w3n) Release web3name')
  await releaseWeb3Name(fullDid.uri, submitterAccount, async ({ data }) => ({
    signature: authentication.sign(data),
    keyType: authentication.type
  }))
  console.log('5 w3n) Re-claim web3name and reclaim deposit')
  await claimWeb3Name(
    fullDid.uri,
    submitterAccount,
    randomWeb3Name,
    async ({ data }) => ({
      signature: authentication.sign(data),
      keyType: authentication.type
    })
  )
  await reclaimWeb3NameDeposit(submitterAccount, randomWeb3Name)
  console.log('web3name flow completed!')
}

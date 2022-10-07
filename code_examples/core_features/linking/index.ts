import type { KeyringPair } from '@polkadot/keyring/types'

import { randomUUID } from 'crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { claimWeb3Name } from '../web3names/01_claim'
import { createSimpleFullDid } from '../did/04_full_did_simple'

import { linkAccountToDid } from './01_did_link'
import { linkDidToAccount } from './02_account_link'
import { queryAccountWeb3Name as queryAccountWithSdk } from './03_account_web3name_query'
import { queryAccountWeb3Name as queryAccountWithoutSdk } from './04_account_web3name_query_no_sdk'
import { reclaimLinkDeposit } from './07_reclaim_deposit'
import { unlinkAccountFromDid } from './05_did_unlink'
import { unlinkDidFromAccount } from './06_account_unlink'

import generateKeypairs from '../utils/generateKeypairs'

// The provided DID is assumed to have an associated web3name.
export async function runAll(
  endpoint: string,
  submitterAccount: Kilt.KiltKeyringPair,
  linkAccount: KeyringPair
): Promise<void> {
  console.log('Running linking flow...')
  const { authentication } = generateKeypairs()
  const fullDid = await createSimpleFullDid(
    submitterAccount,
    {
      authentication
    },
    async ({ data }) => ({
      data: authentication.sign(data),
      keyType: authentication.type,
      // Not relevant in this case
      keyUri: `did:kilt:${submitterAccount.address}#id`
    })
  )
  const randomWeb3Name = randomUUID().substring(0, 32)
  await claimWeb3Name(
    fullDid.uri,
    submitterAccount,
    randomWeb3Name,
    async ({ data }) => ({
      data: authentication.sign(data),
      keyType: authentication.type,
      // Not relevant in this case
      keyUri: `${fullDid.uri}#id`
    })
  )

  console.log('1 linking) Link link account to DID')
  await linkAccountToDid(
    fullDid.uri,
    submitterAccount,
    linkAccount,
    async ({ data }) => ({
      data: authentication.sign(data),
      keyType: authentication.type,
      // Not relevant in this case
      keyUri: `${fullDid.uri}#id`
    })
  )
  console.log('2 linking) Link DID to submitter account')
  await linkDidToAccount(fullDid.uri, submitterAccount, async ({ data }) => ({
    data: authentication.sign(data),
    keyType: authentication.type,
    // Not relevant in this case
    keyUri: `${fullDid.uri}#id`
  }))
  console.log('3 linking) Query web3name for link account with SDK')
  let web3Name = await queryAccountWithSdk(linkAccount.address)
  if (!web3Name) {
    throw `The DID "${fullDid.uri}" is assumed to have a linked web3name, which it does not.`
  }
  console.log('4 linking) Query web3name for submitter account without SDK')
  web3Name = await queryAccountWithoutSdk(endpoint, submitterAccount.address)
  if (!web3Name) {
    throw 'The retrieved web3name should have been the same as the one of the link account, which is not.'
  }
  console.log('5 linking) Unlink link account from DID')
  await unlinkAccountFromDid(
    fullDid.uri,
    submitterAccount,
    linkAccount.address,
    async ({ data }) => ({
      data: authentication.sign(data),
      keyType: authentication.type,
      // Not relevant in this case
      keyUri: `${fullDid.uri}#id`
    })
  )
  console.log('6 linking) Unlink submitter account from DID')
  await unlinkDidFromAccount(submitterAccount)
  console.log('7 linking) Re-add submitter account and claim deposit back')
  await linkDidToAccount(fullDid.uri, submitterAccount, async ({ data }) => ({
    data: authentication.sign(data),
    keyType: authentication.type,
    // Not relevant in this case
    keyUri: `${fullDid.uri}#id`
  }))
  await reclaimLinkDeposit(submitterAccount, submitterAccount.address)
  console.log('Linking flow completed!')
}

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
// The provided DID is assumed to have an associated web3name.
export async function runAll(
  api,
  submitterAccount,
  linkAccount,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  console.log('Running linking flow...')
  const keystore = new Kilt.Did.DemoKeystore()
  const fullDid = await createSimpleFullDid(
    keystore,
    api,
    submitterAccount,
    undefined,
    resolveOn
  )
  const randomWeb3Name = randomUUID().substring(0, 32)
  await claimWeb3Name(
    keystore,
    fullDid,
    submitterAccount,
    randomWeb3Name,
    resolveOn
  )
  console.log('1 linking) Link link account to DID')
  await linkAccountToDid(
    keystore,
    fullDid,
    submitterAccount,
    linkAccount,
    resolveOn
  )
  console.log('2 linking) Link DID to submitter account')
  await linkDidToAccount(keystore, fullDid, submitterAccount, resolveOn)
  console.log('3 linking) Query web3name for link account with SDK')
  let web3Name = await queryAccountWithSdk(linkAccount.address)
  if (!web3Name) {
    throw `The DID "${fullDid.uri}" is assumed to have a linked web3name, which it does not.`
  }
  console.log('4 linking) Query web3name for submitter account without SDK')
  web3Name = await queryAccountWithoutSdk(api, submitterAccount.address)
  if (!web3Name) {
    throw 'The retrieved web3name should have been the same as the one of the link account, which is not.'
  }
  console.log('5 linking) Unlink link account from DID')
  await unlinkAccountFromDid(
    keystore,
    fullDid,
    submitterAccount,
    linkAccount.address,
    resolveOn
  )
  console.log('6 linking) Unlink submitter account from DID')
  await unlinkDidFromAccount(submitterAccount, resolveOn)
  console.log('7 linking) Re-add submitter account and claim deposit back')
  await linkDidToAccount(keystore, fullDid, submitterAccount, resolveOn)
  await reclaimLinkDeposit(submitterAccount, submitterAccount.address)
  console.log('Linking flow completed!')
}

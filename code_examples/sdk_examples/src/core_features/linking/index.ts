import { Keyring } from '@polkadot/api'

import { randomAsU8a } from '@polkadot/util-crypto'

import Web3 from 'web3'
const web3 = new Web3()

import { randomUUID } from 'crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { claimWeb3Name } from '../web3names/01_claim'
import { createSimpleFullDid } from '../did/04_full_did_simple'

import { linkAccountToDid as linkEthAccountToDid } from './01_eth_link'
import { linkAccountToDid as linkEthAccountToDidWeb3js } from './01_eth_link_web3js'
import { linkDidToAccount as linkSenderToDid } from './02_sender_link'
import { linkAccountToDid as linkSubAccountToDid } from './01_sub_link'
import { queryAccountWeb3Name as queryAccountWithSdk } from './03_account_web3name_query'
import { queryAccountWeb3Name as queryAccountWithoutSdk } from './04_account_web3name_query_no_sdk'
import { reclaimLinkDeposit } from './07_reclaim_deposit'
import { unlinkAccountFromDid } from './05_did_unlink'
import { unlinkDidFromAccount } from './06_account_unlink'

import { generateKeypairs } from '../utils/generateKeypairs'

// The provided DID is assumed to have an associated web3name.
export async function runAll(
  keyring: Keyring,
  endpoint: string,
  submitterAccount: Kilt.KiltKeyringPair,
  linkAccount: Kilt.KiltKeyringPair & { type: 'ed25519' | 'sr25519' | 'ecdsa' }
): Promise<void> {
  console.log('Running linking flow...')
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
  await claimWeb3Name(
    fullDid.uri,
    submitterAccount,
    randomWeb3Name,
    async ({ data }) => ({
      signature: authentication.sign(data),
      keyType: authentication.type
    })
  )

  console.log('1.1 linking) Link link account to DID')
  await linkSubAccountToDid(
    fullDid.uri,
    submitterAccount,
    linkAccount,
    async ({ data }) => ({
      signature: authentication.sign(data),
      keyType: authentication.type
    })
  )

  // Link eth address using polkadot-js
  {
    console.log('1.2.1 linking) Link eth account to DID (polkadot-js)')
    const linkEthAccount = keyring.addFromSeed(
      randomAsU8a(32),
      undefined,
      'ethereum'
    ) as Kilt.KeyringPair & { type: 'ethereum' }
    await linkEthAccountToDid(
      fullDid.uri,
      submitterAccount,
      linkEthAccount,
      async ({ data }) => ({
        signature: authentication.sign(data),
        keyType: authentication.type
      })
    )
  }

  // link eth address using web3js
  {
    console.log('1.2.2 linking) Link eth account to DID (web3js)')
    const ethSecretKey = randomAsU8a(32)
    const linkEthAddress = web3.eth.accounts.privateKeyToAccount(
      Kilt.Utils.Crypto.u8aToHex(ethSecretKey)
    ).address

    await linkEthAccountToDidWeb3js(
      fullDid.uri,
      submitterAccount,
      Kilt.Utils.Crypto.u8aToHex(ethSecretKey),
      linkEthAddress,
      async ({ data }) => ({
        signature: authentication.sign(data),
        keyType: authentication.type
      })
    )
  }

  console.log('2 linking) Link DID to submitter account')
  await linkSenderToDid(fullDid.uri, submitterAccount, async ({ data }) => ({
    signature: authentication.sign(data),
    keyType: authentication.type
  }))
  console.log('3 linking) Query web3name for link account with SDK')
  let web3Name = await queryAccountWithSdk(linkAccount.address)
  if (!web3Name) {
    throw new Error(
      `The DID "${fullDid.uri}" is assumed to have a linked web3name, which it does not.`
    )
  }
  console.log('4 linking) Query web3name for submitter account without SDK')
  web3Name = await queryAccountWithoutSdk(endpoint, submitterAccount.address)
  if (!web3Name) {
    throw new Error(
      'The retrieved web3name should have been the same as the one of the link account, which is not.'
    )
  }
  console.log('5 linking) Unlink link account from DID')
  await unlinkAccountFromDid(
    fullDid.uri,
    submitterAccount,
    linkAccount.address,
    async ({ data }) => ({
      signature: authentication.sign(data),
      keyType: authentication.type
    })
  )
  console.log('6 linking) Unlink submitter account from DID')
  await unlinkDidFromAccount(submitterAccount)
  console.log('7 linking) Re-add submitter account and claim deposit back')
  await linkSenderToDid(fullDid.uri, submitterAccount, async ({ data }) => ({
    signature: authentication.sign(data),
    keyType: authentication.type
  }))
  await reclaimLinkDeposit(submitterAccount, submitterAccount.address)
  console.log('Linking flow completed!')
}

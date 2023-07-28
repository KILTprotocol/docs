import * as Kilt from '@kiltprotocol/sdk-js'

import { createCompleteFullDid } from '../did/05_full_did_complete'

import { createNftCollectionCType } from './01_create_ctype'
import { createNftCollectionCredential } from './02_create_credential'
import { fetchCredentialById } from './04_retrieve_credential_by_id'
import { issueCredential } from './03_issue_credential'
import { reclaimDeposit } from './10_reclaim_deposit'
import { retrieveAllAssetCredentials } from './05_retrieve_credentials_by_subject'
import { revokeCredential } from './08_revoke_remove_credential_by_content'
import { revokeCredentialById } from './07_revoke_remove_credential_by_id'
import { unrevokeCredential } from './09_unrevoke_credential'
import { verifyCredential } from './06_verify_credential'

import { generateKeypairs } from '../utils/generateKeypairs'

export async function runAll(
  submitterAccount: Kilt.KiltKeyringPair
): Promise<void> {
  console.log('Running public credentials flow...')
  const keypairs = generateKeypairs()
  const attesterDid = await createCompleteFullDid(
    submitterAccount,
    keypairs,
    async ({ data }) => ({
      signature: keypairs.authentication.sign(data),
      keyType: keypairs.authentication.type
    })
  )

  console.log('1 public credentials) Create CType')
  const ctype = await createNftCollectionCType(
    attesterDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: keypairs.assertionMethod.sign(data),
      keyType: keypairs.assertionMethod.type
    })
  )

  console.log('2 public credentials) Create credential object')
  const { authentication } = generateKeypairs()
  const artistDid = Kilt.Did.getFullDidUriFromKey(authentication)
  const collectionDid: Kilt.AssetDidUri =
    'did:asset:eip155:1.erc721:0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'
  const credential = createNftCollectionCredential(
    ctype,
    collectionDid,
    artistDid
  )
  console.log('3 public credentials) Issue credential')
  await issueCredential(
    attesterDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: keypairs.assertionMethod.sign(data),
      keyType: keypairs.assertionMethod.type
    }),
    credential
  )
  console.log('4 public credentials) Fetch credential by ID')
  const credentialId = Kilt.PublicCredential.getIdForCredential(
    credential,
    attesterDid.uri
  )
  const fetchedCredential = await fetchCredentialById(credentialId)
  if (!fetchedCredential) {
    throw new Error(
      `Was not possible to retrieve just-issued credential with ID ${credentialId}`
    )
  }
  console.log('5 public credentials) Retrieve credentials by subject')
  const retrievedCredentials = await retrieveAllAssetCredentials(collectionDid)
  if (!retrievedCredentials) {
    throw new Error(
      `Was not possible to retrieve just-issued credentials for asset ${collectionDid}`
    )
  }
  console.log('6 public credentials) Verify credential')
  await verifyCredential(fetchedCredential)
  await verifyCredential(retrievedCredentials[0])
  console.log('7 public credentials) Revoke and remove credential by ID')
  await revokeCredentialById(
    attesterDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: keypairs.assertionMethod.sign(data),
      keyType: keypairs.assertionMethod.type
    }),
    credentialId,
    true
  )
  console.log('8.1 public credentials) Re-issue credential')
  await issueCredential(
    attesterDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: keypairs.assertionMethod.sign(data),
      keyType: keypairs.assertionMethod.type
    }),
    credential
  )
  console.log('8.2 public credentials) Revoke credential')
  await revokeCredential(
    attesterDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: keypairs.assertionMethod.sign(data),
      keyType: keypairs.assertionMethod.type
    }),
    credential
  )
  console.log('9 public credentials) Unrevoke credential')
  await unrevokeCredential(
    attesterDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: keypairs.assertionMethod.sign(data),
      keyType: keypairs.assertionMethod.type
    }),
    credential
  )
  console.log('10 public credentials) Reclaim deposit')
  await reclaimDeposit(submitterAccount, fetchedCredential)

  console.log('Public credentials flow completed!')
}

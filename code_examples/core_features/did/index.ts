import { stringToU8a } from '@polkadot/util'

import * as Kilt from '@kiltprotocol/sdk-js'

import { batchCTypeCreationExtrinsics } from './08_full_did_batch'
import { createCompleteFullDid } from './05_full_did_complete'
import { createCompleteLightDid } from './02_light_did_complete'
import { createSimpleFullDid } from './04_full_did_simple'
import { createSimpleLightDid } from './01_light_did_simple'
import { deleteFullDid } from './10_full_did_delete'
import { generateAndVerifyDidAuthenticationSignature } from './09_did_signature'
import { migrateLightDid } from './03_light_did_migrate'
import { queryFullDid } from './06_full_did_query'
import { reclaimFullDidDeposit } from './11_full_did_deposit_reclaim'
import { updateFullDid } from './07_full_did_update'

import generateDidKeypairs from '../utils/generateKeypairs'

export async function runAll(
  submitterAccount: Kilt.KiltKeyringPair
): Promise<void> {
  console.log('Running DID flow...')

  console.log('1 did) Create simple light DID')
  const { authentication: simpleLightDidAuth } = generateDidKeypairs()
  const simpleLightDid = createSimpleLightDid({
    authentication: simpleLightDidAuth
  })
  console.log('2 did) Create complete light DID')
  const {
    authentication: completeLightDidAuth,
    encryption: completeLightDidEnc
  } = generateDidKeypairs()
  createCompleteLightDid({
    authentication: completeLightDidAuth,
    encryption: completeLightDidEnc
  })
  console.log('3 did) Migrate first light DID to full DID')
  await migrateLightDid(simpleLightDid, submitterAccount, async ({ data }) => ({
    signature: simpleLightDidAuth.sign(data),
    keyType: simpleLightDidAuth.type
  }))
  console.log('4 did) Create simple full DID')
  const { authentication: simpleFullDidAuth } = generateDidKeypairs()
  const createdSimpleFullDid = await createSimpleFullDid(
    submitterAccount,
    {
      authentication: simpleFullDidAuth
    },
    async ({ data }) => ({
      signature: simpleFullDidAuth.sign(data),
      keyType: simpleFullDidAuth.type
    })
  )
  console.log('5 did) Create complete full DID')
  const {
    authentication: completeFullDidAuth,
    encryption: completeFullDidEnc,
    attestation: completeFullDidAtt,
    delegation: completeFullDidDel
  } = generateDidKeypairs()
  const createdCompleteFullDid = await createCompleteFullDid(
    submitterAccount,
    {
      authentication: completeFullDidAuth,
      encryption: completeFullDidEnc,
      attestation: completeFullDidAtt,
      delegation: completeFullDidDel
    },
    async ({ data }) => ({
      signature: completeFullDidAuth.sign(data),
      keyType: completeFullDidAuth.type
    })
  )
  console.log('6 did) Query full DID')
  queryFullDid(createdCompleteFullDid.uri)
  console.log('7 did) Update full DID created at step 5')
  const { authentication: newCompleteFullDidAuth } = generateDidKeypairs()
  const updatedFullDid = await updateFullDid(
    newCompleteFullDidAuth,
    createdCompleteFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: completeFullDidAuth.sign(data),
      keyType: completeFullDidAuth.type
    })
  )
  console.log(
    '8 did) Use the same full DID created at step 5 to sign the batch'
  )
  await batchCTypeCreationExtrinsics(
    submitterAccount,
    updatedFullDid.uri,
    async ({ data }) => ({
      signature: completeFullDidAtt.sign(data),
      keyType: completeFullDidAtt.type
    })
  )
  console.log(
    '9 did) Use the same full DID created at step 5 to generate the signature'
  )
  await generateAndVerifyDidAuthenticationSignature(
    updatedFullDid,
    stringToU8a('test-payload'),
    async () => ({
      key: newCompleteFullDidAuth,
      keyType: newCompleteFullDidAuth.type,
      keyUri: `${updatedFullDid.uri}${updatedFullDid.authentication[0].id}`
    })
  )
  console.log('10 did) Delete full DID created at step 4')
  await deleteFullDid(
    submitterAccount,
    createdSimpleFullDid.uri,
    async ({ data }) => ({
      signature: simpleFullDidAuth.sign(data),
      keyType: simpleFullDidAuth.type
    })
  )
  console.log('11 did) Delete full DID created at step 5')
  await reclaimFullDidDeposit(submitterAccount, createdCompleteFullDid.uri)
  console.log('DID flow completed!')
}

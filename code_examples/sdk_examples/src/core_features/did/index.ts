import { stringToU8a } from '@polkadot/util'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createCompleteFullDid } from './05_full_did_complete'
import { createCompleteLightDid } from './02_light_did_complete'
import { createSimpleFullDid } from './04_full_did_simple'
import { createSimpleLightDid } from './01_light_did_simple'
import { deleteFullDid } from './11_full_did_delete'
import { exportDid } from './12_did_export'
import { generateAndVerifyDidAuthenticationSignature } from './10_did_signature'
import { migrateLightDid } from './03_light_did_migrate'
import { queryFullDid } from './06_did_query'
import { reclaimFullDidDeposit } from './13_full_did_deposit_reclaim'
import { signAndSubmitDidExtrinsic } from './09_full_did_tx'
import { signAndSubmitDidExtrinsicBatch } from './08_full_did_batch'
import { updateFullDid } from './07_full_did_update'

import { generateKeypairs } from '../utils/generateKeypairs'

export async function runAll(
  submitterAccount: Kilt.KiltKeyringPair
): Promise<void> {
  console.log('Running DID flow...')

  console.log('1 did) Create simple light DID')
  const { authentication: simpleLightDidAuth } = generateKeypairs()
  const simpleLightDid = createSimpleLightDid({
    authentication: simpleLightDidAuth
  })
  console.log('2 did) Create complete light DID')
  const {
    authentication: completeLightDidAuth,
    keyAgreement: completeLightDidEnc
  } = generateKeypairs()
  createCompleteLightDid({
    authentication: completeLightDidAuth,
    keyAgreement: completeLightDidEnc
  })
  console.log('3 did) Migrate first light DID to full DID')
  await migrateLightDid(simpleLightDid, submitterAccount, async ({ data }) => ({
    signature: simpleLightDidAuth.sign(data),
    keyType: simpleLightDidAuth.type
  }))
  console.log('4 did) Create simple full DID')
  const { authentication: simpleFullDidAuth } = generateKeypairs()
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
    keyAgreement: completeFullDidEnc,
    assertionMethod: completeFullDidAtt,
    capabilityDelegation: completeFullDidDel
  } = generateKeypairs()
  const createdCompleteFullDid = await createCompleteFullDid(
    submitterAccount,
    {
      authentication: completeFullDidAuth,
      keyAgreement: completeFullDidEnc,
      assertionMethod: completeFullDidAtt,
      capabilityDelegation: completeFullDidDel
    },
    async ({ data }) => ({
      signature: completeFullDidAuth.sign(data),
      keyType: completeFullDidAuth.type
    })
  )
  console.log('6 did) Query full DID')
  queryFullDid(createdCompleteFullDid.uri)

  console.log('7 did) Update full DID created at step 5')
  const { authentication: newCompleteFullDidAuth } = generateKeypairs()
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
    '8.1 did) Use the same full DID created at step 5 to sign the batch'
  )
  await signAndSubmitDidExtrinsicBatch(
    submitterAccount,
    updatedFullDid.uri,
    async ({ data }) => ({
      signature: completeFullDidAtt.sign(data),
      keyType: completeFullDidAtt.type
    })
  )

  console.log(
    '8.2 did) Use the same full DID created at step 5 to sign the single tx'
  )
  await signAndSubmitDidExtrinsic(
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
  console.log('11 did) Export DID created at step 5')
  await exportDid(createdCompleteFullDid, 'application/ld+json')
  console.log('12 did) Delete full DID created at step 5')
  await reclaimFullDidDeposit(submitterAccount, createdCompleteFullDid.uri)
  console.log('DID flow completed!')
}

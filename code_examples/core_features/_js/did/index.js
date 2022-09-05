import { randomAsHex } from '@polkadot/util-crypto'
import * as Kilt from '@kiltprotocol/sdk-js'
import { batchCTypeCreationExtrinsics } from './07_full_did_batch'
import { createCompleteFullDid } from './05_full_did_complete'
import { createCompleteLightDid } from './02_light_did_complete'
import { createSimpleFullDid } from './04_full_did_simple'
import { createSimpleLightDid } from './01_light_did_simple'
import { deleteFullDid } from './09_full_did_delete'
import { generateAndVerifyDidAuthenticationSignature } from './08_did_signature'
import { migrateLightDid } from './03_light_did_migrate'
import { reclaimFullDidDeposit } from './10_full_did_deposit_reclaim'
import { updateFullDid } from './06_full_did_update'
export async function runAll(
  api,
  submitterAccount,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  console.log('Running DID flow...')
  const keystore = new Kilt.Did.DemoKeystore()
  console.log('1 did) Create simple light DID')
  let randomSeed = randomAsHex(32)
  const simpleLightDid = await createSimpleLightDid(keystore, randomSeed)
  randomSeed = randomAsHex(32)
  console.log('2 did) Create complete light DID')
  await createCompleteLightDid(keystore, randomSeed)
  console.log('3 did) Migrate first light DID to full DID')
  await migrateLightDid(keystore, submitterAccount, simpleLightDid, resolveOn)
  console.log('4 did) Create simple full DID')
  const createdSimpleFullDid = await createSimpleFullDid(
    keystore,
    api,
    submitterAccount,
    undefined,
    resolveOn
  )
  console.log('5 did) Create complete full DID')
  const createdCompleteFullDid = await createCompleteFullDid(
    keystore,
    api,
    submitterAccount,
    undefined,
    resolveOn
  )
  console.log('6 did) Update full DID created at step 5')
  const updatedFullDid = await updateFullDid(
    keystore,
    api,
    submitterAccount,
    createdCompleteFullDid,
    resolveOn
  )
  console.log(
    '7 did) Use the same full DID created at step 5 to sign the batch'
  )
  await batchCTypeCreationExtrinsics(
    keystore,
    api,
    submitterAccount,
    updatedFullDid,
    resolveOn
  )
  console.log(
    '8 did) Use the same full DID created at step 5 to generate the signature'
  )
  await generateAndVerifyDidAuthenticationSignature(
    keystore,
    updatedFullDid,
    'test-payload'
  )
  console.log('9 did) Delete full DID created at step 4')
  await deleteFullDid(
    keystore,
    submitterAccount,
    createdSimpleFullDid,
    resolveOn
  )
  console.log('10 did) Delete full DID created at step 5')
  await reclaimFullDidDeposit(
    submitterAccount,
    createdCompleteFullDid.identifier,
    resolveOn
  )
  console.log('DID flow completed!')
}

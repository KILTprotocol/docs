import { ApiPromise, Keyring } from '@polkadot/api'
import { blake2AsU8a, randomAsU8a } from '@polkadot/util-crypto'

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
  api: ApiPromise,
  submitterAccount: Kilt.KiltKeyringPair,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  console.log('Running DID flow...')
  const keyring = new Keyring({ ss58Format: Kilt.Utils.ss58Format })
  const signCallback: Kilt.SignCallback<Kilt.SigningAlgorithms> = async ({
    data,
    alg,
    publicKey
  }) => {
    // Taken from https://github.com/polkadot-js/common/blob/master/packages/keyring/src/pair/index.ts#L44
    const address =
      alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey
    const key = keyring.getPair(address)

    return { data: key.sign(data), alg }
  }

  console.log('1 did) Create simple light DID')
  let randomSeed = randomAsU8a(32)
  const simpleLightDid = await createSimpleLightDid(keyring, randomSeed)
  randomSeed = randomAsU8a(32)
  console.log('2 did) Create complete light DID')
  await createCompleteLightDid(keyring, randomSeed)
  console.log('3 did) Migrate first light DID to full DID')
  await migrateLightDid(
    simpleLightDid,
    submitterAccount,
    signCallback,
    resolveOn
  )
  console.log('4 did) Create simple full DID')
  const createdSimpleFullDid = await createSimpleFullDid(
    keyring,
    submitterAccount,
    undefined,
    signCallback,
    resolveOn
  )
  console.log('5 did) Create complete full DID')
  const createdCompleteFullDid = await createCompleteFullDid(
    keyring,
    submitterAccount,
    undefined,
    signCallback,
    resolveOn
  )
  console.log('6 did) Update full DID created at step 5')
  const updatedFullDid = await updateFullDid(
    keyring,
    createdCompleteFullDid,
    submitterAccount,
    signCallback,
    resolveOn
  )
  console.log(
    '7 did) Use the same full DID created at step 5 to sign the batch'
  )
  await batchCTypeCreationExtrinsics(
    api,
    submitterAccount,
    updatedFullDid,
    signCallback,
    resolveOn
  )
  console.log(
    '8 did) Use the same full DID created at step 5 to generate the signature'
  )
  await generateAndVerifyDidAuthenticationSignature(
    updatedFullDid,
    'test-payload',
    signCallback
  )
  console.log('9 did) Delete full DID created at step 4')
  await deleteFullDid(
    submitterAccount,
    createdSimpleFullDid,
    signCallback,
    resolveOn
  )
  console.log('10 did) Delete full DID created at step 5')
  await reclaimFullDidDeposit(
    submitterAccount,
    createdCompleteFullDid.uri,
    resolveOn
  )
  console.log('DID flow completed!')
}

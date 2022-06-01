import type { KeyringPair } from '@polkadot/keyring/types'

import { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createCompleteFullDid } from '../did/05_full_did_complete'
import { createSimpleLightDid } from '../did/01_light_did_simple'

import { createAttestation } from './03_create_attestation'
import { createDriversLicenseCType } from './01_create_ctype'
import { createPresentation } from './04_create_presentation'
import { reclaimAttestationDeposit } from './07_reclaim_attestation_deposit'
import { requestAttestation } from './02_request_attestation'
import { revokeCredential } from './06_revoke_attestation'
import { verifyPresentation } from './05_verify_presentation'

export async function runAll(
  api: ApiPromise,
  submitterAccount: KeyringPair,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  console.log('Running claiming flow...')
  const keystore = new Kilt.Did.DemoKeystore()
  const claimerLightDid = await createSimpleLightDid(keystore)
  const attesterFullDid = await createCompleteFullDid(
    keystore,
    api,
    submitterAccount,
    undefined,
    resolveOn
  )

  console.log('1 claming) Create CType')
  const ctype = await createDriversLicenseCType(
    keystore,
    attesterFullDid,
    submitterAccount,
    resolveOn
  )
  console.log('2 claiming) Create request for attestation')
  const requestForAttestation = await requestAttestation(
    keystore,
    claimerLightDid,
    ctype
  )
  console.log('3 claiming) Create attestation and credential')
  const credential = await createAttestation(
    keystore,
    requestForAttestation,
    attesterFullDid,
    submitterAccount,
    resolveOn
  )
  console.log('4 claiming) Create selective disclosure presentation')
  const presentation = await createPresentation(
    keystore,
    claimerLightDid,
    credential,
    ['name', 'id']
  )
  console.log('5 claiming) Verify selective disclosure presentation')
  const isPresentationVerified = await verifyPresentation(presentation)
  if (!isPresentationVerified) {
    throw 'Presentation could not be verified.'
  }
  console.log('6 claiming) Revoke attestation')
  await revokeCredential(keystore, attesterFullDid, submitterAccount, credential, false, resolveOn)
  console.log('7 claiming) Reclaim attestation deposit')
  await reclaimAttestationDeposit(submitterAccount, credential, resolveOn)

  console.log('Claiming flow completed!')
}

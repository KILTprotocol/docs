import type { KeyringPair } from '@polkadot/keyring/types'

import { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createCompleteFullDid } from '../did/05_full_did_complete'
import { createSimpleLightDid } from '../did/01_light_did_simple'

import { createAttestation } from './04_create_attestation'
import { createClaim } from './02_create_claim'
import { createDriversLicenseCType } from './01_create_ctype'
import { createPresentation } from './06_create_presentation'
import { createRequestForAttestation } from './03_create_request_for_attestation'
import { verifyCredential } from './05_verify_credential'
import { verifyPresentation } from './07_verify_presentation'

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
  console.log('2 claiming) Create claim')
  const claim = await createClaim(ctype, claimerLightDid.did)
  console.log('3 claiming) Create request for attestation')
  const requestForAttestation = await createRequestForAttestation(
    keystore,
    claim,
    claimerLightDid
  )
  console.log('4 claiming) Create attestation and credential')
  const credential = await createAttestation(
    keystore,
    requestForAttestation,
    attesterFullDid,
    submitterAccount,
    resolveOn
  )
  console.log('5 claiming) Verify credential')
  const isCredentialVerified = await verifyCredential(credential)
  if (!isCredentialVerified) {
    throw 'Credential could not be verified.'
  }

  console.log('6 claiming) Create selective disclosure presentation')
  const presentation = await createPresentation(
    keystore,
    claimerLightDid,
    credential,
    ['name', 'id']
  )
  console.log('7 claiming) Verify selective disclosure presentation')
  const isPresentationVerified = await verifyPresentation(presentation)
  if (!isPresentationVerified) {
    throw 'Presentation could not be verified.'
  }

  console.log('Claiming flow completed!')
}

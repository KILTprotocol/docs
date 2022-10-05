import * as Kilt from '@kiltprotocol/sdk-js'

import { createCompleteFullDid } from '../did/05_full_did_complete'
import { createSimpleLightDid } from '../did/01_light_did_simple'

import { createAttestation } from './03_create_attestation'
import { createDriversLicenseCType } from './01_create_ctype'
import { createPresentation } from './04_create_presentation'
import { reclaimAttestationDeposit } from './07_reclaim_attestation_deposit'
import { requestAttestation } from './02_request_attestation'
import { revokeCredential } from './06_revoke_credential'
import { verifyPresentation } from './05_verify_presentation'

import generateDidKeypairs from '../utils/generateKeypairs'

export async function runAll(
  submitterAccount: Kilt.KiltKeyringPair
): Promise<void> {
  console.log('Running claiming flow...')
  let { authentication, encryption, attestation, delegation } =
    generateDidKeypairs()
  const claimerLightDid = createSimpleLightDid({ authentication })
  const lightDidAuthKey = authentication
  ;({ authentication, encryption, attestation, delegation } =
    generateDidKeypairs())
  const attesterFullDid = await createCompleteFullDid(submitterAccount, {
    authentication,
    encryption,
    attestation,
    delegation
  })

  console.log('1 claming) Create CType')
  const ctype = await createDriversLicenseCType(
    attesterFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      data: attestation.sign(data),
      keyType: attestation.type,
      // Not relevant in this case
      keyUri: `${attesterFullDid.uri}#id`
    })
  )
  console.log('2 claiming) Create credential')
  const credential = requestAttestation(claimerLightDid, ctype)
  console.log('3 claiming) Create attestation and credential')
  await createAttestation(
    attesterFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      data: attestation.sign(data),
      keyType: attestation.type,
      // Not relevant in this case
      keyUri: `${attesterFullDid.uri}#id`
    }),
    credential
  )
  console.log('4 claiming) Create selective disclosure presentation')
  const presentation = await createPresentation(
    credential,
    async ({ data }) => ({
      data: lightDidAuthKey.sign(data),
      keyType: lightDidAuthKey.type,
      keyUri: `${claimerLightDid.uri}${claimerLightDid.authentication[0].id}`
    }),
    ['name', 'id']
  )
  console.log('5 claiming) Verify selective disclosure presentation')
  await verifyPresentation(presentation)
  console.log('6 claiming) Revoke credential')
  await revokeCredential(
    attesterFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      data: attestation.sign(data),
      keyType: attestation.type,
      // Not relevant in this case
      keyUri: `${attesterFullDid.uri}#id`
    }),
    credential,
    false
  )
  console.log('7 claiming) Reclaim attestation deposit')
  await reclaimAttestationDeposit(submitterAccount, credential)

  console.log('Claiming flow completed!')
}

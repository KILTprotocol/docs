import * as Kilt from '@kiltprotocol/sdk-js'

import { createCompleteFullDid } from '../did/05_full_did_complete'
import { createSimpleLightDid } from '../did/01_light_did_simple'

import { createAttestation } from './03_create_attestation'
import { createDriversLicenseCType } from './01_create_ctype'
import { createPresentation } from './04_create_presentation'
import { exportCredentialToVerifiableCredential } from './08_export_credential'
import { reclaimAttestationDeposit } from './07_reclaim_attestation_deposit'
import { requestAttestation } from './02_request_attestation'
import { revokeCredential } from './06_revoke_credential'
import { verify } from './10_vcjs_verification'
import { verifyPresentation } from './05_verify_presentation'
import { verifyVerifiableCredential } from './09_verify_vc'

import generateDidKeypairs from '../utils/generateKeypairs'

export async function runAll(
  submitterAccount: Kilt.KiltKeyringPair
): Promise<void> {
  console.log('Running claiming flow...')
  const claimerAuthKey = generateDidKeypairs().authentication
  const claimerLightDid = createSimpleLightDid({
    authentication: claimerAuthKey
  })

  const attersterKeys = generateDidKeypairs()
  const attesterFullDid = await createCompleteFullDid(
    submitterAccount,
    attersterKeys,
    async ({ data }) => ({
      signature: attersterKeys.authentication.sign(data),
      keyType: attersterKeys.authentication.type
    })
  )

  console.log('1 claming) Create CType')
  const ctype = await createDriversLicenseCType(
    attesterFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: attersterKeys.attestation.sign(data),
      keyType: attersterKeys.attestation.type
    })
  )
  console.log('2 claiming) Create credential')
  const credential = requestAttestation(claimerLightDid, ctype)
  console.log('3 claiming) Create attestation and credential')
  await createAttestation(
    attesterFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: attersterKeys.attestation.sign(data),
      keyType: attersterKeys.attestation.type
    }),
    credential
  )
  console.log('4 claiming) Create selective disclosure presentation')
  const presentation = await createPresentation(
    credential,
    async ({ data }) => ({
      signature: claimerAuthKey.sign(data),
      keyType: claimerAuthKey.type,
      keyUri: `${claimerLightDid.uri}${claimerLightDid.authentication[0].id}`
    }),
    ['name', 'id']
  )
  console.log('5 claiming) Verify selective disclosure presentation')
  await verifyPresentation(presentation, {
    trustedAttesterUris: [attesterFullDid.uri]
  })
  console.log('6 claiming) Revoke credential')
  await revokeCredential(
    attesterFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: attersterKeys.attestation.sign(data),
      keyType: attersterKeys.attestation.type
    }),
    credential,
    false
  )
  console.log(
    '6.2 claiming) Presentation should fail to verify after revocation'
  )
  try {
    await verifyPresentation(presentation, {
      trustedAttesterUris: [attesterFullDid.uri]
    })
    throw new Error('Error: verification should fail after revocation')
    // eslint-disable-next-line no-empty
  } catch {}
  console.log('7 claiming) Reclaim attestation deposit')
  await reclaimAttestationDeposit(submitterAccount, credential)
  console.log('8.1 claiming) Re-attest the credential')
  await createAttestation(
    attesterFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: attersterKeys.attestation.sign(data),
      keyType: attersterKeys.attestation.type
    }),
    credential
  )
  console.log('8.2 claiming) Export credential to VC')
  const vc = await exportCredentialToVerifiableCredential(credential)
  console.log('9 claiming) Verify VC with KILT SDK')
  await verifyVerifiableCredential(vc)
  console.log('10 claiming) Verify VP with vc-js')
  await verify(vc)

  console.log('Claiming flow completed!')
}

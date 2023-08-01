import * as Kilt from '@kiltprotocol/sdk-js'

import { createCompleteFullDid } from '../did/05_full_did_complete'
import { createSimpleLightDid } from '../did/01_light_did_simple'

import { createAttestation } from './04_create_attestation'
import { createDriversLicenseCType } from './01_create_ctype'
import { createPresentation } from './05_create_presentation'
import { fetchCType } from './02_fetch_ctype'
import { reclaimAttestationDeposit } from './08_reclaim_attestation_deposit'
import { requestAttestation } from './03_request_attestation'
import { revokeCredential } from './07_revoke_credential'
import { verifyPresentation } from './06_verify_presentation'

import { generateKeypairs } from '../utils/generateKeypairs'

export async function runAll(
  submitterAccount: Kilt.KiltKeyringPair
): Promise<void> {
  console.log('Running claiming flow...')
  const claimerAuthKey = generateKeypairs().authentication
  const claimerLightDid = createSimpleLightDid({
    authentication: claimerAuthKey
  })

  const attersterKeys = generateKeypairs()
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
      signature: attersterKeys.assertionMethod.sign(data),
      keyType: attersterKeys.assertionMethod.type
    })
  )
  console.log('2 claiming) Fetch CType')
  const ctypeDetails = await fetchCType(ctype.$id)
  if (!ctypeDetails) {
    throw new Error(
      'Could not retrieve CType details of a CType that was just created.'
    )
  }
  console.log('Retrieved CType details: ', ctypeDetails)
  console.log('3 claiming) Create credential')
  const credential = requestAttestation(claimerLightDid, ctype)
  console.log('4 claiming) Create attestation and credential')
  await createAttestation(
    attesterFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: attersterKeys.assertionMethod.sign(data),
      keyType: attersterKeys.assertionMethod.type
    }),
    credential
  )
  console.log('5 claiming) Create selective disclosure presentation')
  const presentation = await createPresentation(
    credential,
    async ({ data }) => ({
      signature: claimerAuthKey.sign(data),
      keyType: claimerAuthKey.type,
      keyUri: `${claimerLightDid.uri}${claimerLightDid.authentication[0].id}`
    }),
    ['name', 'id']
  )
  console.log('6 claiming) Verify selective disclosure presentation')
  await verifyPresentation(presentation, {
    trustedAttesterUris: [attesterFullDid.uri]
  })
  console.log('7.1 claiming) Revoke credential')
  await revokeCredential(
    attesterFullDid.uri,
    submitterAccount,
    async ({ data }) => ({
      signature: attersterKeys.assertionMethod.sign(data),
      keyType: attersterKeys.assertionMethod.type
    }),
    credential,
    false
  )
  console.log(
    '7.2 claiming) Presentation should fail to verify after revocation'
  )
  try {
    await verifyPresentation(presentation, {
      trustedAttesterUris: [attesterFullDid.uri]
    })
    throw new Error('Error: verification should fail after revocation')
    // eslint-disable-next-line no-empty
  } catch {}
  console.log('8 claiming) Reclaim attestation deposit')
  await reclaimAttestationDeposit(submitterAccount, credential)

  console.log('Claiming flow completed!')
}

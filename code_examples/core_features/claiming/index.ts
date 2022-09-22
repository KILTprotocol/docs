import type { ApiPromise } from '@polkadot/api'

import { Keyring } from '@polkadot/api'

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

import { signCallbackForKeyringAndDid } from '../utils'

export async function runAll(
  api: ApiPromise,
  submitterAccount: Kilt.KiltKeyringPair
): Promise<void> {
  console.log('Running claiming flow...')
  const keyring = new Keyring({ ss58Format: Kilt.Utils.ss58Format })
  const claimerLightDid = createSimpleLightDid(keyring)
  const attesterFullDid = await createCompleteFullDid(
    keyring,
    submitterAccount
  )

  console.log('1 claming) Create CType')
  const ctype = await createDriversLicenseCType(
    api,
    attesterFullDid.uri,
    submitterAccount,
    signCallbackForKeyringAndDid(keyring, attesterFullDid)
  )
  console.log('2 claiming) Create credential')
  const credential = requestAttestation(claimerLightDid, ctype)
  console.log('3 claiming) Create attestation and credential')
  await createAttestation(
    api,
    attesterFullDid.uri,
    submitterAccount,
    signCallbackForKeyringAndDid(keyring, attesterFullDid),
    credential
  )
  console.log('4 claiming) Create selective disclosure presentation')
  const presentation = await createPresentation(
    credential,
    signCallbackForKeyringAndDid(keyring, claimerLightDid),
    ['name', 'id']
  )
  console.log('5 claiming) Verify selective disclosure presentation')
  await verifyPresentation(presentation)
  console.log('6 claiming) Revoke credential')
  await revokeCredential(
    api,
    attesterFullDid.uri,
    submitterAccount,
    signCallbackForKeyringAndDid(keyring, attesterFullDid),
    credential,
    false
  )
  console.log('7 claiming) Reclaim attestation deposit')
  await reclaimAttestationDeposit(api, submitterAccount, credential)

  console.log('Claiming flow completed!')
}

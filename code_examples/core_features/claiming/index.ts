import { DemoKeystore } from '@kiltprotocol/did'

import { createSimpleLightDid } from '../did/01_light_did_simple'

import { createClaim } from './02_create_claim'
import { createDriversLicenseCType } from './01_create_ctype'
import { createRequestForAttestation } from './03_create_request_for_attestation'

export async function runAll(keystore: DemoKeystore): Promise<void> {
  console.log('Running claiming flow...')
  const claimerLightDid = await createSimpleLightDid(keystore)

  console.log('1) Create CType')
  const ctype = await createDriversLicenseCType()
  console.log('2) Create claim')
  const claim = await createClaim(ctype, claimerLightDid.did)
  console.log('3) Create request for attestation')
  await createRequestForAttestation(keystore, claim, claimerLightDid)
  console.log('Claiming flow completed!')
}

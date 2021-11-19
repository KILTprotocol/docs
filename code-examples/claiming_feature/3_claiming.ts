import { Claim, RequestForAttestation } from '@kiltprotocol/core'
import { DemoKeystore, DidDetails } from '@kiltprotocol/did'

export async function main(
  claim: Claim,
  keystore: DemoKeystore,
  claimer: DidDetails
) {
  const requestForAttestation = RequestForAttestation.fromClaim(claim)
  await requestForAttestation.signWithDid(keystore, claimer)

  return requestForAttestation
}

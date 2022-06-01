import * as Kilt from '@kiltprotocol/sdk-js'

export async function createRequestForAttestation(
  keystore: Kilt.KeystoreSigner,
  claim: Kilt.IClaim,
  claimer: Kilt.Did.DidDetails
): Promise<Kilt.IRequestForAttestation> {
  const requestForAttestation = Kilt.RequestForAttestation.fromClaim(claim)
  return requestForAttestation.signWithDidKey(
    keystore,
    claimer,
    claimer.authenticationKey.id
  )
}

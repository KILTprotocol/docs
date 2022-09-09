import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(credential: Kilt.ICredential): Promise<boolean> {
  const isAttestationValid = await Kilt.Attestation.checkValidity(
    credential.rootHash
  )
  return isAttestationValid
}

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(credential: Kilt.ICredential): Promise<boolean> {
  const attestationInfo = await Kilt.Attestation.query(credential.rootHash)
  if (!attestationInfo) {
    return false
  }
  // Return false if attestation.revoked is true, or true otherwise.
  if (!attestationInfo.revoked) {
    return false
  }
  return !attestationInfo.revoked
}

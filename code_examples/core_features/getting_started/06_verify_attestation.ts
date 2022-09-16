import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  api: ApiPromise,
  credential: Kilt.ICredential
): Promise<boolean> {
  const encodedAttestationInfo = await api.query.attestation.attestations(
    credential.rootHash
  )
  const attestationInfo = Kilt.Attestation.fromChain(
    encodedAttestationInfo,
    credential.rootHash
  )
  if (!attestationInfo) {
    return false
  }
  // Return false if attestation.revoked is true, or true otherwise.
  if (attestationInfo.revoked) {
    return false
  }
  return true
}

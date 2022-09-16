/* eslint-disable no-empty */

import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  api: ApiPromise,
  credential: Kilt.ICredential
): Promise<boolean> {
  const encodedAttestationInfo = await api.query.attestation.attestations(
    credential.rootHash
  )
  let isCredentialValid = false
  try {
    // This function will throw if encodedAttestationInfo is None
    const attestationInfo = Kilt.Attestation.fromChain(
      encodedAttestationInfo,
      credential.rootHash
    )
    // Return false if attestation.revoked is true, or true otherwise.
    isCredentialValid = !attestationInfo.revoked
  } catch {}

  return isCredentialValid
}

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
  // This function will throw if the attestation does not exist.
  const attestationInfo = Kilt.Attestation.fromChain(
    encodedAttestationInfo,
    credential.rootHash
  )

  // Return false if attestation.revoked is true, or true otherwise.
  const revokedStatus = !attestationInfo.revoked

  console.log('Checking the revoked status of the attestation', revokedStatus)

  return revokedStatus
}

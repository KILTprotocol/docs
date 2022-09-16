import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimAttestationDeposit(
  api: ApiPromise,
  depositPayer: Kilt.KiltKeyringPair,
  credential: Kilt.ICredential
): Promise<void> {
  // Generate the submittable extrinsic to claim the deposit back.
  const depositReclaimTx = api.tx.attestation.reclaimDeposit(
    credential.rootHash
  )

  // Submit the revocation tx to the KILT blockchain.
  await Kilt.Blockchain.signAndSubmitTx(depositReclaimTx, depositPayer)
}

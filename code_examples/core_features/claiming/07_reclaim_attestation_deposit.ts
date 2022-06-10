import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function reclaimAttestationDeposit(
  depositPayer: KeyringPair,
  credential: Kilt.Credential,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  // Generate the submittable extrinsic to claim the deposit back.
  const depositReclaimTx = await credential.attestation.getReclaimDepositTx()

  // Submit the revocation tx to the KILT blockchain.
  await Kilt.BlockchainUtils.signAndSubmitTx(depositReclaimTx, depositPayer, {
    resolveOn
  })
}

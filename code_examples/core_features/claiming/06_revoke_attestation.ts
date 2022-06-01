import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function revokeCredential(
  keystore: Kilt.Did.DemoKeystore,
  attesterDid: Kilt.Did.FullDidDetails,
  submitterAccount: KeyringPair,
  credential: Kilt.Credential,
  shouldRemove = false,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  // Create the revocation tx and sign it with the attester's attestation key.
  const revocationTx =
    await credential.attestation.getRevokeTx(0).then((tx) => attesterDid.authorizeExtrinsic(tx, keystore, submitterAccount.address))
  // Submit the revocation tx to the KILT blockchain.
  await Kilt.BlockchainUtils.signAndSubmitTx(revocationTx, submitterAccount, { resolveOn })

  // Optionally, the attestation info can be removed from the blockchain, with or without revoking it first.
  if (shouldRemove) {
    const removalTx = 
      await credential.attestation.getRemoveTx(0).then((tx) => attesterDid.authorizeExtrinsic(tx, keystore, submitterAccount.address))
    // Submit the removal tx to the KILT blockchain.
    await Kilt.BlockchainUtils.signAndSubmitTx(removalTx, submitterAccount, { resolveOn })
  }
}

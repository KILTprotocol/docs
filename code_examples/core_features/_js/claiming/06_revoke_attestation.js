import * as Kilt from '@kiltprotocol/sdk-js'
export async function revokeCredential(
  keystore,
  attesterDid,
  submitterAccount,
  credential,
  shouldRemove = false,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  const tx = shouldRemove
    ? // If the attestation is to be removed, create a `remove` tx,
      // which revokes and removes the attestation in one go.
      await credential.attestation
        .getRemoveTx(0)
        .then((tx) =>
          attesterDid.authorizeExtrinsic(tx, keystore, submitterAccount.address)
        )
    : // Otherwise, simply revoke the attestation but leave it on chain.
      // Hence, the storage is not cleared and the deposit not returned.
      await credential.attestation
        .getRevokeTx(0)
        .then((tx) =>
          attesterDid.authorizeExtrinsic(tx, keystore, submitterAccount.address)
        )
  // Submit the right tx to the KILT blockchain.
  await Kilt.BlockchainUtils.signAndSubmitTx(tx, submitterAccount, {
    resolveOn
  })
}

import * as Kilt from '@kiltprotocol/sdk-js'

export async function revokeCredential(
  attester: Kilt.DidDetails,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback,
  credential: Kilt.ICredential,
  shouldRemove = false,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain.IS_FINALIZED
): Promise<void> {
  const tx = shouldRemove
    ? // If the attestation is to be removed, create a `remove` tx,
    // which revokes and removes the attestation in one go.
    await Kilt.Attestation.getRemoveTx(credential.rootHash, 0)
      .then((tx) =>
        Kilt.Did.authorizeExtrinsic(attester, tx, signCallback, submitterAccount.address)
      )
    : // Otherwise, simply revoke the attestation but leave it on chain.
    // Hence, the storage is not cleared and the deposit not returned.
    await Kilt.Attestation.getRevokeTx(credential.rootHash, 0)
      .then((tx) =>
        Kilt.Did.authorizeExtrinsic(attester, tx, signCallback, submitterAccount.address)
      )

  // Submit the right tx to the KILT blockchain.
  await Kilt.Blockchain.signAndSubmitTx(tx, submitterAccount, {
    resolveOn
  })
}

import * as Kilt from '@kiltprotocol/sdk-js'

export async function revokeCredential(
  attester: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback,
  credential: Kilt.ICredential,
  shouldRemove = false
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const tx = shouldRemove
    ? // If the attestation is to be removed, create a `remove` tx,
      // which revokes and removes the attestation in one go.
      api.tx.attestation.remove(credential.rootHash, null)
    : // Otherwise, simply revoke the attestation but leave it on chain.
      // Hence, the storage is not cleared and the deposit not returned.
      api.tx.attestation.revoke(credential.rootHash, null)

  const authorizedTx = await Kilt.Did.authorizeTx(
    attester,
    tx,
    signCallback,
    submitterAccount.address
  )

  // Submit the right tx to the KILT blockchain.
  await Kilt.Blockchain.signAndSubmitTx(authorizedTx, submitterAccount)
}

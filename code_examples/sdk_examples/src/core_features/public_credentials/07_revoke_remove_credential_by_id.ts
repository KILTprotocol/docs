import * as Kilt from '@kiltprotocol/sdk-js'

export async function revokeCredentialById(
  attester: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback,
  credentialId: Kilt.IPublicCredential['id'],
  shouldRemove = false
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const tx = shouldRemove ? api.tx.publicCredentials.remove(credentialId, null) : api.tx.publicCredentials.revoke(credentialId, null)

  // Same as for traditional KILT credentials
  const authorizedAttestationTx = await Kilt.Did.authorizeTx(
    attester,
    tx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAttestationTx,
    submitterAccount
  )
}

import * as Kilt from '@kiltprotocol/sdk-js'

export async function revokeCredential(
  attester: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback,
  credential: Kilt.IPublicCredentialInput,
  shouldRemove = false
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const credentialId = Kilt.PublicCredential.getIdForCredential(
    credential,
    attester
  )
  const tx = shouldRemove
    ? api.tx.publicCredentials.remove(credentialId, null)
    : api.tx.publicCredentials.revoke(credentialId, null)

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

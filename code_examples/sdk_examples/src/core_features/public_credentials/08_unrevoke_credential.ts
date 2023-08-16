import * as Kilt from '@kiltprotocol/sdk-js'

export async function unrevokeCredential(
  attester: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback,
  credential: Kilt.IPublicCredentialInput
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const credentialId = Kilt.PublicCredential.getIdForCredential(
    credential,
    attester
  )
  const tx = api.tx.publicCredentials.unrevoke(credentialId, null)

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

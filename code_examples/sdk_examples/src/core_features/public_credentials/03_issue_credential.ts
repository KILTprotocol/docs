import * as Kilt from '@kiltprotocol/sdk-js'

export async function issueCredential(
  attester: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback,
  credential: Kilt.IPublicCredentialInput
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const credentialCreationTx = api.tx.publicCredentials.add(
    Kilt.PublicCredential.toChain(credential)
  )

  // Same as for traditional KILT credentials
  const authorizedAttestationTx = await Kilt.Did.authorizeTx(
    attester,
    credentialCreationTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAttestationTx,
    submitterAccount
  )
}

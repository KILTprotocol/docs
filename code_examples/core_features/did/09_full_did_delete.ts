import * as Kilt from '@kiltprotocol/sdk-js'

export async function deleteFullDid(
  submitterAccount: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidUri,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Create a DID deletion tx. We specify the number of endpoints currently stored under the DID because
  // of the upper computation limit required by the blockchain runtime.
  const didIdentifier = Kilt.Did.toChain(fullDid)
  const endpointsCountForDid = await api.query.did.didEndpointsCount(
    didIdentifier
  )
  const didDeletionExtrinsic = api.tx.did.delete(endpointsCountForDid)

  // Sign the DID deletion tx using the DID authentication key.
  // This results in a DID-signed tx that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const didSignedDeletionExtrinsic = await Kilt.Did.authorizeTx(
    fullDid,
    didDeletionExtrinsic,
    signCallback,
    submitterAccount.address
  )

  await Kilt.Blockchain.signAndSubmitTx(
    didSignedDeletionExtrinsic,
    submitterAccount
  )
}

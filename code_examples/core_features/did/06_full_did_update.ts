import * as Kilt from '@kiltprotocol/sdk-js'

export async function updateFullDid(
  newAuthKeypair: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<Kilt.DidDocument> {
  // Get the cached api object
  const api = Kilt.ConfigService.get('api')

  // Create and sign the DID operation to replace the authentication key with the new one generated.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const didKeyUpdateTx = api.tx.did.setAuthenticationKey(
    Kilt.Did.publicKeyToChain(newAuthKeypair)
  )
  // const didServiceRemoveTx = api.tx.did.removeServiceEndpoint(
  //   Kilt.Did.resourceIdToChain('#my-service')
  // )

  const authorizedBatchedTxs = await Kilt.Did.authorizeBatch({
    batchFunction: api.tx.utility.batchAll,
    did: fullDid,
    // FIXME: Re-add the didServiceRemoveTx once the batch fix is added
    // extrinsics: [didKeyUpdateTx, didServiceRemoveTx],
    extrinsics: [didKeyUpdateTx],
    sign: signCallback,
    submitter: submitterAccount.address
  })

  // Submit the DID update tx to the KILT blockchain after signing it with the authorized KILT account.
  await Kilt.Blockchain.signAndSubmitTx(authorizedBatchedTxs, submitterAccount)

  // Get the updated DID Document
  const encodedUpdatedDidDetails = await api.call.did.query(fullDid)
  const { document } = Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails)

  if (!document) {
    throw `Could not find the updated DID ${fullDid}`
  }

  return document
}

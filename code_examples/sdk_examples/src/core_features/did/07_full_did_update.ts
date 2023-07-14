import * as Kilt from '@kiltprotocol/sdk-js'

export async function updateFullDid(
  newAuthKeypair: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<Kilt.DidDocument> {
  const api = Kilt.ConfigService.get('api')

  // Create the tx to update the authentication key.
  const didKeyUpdateTx = api.tx.did.setAuthenticationKey(
    Kilt.Did.publicKeyToChain(newAuthKeypair)
  )
  // Create the tx to remove the service with ID `#my-service`.
  const didServiceRemoveTx = api.tx.did.removeServiceEndpoint(
    Kilt.Did.resourceIdToChain('#my-service')
  )

  // Create the tx to add a new service with ID `#my-new-service`.
  const newServiceEndpointTx = api.tx.did.addServiceEndpoint({
    id: Kilt.Did.resourceIdToChain('#my-new-service'),
    serviceTypes: [Kilt.KiltPublishedCredentialCollectionV1Type],
    urls: ['https://www.new-example.com']
  })

  // Create and sign the DID operation that contains the two (unsigned) txs.
  // This results in a DID-signed tx that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const authorizedBatchedTxs = await Kilt.Did.authorizeBatch({
    batchFunction: api.tx.utility.batchAll,
    did: fullDid,
    extrinsics: [didKeyUpdateTx, didServiceRemoveTx, newServiceEndpointTx],
    sign: signCallback,
    submitter: submitterAccount.address
  })

  // Submit the DID update tx to the KILT blockchain after signing it with the authorized KILT account.
  await Kilt.Blockchain.signAndSubmitTx(authorizedBatchedTxs, submitterAccount)

  // Get the updated DID Document.
  const encodedUpdatedDidDetails = await api.call.did.query(
    Kilt.Did.toChain(fullDid)
  )
  return Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails).document
}

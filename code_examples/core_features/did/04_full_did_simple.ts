import * as Kilt from '@kiltprotocol/sdk-js'

export async function createSimpleFullDid(
  submitterAccount: Kilt.KiltKeyringPair,
  {
    authentication
  }: {
    authentication: Kilt.NewDidVerificationKey
  },
  signCallback: Kilt.SignExtrinsicCallback
): Promise<Kilt.DidDocument> {
  const api = Kilt.ConfigService.get('api')

  // Generate the DID-signed creation extrinsic and submit it to the blockchain with the specified account.
  // The submitter account parameter, ensures that only an entity authorized by the DID subject
  // can submit the extrinsic to the KILT blockchain.
  const fullDidCreationTx = await Kilt.Did.getStoreTx(
    {
      authentication: [authentication]
    },
    submitterAccount.address,
    signCallback
  )

  await Kilt.Blockchain.signAndSubmitTx(fullDidCreationTx, submitterAccount)

  // The new information is fetched from the blockchain and returned.
  const fullDid = Kilt.Did.getFullDidUriFromKey(authentication)
  const encodedUpdatedDidDetails = await api.call.did.query(
    Kilt.Did.toChain(fullDid)
  )
  return Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails).document
}

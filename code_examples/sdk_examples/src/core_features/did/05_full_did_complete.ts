import * as Kilt from '@kiltprotocol/sdk-js'

export async function createCompleteFullDid(
  submitterAccount: Kilt.KiltKeyringPair,
  {
    authentication,
    keyAgreement,
    assertionMethod,
    capabilityDelegation
  }: {
    authentication: Kilt.NewDidVerificationKey
    keyAgreement: Kilt.NewDidEncryptionKey
    assertionMethod: Kilt.NewDidVerificationKey
    capabilityDelegation: Kilt.NewDidVerificationKey
  },
  signCallback: Kilt.SignExtrinsicCallback
): Promise<Kilt.DidDocument> {
  const api = Kilt.ConfigService.get('api')

  const fullDidCreationTx = await Kilt.Did.getStoreTx(
    {
      authentication: [authentication],
      keyAgreement: [keyAgreement],
      assertionMethod: [assertionMethod],
      capabilityDelegation: [capabilityDelegation],
      // Example service.
      service: [
        {
          id: '#my-service',
          type: ['service-type'],
          serviceEndpoint: ['https://www.example.com']
        }
      ]
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

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createCompleteFullDid(
  submitterAccount: Kilt.KiltKeyringPair,
  {
    authentication,
    encryption,
    attestation,
    delegation
  }: {
    authentication: Kilt.NewDidVerificationKey
    encryption: Kilt.NewDidEncryptionKey
    attestation: Kilt.NewDidVerificationKey
    delegation: Kilt.NewDidVerificationKey
  },
  signCallback: Kilt.SignCallback
): Promise<Kilt.DidDocument> {
  const fullDidCreationTx = await Kilt.Did.getStoreTx(
    {
      authentication: [authentication],
      keyAgreement: [encryption],
      assertionMethod: [attestation],
      capabilityDelegation: [delegation],
      // Example service
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
  const fullDid = await Kilt.Did.query(
    Kilt.Did.getFullDidUriFromKey(authentication)
  )

  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }

  return fullDid
}

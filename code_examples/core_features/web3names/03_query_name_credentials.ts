import fetch from 'node-fetch'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function queryPublishedCredentials(
  web3Name: Kilt.Did.Web3Name
): Promise<Kilt.KiltPublishedCredentialCollectionV1> {
  const api = Kilt.ConfigService.get('api')

  const encodedDidForWeb3Name = await api.call.did.queryByWeb3Name(web3Name)
  const {
    document: { uri }
  } = Kilt.Did.linkedInfoFromChain(encodedDidForWeb3Name)

  console.log(`DID for "${web3Name}": ${uri}`)

  const resolutionResult = await Kilt.Did.resolve(uri)
  if (!resolutionResult) {
    throw 'The DID does not exist on the KILT blockchain.'
  }

  const { document } = resolutionResult
  // If no details are returned but resolutionResult is not null, the DID has been deleted.
  // This information is present in `resolutionResult.metadata.deactivated`.
  if (!document) {
    throw 'The DID has already been deleted.'
  }

  // Filter the endpoints by their type.
  const didEndpoints = document.service?.filter((service) =>
    service.type.includes(Kilt.KiltPublishedCredentialCollectionV1Type)
  )

  console.log(
    `Endpoints of type "${Kilt.KiltPublishedCredentialCollectionV1Type}" for the retrieved DID:`
  )
  console.log(JSON.stringify(didEndpoints, null, 2))

  // For demonstration, only the first endpoint and its first URL are considered.
  const firstCredentialCollectionEndpointUrl =
    didEndpoints?.[0]?.serviceEndpoint[0]
  if (!firstCredentialCollectionEndpointUrl) {
    console.log(
      `The DID has no service endpoints of type "${Kilt.KiltPublishedCredentialCollectionV1Type}".`
    )
  }

  // Retrieve the credentials pointed at by the endpoint.
  // Being an IPFS endpoint, the fetching can take an arbitrarily long time or even fail if the timeout is reached.
  // The case where the result is not a JSON should be properly handled in production settings.
  const response = await fetch(firstCredentialCollectionEndpointUrl as string)
  const credentialCollection: Kilt.KiltPublishedCredentialCollectionV1 =
    await response.json()
  console.log(`Credential collection behind the endpoint:`)
  console.log(JSON.stringify(credentialCollection, null, 2))

  // Verify that all credentials are valid and that they all refer to the same DID.
  await Promise.all(
    credentialCollection.map(async ({ credential }) => {
      await Kilt.Credential.verifyCredential(credential)

      // Verify that the credential refers to the intended subject
      if (!Kilt.Did.isSameSubject(credential.claim.owner, uri)) {
        throw 'One of the credentials refers to a different subject than expected.'
      }
    })
  )

  // If no promise is rejected, all the checks have successfully completed.
  console.log('All retrieved credentials are valid! ✅!')

  return credentialCollection
}

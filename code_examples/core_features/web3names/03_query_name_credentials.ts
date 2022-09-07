import fetch from 'node-fetch'

import * as Kilt from '@kiltprotocol/sdk-js'

// The type to filter the endpoints of the retrieved DID.
const PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE =
  'KiltPublishedCredentialCollectionV1'

type CredentialMetadata = {
  label?: string
  blockNumber?: number
  txHash?: string
}

type CredentialEntry = {
  credential: Kilt.ICredential
  metadata?: CredentialMetadata
}

export async function queryPublishedCredentials(
  web3Name: Kilt.Did.Web3Names.Web3Name
): Promise<CredentialEntry[]> {
  const didForWeb3Name = await Kilt.Did.Web3Names.queryDidForWeb3Name(web3Name)
  if (!didForWeb3Name) {
    throw `No DID found for "${didForWeb3Name}"`
  }

  console.log(`DID for "${web3Name}": ${didForWeb3Name}`)

  const resolutionResult = await Kilt.Did.resolve(didForWeb3Name)
  if (!resolutionResult) {
    throw 'The DID does not exist on the KILT blockchain.'
  }

  const didDetails = resolutionResult.details
  // If no details are returned but resolutionResult is not null, the DID has been deleted.
  // This information is present in `resolutionResult.metadata.deactivated`.
  if (!didDetails) {
    throw 'The DID has already been deleted.'
  }

  // Filter the endpoints by their type.
  const didEndpoints = didDetails.service?.filter((service) =>
    service.type.includes(PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE)
  )

  console.log(
    `Endpoints of type "${PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE}" for the retrieved DID:`
  )
  console.log(JSON.stringify(didEndpoints, null, 2))

  // For demonstration, only the first endpoint and its first URL are considered.
  const firstCredentialCollectionEndpointUrl =
    didEndpoints?.at(0)?.serviceEndpoint[0]
  if (!firstCredentialCollectionEndpointUrl) {
    console.log(
      `The DID has no service endpoints of type "${PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE}".`
    )
  }

  // Retrieve the credentials pointed at by the endpoint.
  // Being an IPFS endpoint, the fetching can take an arbitrarily long time or even fail if the timeout is reached.
  // The case where the result is not a JSON should be properly handled in production settings.
  const credentialCollection: CredentialEntry[] = await fetch(
    firstCredentialCollectionEndpointUrl as string
  ).then((response) => response.json() as Promise<CredentialEntry[]>)
  console.log(`Credential collection behind the endpoint:`)
  console.log(JSON.stringify(credentialCollection, null, 2))

  // Verify that all credentials are valid and that they all refer to the same DID.
  await Promise.all(
    credentialCollection.map(async ({ credential }) => {
      await Kilt.Credential.verify(credential)

      // Verify that the credential refers to the intended subject
      if (
        !Kilt.Did.Utils.isSameSubject(credential.claim.owner, didForWeb3Name)
      ) {
        throw 'One of the credentials refers to a different subject than expected.'
      }
    })
  )

  // If no promise is rejected, all the checks have successfully completed.
  console.log('All retrieved credentials are valid! ✅!')

  return credentialCollection
}

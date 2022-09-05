import fetch from 'node-fetch'
import * as Kilt from '@kiltprotocol/sdk-js'
// The type to filter the endpoints of the retrieved DID.
const PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE =
  'KiltPublishedCredentialCollectionV1'
const verifyCredential = async (publishedCredential) => {
  // Retrieve the on-chain attestation information about the credential.
  const onChainAttestation = await Kilt.Attestation.query(
    publishedCredential.rootHash
  )
  if (!onChainAttestation || onChainAttestation.revoked) {
    return false
  }
  // Verify the credential integrity and the subject's signature.
  return (
    publishedCredential.verifyData() && publishedCredential.verifySignature()
  )
}
export async function queryPublishedCredentials(web3Name) {
  const didForWeb3Name = await Kilt.Did.Web3Names.queryDidForWeb3Name(web3Name)
  if (!didForWeb3Name) {
    throw `No DID found for "${didForWeb3Name}"`
  }
  console.log(`DID for "${web3Name}": ${didForWeb3Name}`)
  const resolutionResult = await Kilt.Did.resolveDoc(didForWeb3Name)
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
  const didEndpoints = didDetails.getEndpoints(
    PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE
  )
  console.log(
    `Endpoints of type "${PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE}" for the retrieved DID:`
  )
  console.log(JSON.stringify(didEndpoints, null, 2))
  // For demonstration, only the first endpoint and its first URL are considered.
  const firstCredentialCollectionEndpointUrl = didEndpoints[0]?.urls[0]
  if (!firstCredentialCollectionEndpointUrl) {
    console.log(
      `The DID has no service endpoints of type "${PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE}".`
    )
  }
  // Retrieve the credentials pointed at by the endpoint.
  // Being an IPFS endpoint, the fetching can take an arbitrarily long time or even fail if the timeout is reached.
  // The case where the result is not a JSON should be properly handled in production settings.
  const credentialCollection = await fetch(
    firstCredentialCollectionEndpointUrl
  ).then((response) => response.json())
  console.log(`Credential collection behind the endpoint:`)
  console.log(JSON.stringify(credentialCollection, null, 2))
  // Verify that all credentials are valid and that they all refer to the same DID.
  await Promise.all(
    credentialCollection.map(async ({ credential }) => {
      const credentialInstance =
        Kilt.RequestForAttestation.fromRequest(credential)
      // Verify the credential integrity and signature, according to the KILT specification.
      const credentialStatus = await verifyCredential(credentialInstance)
      if (!credentialStatus) {
        throw 'Integrity and signature checks have failed for one of the credentials.'
      }
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

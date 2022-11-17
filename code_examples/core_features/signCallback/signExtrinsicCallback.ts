import * as Kilt from '@kiltprotocol/sdk-js'
import { lookupDidDocument, lookupDidKeyPair } from '.'

export const signExtrinsicCallback: Kilt.SignExtrinsicCallback = async ({
  data,
  keyRelationship,
  did: didUri
}) => {
  // Look up the DID document for the DID that should sign the data.
  const didDoc = lookupDidDocument(didUri)
  // The KeyUri identifies a public key inside the DID document.
  // We need the key for a specific VerificationKeyRelationship, we therefore build
  // the KeyUri for the first public key with the required VerificationKeyRelationship.
  const keyUri: Kilt.DidResourceUri = `${didUri}${didDoc[keyRelationship][0].id}`

  // We look up the key pair
  const signingKey = lookupDidKeyPair(keyUri)

  // Sign the data using the retrieved key pair.
  return {
    signature: signingKey.sign(data),
    keyType: signingKey.type
  }
}

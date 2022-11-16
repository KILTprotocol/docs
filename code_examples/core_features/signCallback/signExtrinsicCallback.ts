import * as Kilt from '@kiltprotocol/sdk-js'
import { lookupDidDocument, lookupDidKeyPair } from '.'

export const signExtrinsicCallback: Kilt.SignExtrinsicCallback = async ({
  data,
  keyRelationship,
  did: didUri
}) => {
  // Look up the DID keypair for the given key relationship.
  const didDoc = lookupDidDocument(didUri)
  const keyUri: Kilt.DidResourceUri = `${didUri}${didDoc[keyRelationship][0].id}`
  const signingKey = lookupDidKeyPair(keyUri)

  // Sign the data using the retrieved key pair.
  return {
    signature: signingKey.sign(data),
    keyType: signingKey.type
  }
}

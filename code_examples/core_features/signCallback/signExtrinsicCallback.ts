import { DidResourceUri, SignExtrinsicCallback } from '@kiltprotocol/sdk-js'
import { lookupDidDocument, lookupDidKeyPair } from '.'

export const signExtrinsicCallback: SignExtrinsicCallback = async ({
  data,
  keyRelationship,
  did
}) => {
  // Look up the DID keypair for the given key relationship.
  const didDoc = lookupDidDocument(did)
  const keyUri: DidResourceUri = `${did}${didDoc[keyRelationship][0].id}`
  const signingKey = lookupDidKeyPair(keyUri)

  // Sign the data using the retrieved key pair.
  return {
    signature: signingKey.sign(data),
    keyType: signingKey.type
  }
}

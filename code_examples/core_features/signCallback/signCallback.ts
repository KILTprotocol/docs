import { DidResourceUri, SignCallback } from '@kiltprotocol/sdk-js'
import { lookupDidDocument, lookupDidKeyPair } from '.'

export const signCallback: SignCallback = async ({ data, keyRelationship, did }) => {
  // look up the DID document for the DID that should sign the data
  const didDoc = lookupDidDocument(did)
  const keyUri: DidResourceUri = `${did}${didDoc[keyRelationship][0].id}`
  const signingKey = lookupDidKeyPair(keyUri)

  return {
    signature: signingKey.sign(data),
    keyType: signingKey.type,
    keyUri
  }
}

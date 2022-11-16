import * as Kilt from '@kiltprotocol/sdk-js'
import { lookupDidDocument, lookupDidKeyPair } from '.'

export const signCallback: Kilt.SignCallback = async ({
  data,
  keyRelationship,
  did: didUri
}) => {
  // look up the DID document for the DID that should sign the data
  const didDoc = lookupDidDocument(didUri)
  const keyUri: Kilt.DidResourceUri = `${didUri}${didDoc[keyRelationship][0].id}`
  const signingKey = lookupDidKeyPair(keyUri)

  return {
    signature: signingKey.sign(data),
    keyType: signingKey.type,
    keyUri
  }
}

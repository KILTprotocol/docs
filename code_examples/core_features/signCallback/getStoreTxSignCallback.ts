import * as Kilt from '@kiltprotocol/sdk-js'
import { generateDidKeyPair } from '.'

export const getStoreTxSignCallback: Kilt.Did.GetStoreTxSignCallback = async ({
  data
}) => {
  // When we store a DID, we need a key pair.
  // The public key will be used to derive the did identifier.
  const signingKey = generateDidKeyPair()

  return {
    signature: signingKey.sign(data),
    keyType: signingKey.type
  }
}

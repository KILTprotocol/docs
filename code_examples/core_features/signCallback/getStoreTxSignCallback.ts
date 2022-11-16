import * as Kilt from '@kiltprotocol/sdk-js'
import { generateDidKeyPair } from '.'

export const getStoreTxSignCallback: Kilt.Did.GetStoreTxSignCallback = async ({
  data
}) => {
  const signingKey = generateDidKeyPair()

  return {
    signature: signingKey.sign(data),
    keyType: signingKey.type
  }
}

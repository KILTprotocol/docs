import * as Kilt from '@kiltprotocol/sdk-js'

import { verify } from './verifyCredential'

type ListenCallback = (message: Kilt.IEncryptedMessage) => Promise<void>

let session: { listen: (call: ListenCallback) => ReturnType<ListenCallback> }
let receiverSecretKey: Kilt.Utils.Crypto.CryptoInput

export async function main() {
  await session.listen(async (message: Kilt.IEncryptedMessage) => {
    // Create a callback that uses the DID encryption key to decrypt the message.
    const decryptCallback: Kilt.DecryptCallback = async ({
      data,
      nonce,
      peerPublicKey
    }) => {
      const result = Kilt.Utils.Crypto.decryptAsymmetric(
        { box: data, nonce },
        peerPublicKey,
        receiverSecretKey
      )
      if (!result) {
        throw 'Cannot decrypt'
      }
      return {
        data: result
      }
    }

    const decryptedMessage = await Kilt.Message.decrypt(
      message,
      decryptCallback
    )

    if (decryptedMessage.body.type !== 'submit-credential') {
      throw 'Unexpected message type'
    }

    await verify(decryptedMessage.body.content)
  })
}

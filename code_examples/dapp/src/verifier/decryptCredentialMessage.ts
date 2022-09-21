import * as Kilt from '@kiltprotocol/sdk-js'

import { verify } from './verifyCredential'

type ListenCallback = (message: Kilt.IEncryptedMessage) => Promise<void>

let session: { listen: (call: ListenCallback) => ReturnType<ListenCallback> }

export async function main() {
  await session.listen(async (message: Kilt.IEncryptedMessage) => {
    const did = 'did:kilt:4smcAoiTiCLaNrGhrAM4wZvt5cMKEGm8f3Cu9aFrpsh5EiNV'
    const fullDid = await Kilt.Did.query(did)
    if (!fullDid) {
      return
    }

    // Create a callback that uses the DID encryption key to decrypt the message
    const decryptCallback: Kilt.DecryptCallback = async ({
      keyUri,
      data,
      nonce,
      peerPublicKey
    }) => {
      const { fragment: keyId } = Kilt.Did.Utils.parseDidUri(keyUri)
      const { publicKey } = Kilt.Did.getKey(fullDid, keyId)
      const result = Kilt.Utils.Crypto.decryptAsymmetric(
        { box: data, nonce },
        peerPublicKey,
        publicKey
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
      decryptCallback,
      fullDid
    )

    if (decryptedMessage.body.type !== 'submit-credential') {
      throw 'Unexpected message type'
    }

    await verify(decryptedMessage.body.content)
  })
}

import '@kiltprotocol/augment-api'
import * as Kilt from '@kiltprotocol/sdk-js'

type ListenCallback = (message: Kilt.IEncryptedMessage) => Promise<void>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isTrustedAttester(_attester: Kilt.DidUri): boolean {
  return true
}

export async function main({
  session,
  verifierKeys
}: {
  session: { listen: (call: ListenCallback) => ReturnType<ListenCallback> }
  verifierKeys: {
    authentication: Kilt.KiltKeyringPair
    encryption: Kilt.KiltEncryptionKeypair
    attestation: Kilt.KiltKeyringPair
    delegation: Kilt.KiltKeyringPair
  }
}) {
  async function processInBackend(message: Kilt.IEncryptedMessage) {
    // Create a callback that uses the DID encryption key to decrypt the message.
    const decryptCallback: Kilt.DecryptCallback = async ({
      data,
      nonce,
      peerPublicKey
    }) => {
      const result = Kilt.Utils.Crypto.decryptAsymmetric(
        { box: data, nonce },
        peerPublicKey,
        verifierKeys.encryption.secretKey
      )
      if (!result) {
        throw new Error('Cannot decrypt')
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
      throw new Error('Unexpected message type')
    }
    const credential = decryptedMessage.body.content[0]

    const { revoked, attester } = await Kilt.Credential.verifyPresentation(
      credential
    )

    if (revoked) {
      throw new Error("Credential has been revoked and hence it's not valid.")
    }
    if (isTrustedAttester(attester)) {
      console.log(
        "The claim is valid. Claimer's email:",
        credential.claim.contents.Email
      )
    }
  }

  // In the frontend we wait for messages from the browser extension and forward them to the server.
  await session.listen(async (message: Kilt.IEncryptedMessage) => {
    processInBackend(message)
  })
}

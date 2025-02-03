import * as Kilt from '@kiltprotocol/sdk-js'

export async function main({
  message,
  verifierDidUri,
  verifierKeys,
  session
}: {
  message: Kilt.IMessage
  verifierDidUri: Kilt.DidUri
  verifierKeys: {
    authentication: Kilt.KiltKeyringPair
    encryption: Kilt.KiltEncryptionKeypair
    attestation: Kilt.KiltKeyringPair
    delegation: Kilt.KiltKeyringPair
  }
  session: {
    encryptionKeyUri: Kilt.DidResourceUri
    send: (message: Kilt.IEncryptedMessage) => Promise<void>
  }
}) {
  const { document: verifierDidDoc } = await Kilt.Did.resolve(verifierDidUri)
  if (!verifierDidDoc) {
    throw new Error('The verifier DID must exist')
  }
  const verifierEncryptionKey = verifierDidDoc.keyAgreement?.[0]
  if (!verifierEncryptionKey) {
    throw new Error('The verifier DID must have a key agreement key')
  }

  // Create a callback that uses the DID encryption key to encrypt the message.
  const encryptCallback: Kilt.EncryptCallback = async ({
    data,
    peerPublicKey
  }) => {
    const { box, nonce } = Kilt.Utils.Crypto.encryptAsymmetric(
      data,
      peerPublicKey,
      verifierKeys.encryption.secretKey
    )
    return {
      data: box,
      nonce,
      keyUri: `${verifierDidDoc.uri}${verifierEncryptionKey.id}`
    }
  }

  const encryptedMessage = await Kilt.Message.encrypt(
    message,
    encryptCallback,
    session.encryptionKeyUri
  )

  // Finally, send the encrypted message to the extension.
  // While the above code will be executed on the server, this must happen in
  // the frontend since it's dispatching the message to the browser extension.
  await session.send(encryptedMessage)
}

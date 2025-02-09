import * as Kilt from '@kiltprotocol/sdk-js'

export function main({
  verifierDidUri,
  session,
  requestChallenge
}: {
  verifierDidUri: Kilt.DidUri
  session: {
    encryptionKeyUri: Kilt.DidResourceUri
  }
  requestChallenge: string
}): {
  message: Kilt.IMessage
} {
  // The `session` was created earlier in your frontend. Only the session DID URI is sent to your backend.
  const { did: claimerSessionDidUri } = Kilt.Did.parse(session.encryptionKeyUri)

  // The message is constructed in your backend
  const message = Kilt.Message.fromBody(
    {
      content: {
        cTypes: [
          {
            // the hash of the email CType
            cTypeHash:
              '0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac',
            requiredProperties: ['Email']
          }
        ],
        challenge: requestChallenge
      },
      type: 'request-credential'
    },
    verifierDidUri,
    claimerSessionDidUri
  )

  return { message }
}

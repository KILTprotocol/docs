import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateMessage(
  senderUri: Kilt.DidUri,
  receiverUri: Kilt.DidUri
) {
  const challenge = Kilt.Utils.UUID.generate()

  Kilt.CType.isICType(
    '0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac'
  )

  Kilt.Did.validateUri(
    'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  )

  const requestCredentialContent = {
    cTypeHash:
      '0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac' as `0x${string}`,
    trustedAttesters: [
      'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g' as Kilt.DidUri
    ]
  }

  const messageBody: Kilt.IRequestCredential = {
    type: 'request-credential',
    content: { cTypes: [requestCredentialContent], challenge: challenge }
  }

  const message = Kilt.Message.fromBody(messageBody, senderUri, receiverUri)

  if (!message) {
    console.log('message', message)
    throw new Error('Invalid message')
  }

  console.log(`Generated Message: ${JSON.stringify(message, null, 4)}`)

  return message
}

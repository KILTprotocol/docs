import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateMessage(
  senderUri: Kilt.DidUri,
  receiverUri: Kilt.DidUri
) {
  // Creating a challenge to submit to the receiver
  const challenge = Kilt.Utils.UUID.generate()

  // Trusted Attesters uri is checked if it is a valid uri
  Kilt.Did.validateUri(
    'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  )
  // Sender uri is checked if it is a valid uri
  Kilt.Did.validateUri(senderUri)
  // Receiver uri is checked if it is a valid uri
  Kilt.Did.validateUri(receiverUri)

  // The content of the request credentials
  // It includes a ctype that is being requested, this can be for attestation or verification
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

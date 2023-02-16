import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateRequestCredentialMessage(
  senderUri: Kilt.DidUri,
  receiverUri: Kilt.DidUri,
  cTypeHash: Kilt.CTypeHash
) {
  // Creating a challenge to submit to the receiver
  const challenge = Kilt.Utils.UUID.generate()

  // Sender uri is checked if it is a valid URI
  Kilt.Did.validateUri(senderUri)
  // Receiver uri is checked if it is a valid URI
  Kilt.Did.validateUri(receiverUri)

  // The content of the 'request-credential' message
  // It includes a CType that is being requested, this can be for attestation or verification
  // The sender is the trusted attester in the scenario
  const requestCredentialContent = {
    cTypeHash: cTypeHash,
    trustedAttesters: [senderUri]
  }

  const messageBody: Kilt.IRequestCredential = {
    type: 'request-credential',
    content: { cTypes: [requestCredentialContent], challenge: challenge }
  }

  // The message will throw an Error if invalid
  const message = Kilt.Message.fromBody(messageBody, senderUri, receiverUri)

  console.log(`Generated message: ${JSON.stringify(message, null, 4)}`)

  return message
}

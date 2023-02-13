import * as Kilt from '@kiltprotocol/sdk-js'
import { useDecryptionSignCallback } from '../signCallback/useDecryptionSignCallback'

export async function decryptMessage(
  encryptedMessage: Kilt.IEncryptedMessage,
  keyAgreement: Kilt.KiltEncryptionKeypair,
  receiverCredential: Kilt.ICredential
): Promise<void> {
  // Decrypting the message to retrieve the content
  const decryptedMessage = await Kilt.Message.decrypt(
    encryptedMessage,
    useDecryptionSignCallback(keyAgreement)
  )

  // Verifying this is a message
  Kilt.Message.verify(decryptedMessage)

  console.log(`Decrypted Message: ${JSON.stringify(decryptedMessage, null, 4)}`)

  // Checking if the message type matches the expected checks
  if (decryptedMessage.body.type !== 'request-credential') {
    throw new Error('Not the correct body type')
  }

  // Destructing the message to receive the cTypes array to see what credentials
  // Are valid for the given request
  const { cTypes } = decryptedMessage.body.content

  const { cTypeHash, trustedAttesters } = cTypes[0]

  // The receiver can submit a credential and this can be checked to see
  // if they have a valid credential that matches the end of the receiver
  if (cTypeHash !== receiverCredential.claim.cTypeHash) {
    throw new Error(
      'The Claim type hash does not match the credential claim type'
    )
  }

  //
  await Kilt.Credential.verifyCredential(receiverCredential)

  // Verify the credential attestation by checking on the blockchain.
  // Uses the polkadot api to get the information of the attestation
  const api = Kilt.ConfigService.get('api')
  const attestationChain = await api.query.attestation.attestations(
    receiverCredential.rootHash
  )
  const attestation = Kilt.Attestation.fromChain(
    attestationChain,
    receiverCredential.rootHash
  )

  const attesterDid = await Kilt.Did.resolve(attestation.owner)

  // Filters through the listed trusted Attesters given by the sender to find
  // if the attestation issuer is on the given list.
  const trustedAttester = trustedAttesters.filter(
    (val) => val === attesterDid.document.uri
  )
  if (!trustedAttester) {
    throw new Error('Not an attester that is available')
  }

  console.log(`The trusted attesters DID ${trustedAttester}`)

  console.log(
    'Receiver has a trusted credential: ',
    JSON.stringify(receiverCredential, null, 4)
  )
}

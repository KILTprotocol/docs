import * as Kilt from '@kiltprotocol/sdk-js'

// returns a challenge for Claimer to sign
export function getChallenge() {
  return Kilt.Utils.UUID.generate()
}
// verifies validity, ownership & attestation returning true|false
export async function verifyCredential(presentationJSON, challenge) {
  const presentation = JSON.parse(presentationJSON)
  const credential = new Kilt.Credential(presentation)

  const isValid = await credential.verify()

  const isSenderOwner = await Kilt.Credential.verify(presentation, { challenge })

  const isAttested = !credential.attestation.revoked

  return isValid && isSenderOwner && isAttested
}

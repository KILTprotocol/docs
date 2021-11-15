import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(credential: Kilt.Credential) {
  // The `verify()` method does two things:
  // 1. verifies that the data is valid for the given CTYPE
  // 2. verifies that the attestation hash is present on the Kilt blockchain and that the attestation has not been revoked
  const isValid = await credential.verify()
  console.log('Is the credential valid?', isValid)

  // disconnect from the chain
  await Kilt.disconnect()
  console.log('Disconnected from KILT testnet')
}

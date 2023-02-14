import * as Kilt from '@kiltprotocol/sdk-js'
import { u8aToHex } from '@polkadot/util'

type KeyLookup = (parameter: { didUri: Kilt.DidUri, keyRelationship: Kilt.VerificationKeyRelationship }) => Promise<{
  key: Kilt.KiltKeyringPair,
  keyType: Kilt.VerificationKeyType,
  keyUri: Kilt.DidResourceUri
}>

export async function generateAndVerifyDidAuthenticationSignature(
  did: Kilt.DidDocument,
  payload: Uint8Array,
  keyLookup: KeyLookup,
): Promise<void> {
  // How the key is looked up depends on where the key is stored (e.g. memory, hardware wallet, browser extension)
  const { key, keyUri } = await keyLookup({
    didUri: did.uri,
    keyRelationship: 'authentication'
  })

  // Generate a signature using the key that we just looked up.
  const signature = key.sign(payload)

  // Print the generated signature object.
  console.log('Generated signature:')
  console.log(u8aToHex(signature))

  // Verify the validity of the signature using the DID's authentication public key.
  // It throws if the signature cannot be verified.
  await Kilt.Did.verifyDidSignature({
    message: payload,
    signature,
    keyUri,
    expectedVerificationMethod: 'authentication'
  })
}

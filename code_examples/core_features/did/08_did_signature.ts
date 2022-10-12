import { u8aToHex } from '@polkadot/util'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateAndVerifyDidAuthenticationSignature(
  did: Kilt.DidDocument,
  payload: Uint8Array,
  signCallback: Kilt.SignCallback
): Promise<void> {
  // Generate a signature using the provided DID's authentication key.
  const { signature, keyUri } = await signCallback({
    data: payload,
    did: did.uri,
    keyRelationship: 'authentication'
  })
  // Transform the signature into a signature
  const didSignature = { signature: u8aToHex(signature), keyUri }

  // Print the generated signature object.
  console.log('Generated signature:')
  console.log(JSON.stringify(signature, null, 2))

  // Verify the validity of the signature using the DID's authentication public key.
  // It throws if the signature cannot be verified
  await Kilt.Did.verifyDidSignature({
    message: payload,
    signature: didSignature,
    expectedVerificationMethod: 'authentication'
  })
}

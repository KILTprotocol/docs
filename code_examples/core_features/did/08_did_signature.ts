import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateAndVerifyDidAuthenticationSignature(
  did: Kilt.DidDocument,
  payload: string | Uint8Array,
  signCallback: Kilt.SignCallback
): Promise<void> {
  // Generate a signature using the provided DID's authentication key.
  const signature = await Kilt.Did.signPayload(
    did.uri,
    payload,
    signCallback,
    'authentication'
  )

  // Print the generated signature object.
  console.log('Generated signature:')
  console.log(JSON.stringify(signature, null, 2))

  // Verify the validity of the signature using the DID's authentication public key.
  // It throws if the signature cannot be verified
  await Kilt.Did.verifyDidSignature({
    message: payload,
    signature,
    expectedVerificationMethod: 'authentication'
  })
}

import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateAndVerifyDidAuthenticationSignature(
  keystore: Kilt.Did.DemoKeystore,
  did: Kilt.Did.DidDetails,
  payload: string | Uint8Array
): Promise<void> {
  // Generate a signature using the provided DID's authentication key.
  const signature = await did.signPayload(
    payload,
    keystore,
    did.authenticationKey.id
  )

  // Print the generated signature object.
  console.log('Generated signature:')
  console.log(JSON.stringify(signature, null, 2))

  // Verify the validity of the signature using the DID's authentication public key.
  const signatureVerificationResult =
    await Kilt.Did.DidUtils.verifyDidSignature({
      message: payload,
      signature,
      expectedVerificationMethod: Kilt.KeyRelationship.authentication
    })

  if (!signatureVerificationResult.verified) {
    throw `Signature failed to verify. Reason: ${signatureVerificationResult.reason}`
  }
}

import { DemoKeystore, DidDetails, DidUtils } from '@kiltprotocol/did'
import { KeyRelationship } from '@kiltprotocol/types'

export async function generateAndVerifyDidAuthenticationSignature(
  keystore: DemoKeystore,
  did: DidDetails,
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
  const signatureVerificationResult = await DidUtils.verifyDidSignature({
    message: payload,
    signature,
    expectedVerificationMethod: KeyRelationship.authentication
  })

  if (!signatureVerificationResult.verified) {
    throw `Signature failed to verify. Reason: ${signatureVerificationResult.reason}`
  }
}

import { DemoKeystore, DidDetails, DidUtils } from '@kiltprotocol/did'

import { KeyRelationship } from '@kiltprotocol/types'

export async function main(
  keystore: DemoKeystore,
  didDetails: DidDetails,
  payload: string | Uint8Array
): Promise<boolean> {
  // Generate a signature using the provided DID's authentication key.
  const signature = await didDetails.signPayload(
    payload,
    keystore,
    didDetails.authenticationKey.id
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

  return signatureVerificationResult.verified
}

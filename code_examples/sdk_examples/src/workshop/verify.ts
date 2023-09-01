import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createPresentation } from './claimer/createPresentation'
import { generateKeypairs } from './claimer/generateKeypairs'


function getChallenge(): string {
  return Kilt.Utils.UUID.generate()
}

// Verifies validity, ownership & attestation.
async function verifyPresentation(
  presentation: Kilt.ICredentialPresentation,
  challenge: string,
  trustedAttesterUris: Kilt.DidUri[]
): Promise<boolean> {
  Kilt.ConfigService.get('api')

  try {
    const { revoked, attester } = await Kilt.Credential.verifyPresentation(
      presentation,
      { challenge }
    )

    if (revoked) {
      return false
    }
    // Returns true if no trusted attester URI is provided or, if it is, if it matches the one that issued the presented credential.
    return trustedAttesterUris.includes(attester)
  } catch {
    return false
  }
}

export async function verificationFlow(
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback,
  trustedAttesterUris: Kilt.DidUri[] = []
) {
  // Verifier sends a unique challenge to the claimer 🕊
  const challenge = getChallenge()

  // Create a presentation and send it to the verifier 🕊
  const presentation = await createPresentation(
    credential,
    signCallback,
    challenge
  )

  // The verifier checks the presentation.
  const isValid = await verifyPresentation(
    presentation,
    challenge,
    trustedAttesterUris
  )

  if (isValid) {
    console.log('Verification successful! You are allowed to enter the club 🎉')
  } else {
    console.log('Verification failed! 🚫')
  }
}

async function getDidfromUri(didUri: Kilt.DidUri): Promise<Kilt.DidDocument> {
  const claimerDid = await Kilt.Did.resolve(didUri)

  if(!claimerDid.document) {
    throw new Error("Did is not anchored in the blockchain")
  }
  return claimerDid.document
}

// Don't execute if this is imported by another file.
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.connect(process.env.WSS_ADDRESS as string)
      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string
      const { authentication } = generateKeypairs(claimerDidMnemonic)
      const claimerDidUri = process.env.CLAIMER_DID_URI as Kilt.DidUri
      const claimerDid = await getDidfromUri(claimerDidUri)

      const attesterDid = process.env.ATTESTER_DID_URI as Kilt.DidUri
      // Load credential and claimer DID
      const credential = JSON.parse(process.env.CLAIMER_CREDENTIAL as string)
      await verificationFlow(
        credential,
        async ({ data }) => ({
          signature: authentication.sign(data),
          keyType: authentication.type,
          keyUri: `${claimerDid.uri}${claimerDid.authentication[0].id}`
        }),
        [attesterDid]
      )
    } catch (e) {
      console.log('Error in the verification flow')
      throw e
    }
  })()
}

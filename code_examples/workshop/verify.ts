import type { ApiPromise } from '@polkadot/api'

import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createPresentation } from './claimer/createPresentation'
import { generateKeypairs } from './claimer/generateKeypairs'
import { generateLightDid } from './claimer/generateLightDid'

function getChallenge(): string {
  return Kilt.Utils.UUID.generate()
}

// verifies validity, ownership & attestation
async function verifyPresentation(
  api: ApiPromise,
  presentation: Kilt.ICredentialPresentation,
  challenge: string
): Promise<boolean> {
  try {
    await Kilt.Credential.verifyPresentation(presentation, { challenge })

    const attestationInfo = Kilt.Attestation.fromChain(
      await api.query.attestation.attestations(presentation.rootHash),
      presentation.rootHash
    )
    return !attestationInfo.revoked
  } catch {
    return false
  }
}

export async function verificationFlow(
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback
) {
  const api = Kilt.ConfigService.get('api')

  // Verifier sends a unique challenge to the claimer 🕊
  const challenge = getChallenge()

  // Create a presentation and send it to the verifier 🕊
  const presentation = await createPresentation(
    credential,
    signCallback,
    challenge
  )

  // The verifier checks the presentation
  const isValid = await verifyPresentation(api, presentation, challenge)

  if (isValid) {
    console.log('Verification successful! You are allowed to enter the club 🎉')
  } else {
    console.log('Verification failed! 🚫')
  }
}

// Don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string
      const { authentication } = generateKeypairs(claimerDidMnemonic)
      const claimerDid = generateLightDid(claimerDidMnemonic)
      // Load credential and claimer DID
      const credential = JSON.parse(process.env.CLAIMER_CREDENTIAL as string)
      await verificationFlow(credential, async ({ data }) => ({
        data: authentication.sign(data),
        keyType: authentication.type,
        keyUri: `${claimerDid.uri}${claimerDid.authentication[0].id}`
      }))
      process.exit(0)
    } catch (e) {
      console.log('Error in the verification flow', e)
      process.exit(1)
    }
  })()
}

import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createPresentation } from './claimer/createPresentation'
import { generateKeypairs } from './claimer/generateKeypairs'

function getChallenge(): string {
  return Kilt.Utils.UUID.generate()
}

// verifies validity, ownership & attestation
async function verifyPresentation(presentation: Kilt.ICredential, challenge: string): Promise<boolean> {
  const credential = new Kilt.Credential(presentation)

  const isValid = await credential.verify({ challenge })
  const isRevoked = credential.attestation.revoked

  // Custom logic
  // e.g., only allow access if age >= 18

  return isValid && !isRevoked
}

export async function verificationFlow() {
  await Kilt.init({ address: process.env.WSS_ADDRESS })

  // Load credential and claimer DID
  const credential = JSON.parse(process.env.CLAIMER_CREDENTIAL as string)
  const keystore = new Kilt.Did.DemoKeystore()
  const keys = await generateKeypairs(keystore, process.env.CLAIMER_MNEMONIC)
  const lightDid = Kilt.Did.LightDidDetails.fromDetails({
    ...keys,
    authenticationKey: {
      publicKey: keys.authenticationKey.publicKey,
      type: Kilt.VerificationKeyType.Sr25519
    },
  })

  // Verifier sends a unique challenge to the claimer 🕊
  const challenge = getChallenge()

  // create a presentation and send it to the verifier 🕊
  const presentation = await createPresentation(credential, lightDid, keystore, challenge)

  // The verifier checks the presentation
  const isValid = await verifyPresentation(presentation, challenge)

  if (isValid) {
    console.log('Verification successful! You are allowed to enter the club 🎉')
  } else {
    console.log('Verification failed! 🚫')
  }
}

// don't execute if this is imported by another file
if (require.main === module) {
  envConfig()
  verificationFlow()
    .catch((e) => {
      console.log('Error in the verification flow', e)
      process.exit(1)
    })
    .then(() => {
      process.exit()
    })
}

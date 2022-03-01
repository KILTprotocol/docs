import 'dotenv/config'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { fileURLToPath } from 'url'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createPresentation } from './claimer/createPresentation.js'
import { generateKeypairs } from './claimer/generateKeypairs.js'

// returns a challenge for Claimer to sign
export function getChallenge() {
  return Kilt.Utils.UUID.generate()
}

// verifies validity, ownership & attestation returning true|false
export async function verifyPresentation(presentation, challenge) {
  const credential = new Kilt.Credential(presentation)

  const isValid = await credential.verify({ challenge })

  const isNotRevoked = !credential.attestation.revoked

  // Custom logic
  // e.g. only allow access if age >= 18

  return isValid && isNotRevoked
}

export async function verificationFlow() {
  await cryptoWaitReady()
  await Kilt.init({ address: process.env.WSS_ADDRESS })

  // Load credential and claimer DID
  const credential = JSON.parse(process.env.CLAIMER_CREDENTIAL)
  const keystore = new Kilt.Did.DemoKeystore()
  const keys = await generateKeypairs(keystore, process.env.CLAIMER_MNEMONIC)
  const lightDid = Kilt.Did.LightDidDetails.fromDetails(keys)

  // Verifier sends a unique challenge to the claimer 🕊
  const challenge = getChallenge()

  // create a presentation and send it to the verifier 🕊
  const presentation = await createPresentation(credential, challenge, lightDid, keystore)

  // The verifier checks the presentation
  const isValid = await verifyPresentation(presentation, challenge)

  if (isValid) {
    console.log('Verification successful! You are allowed to enter the club 🎉')
  } else {
    console.log('Verification failed! 🚫')
  }
}

// don't execute if this is imported by another files
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  verificationFlow()
    .catch((e) => {
      console.log('Error in the verification flow', e)
      process.exit(1)
    })
    .then(() => {
      process.exit()
    })
}

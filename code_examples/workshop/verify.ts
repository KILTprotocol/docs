import { config as envConfig } from 'dotenv'

import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createPresentation } from './claimer/createPresentation'
import { generateKeypairs } from './claimer/generateKeypairs'

function getChallenge(): string {
  return Kilt.Utils.UUID.generate()
}

// verifies validity, ownership & attestation
async function verifyPresentation(
  presentation: Kilt.ICredential,
  challenge: string
): Promise<boolean> {
  try {
    await Kilt.Credential.verify(presentation, { challenge })
  } catch {
    return false
  }
  return Kilt.Attestation.checkValidity(presentation.rootHash)
}

export async function verificationFlow() {
  // Load credential and claimer DID
  const credential = JSON.parse(process.env.CLAIMER_CREDENTIAL as string)
  const keyring = new Keyring({
    ss58Format: Kilt.Utils.ss58Format,
  })
  const signCallbackForKeyring = (keyring: Keyring): Kilt.SignCallback => {
    return async ({ data, alg, publicKey }) => {
      const address = encodeAddress(
        alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey
      )
      const key = keyring.getPair(address)

      return { data: key.sign(data), alg }
    }
  }
  const { authenticationKey, encryptionKey } = await generateKeypairs(
    keyring,
    process.env.CLAIMER_MNEMONIC
  )
  const lightDid = Kilt.Did.createLightDidDetails({
    authentication: [authenticationKey as Kilt.NewLightDidVerificationKey],
    keyAgreement: [encryptionKey]
  })

  // Verifier sends a unique challenge to the claimer 🕊
  const challenge = getChallenge()

  // create a presentation and send it to the verifier 🕊
  const presentation = await createPresentation(
    credential,
    lightDid,
    signCallbackForKeyring(keyring),
    challenge
  )

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
  Kilt.init({ address: process.env.WSS_ADDRESS }).then(() => {
    verificationFlow()
      .catch((e) => {
        console.log('Error in the verification flow', e)
        process.exit(1)
      })
      .then(() => {
        process.exit()
      })
  })
}

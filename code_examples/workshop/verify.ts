import type { ApiPromise } from '@polkadot/api'

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

function getSignCallback(
  keyring: Keyring,
  did: Kilt.DidDocument
): Kilt.SignCallback {
  return async ({ data }) => {
    const { publicKey, type, id } = did.authentication[0]
    // Taken from https://github.com/polkadot-js/common/blob/master/packages/keyring/src/pair/index.ts#L44
    const address = encodeAddress(
      type === 'ecdsa' ? blake2AsU8a(publicKey) : publicKey,
      Kilt.Utils.ss58Format
    )
    const key = keyring.getPair(address) as Kilt.KiltKeyringPair

    return {
      data: key.sign(data),
      keyType: type,
      keyUri: `${did.uri}${id}`
    }
  }
}

export async function verificationFlow(api: ApiPromise) {
  // Load credential and claimer DID
  const credential = JSON.parse(process.env.CLAIMER_CREDENTIAL as string)
  const keyring = new Keyring({
    ss58Format: Kilt.Utils.ss58Format
  })
  const { authenticationKey, encryptionKey } = generateKeypairs(
    keyring,
    process.env.CLAIMER_MNEMONIC
  )
  const lightDid = Kilt.Did.createLightDidDocument({
    authentication: [authenticationKey as Kilt.NewLightDidVerificationKey],
    keyAgreement: [encryptionKey]
  })

  // Verifier sends a unique challenge to the claimer 🕊
  const challenge = getChallenge()

  // create a presentation and send it to the verifier 🕊
  const presentation = await createPresentation(
    credential,
    getSignCallback(keyring, lightDid),
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

// don't execute if this is imported by another file
if (require.main === module) {
  ;(async () => {
    envConfig()
    const api = await Kilt.connect(process.env.WSS_ADDRESS as string)

    try {
      await verificationFlow(api)
      process.exit(0)
    } catch (e) {
      console.log('Error in the verification flow', e)
      process.exit(1)
    }
  })()
}

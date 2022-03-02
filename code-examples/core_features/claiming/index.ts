import { init as kiltInit } from '@kiltprotocol/core'
import {
  LightDidDetails,
  DemoKeystore,
  SigningAlgorithms
} from '@kiltprotocol/did'
import { VerificationKeyType } from '@kiltprotocol/sdk-js'

import { main as main1 } from './1_claiming'
import { main as main2 } from './2_claiming'
import { main as main3 } from './3_claiming'

async function getLightDid(): Promise<{
  lightDid: LightDidDetails
  keystore: DemoKeystore
}> {
  // Instantiate the demo keystore.
  const keystore = new DemoKeystore()

  // Generate seed for the authentication key.
  const authenticationSeed = '0x123456789'

  // Ask the keystore to generate a new keypair to use for authentication with the generated seed.
  // For random seed generation, just omit the `seed` argument.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: SigningAlgorithms.Sr25519,
    seed: authenticationSeed
  })

  // Create a light DID from the generated authentication key.
  const lightDid = LightDidDetails.fromDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: VerificationKeyType.Sr25519
    }
  })

  return { lightDid, keystore }
}

export async function runAll(): Promise<void> {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })

  const { lightDid: claimer, keystore } = await getLightDid()

  console.log('main1 - create ctype')
  const ctype = await main1()
  console.log('main2 - create claim')
  const claim = await main2(ctype, claimer.did)
  console.log('main3 - create request for attestation')
  await main3(claim, keystore, claimer)
}

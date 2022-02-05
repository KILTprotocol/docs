import { init as kiltInit } from '@kiltprotocol/core'
import {
  LightDidDetails,
  DemoKeystore,
  SigningAlgorithms,
} from '@kiltprotocol/did'

import { main as main1 } from './1_claiming'
import { main as main2 } from './2_claiming'
import { main as main3 } from './3_claiming'

const SEED_ENV = 'FAUCET_SEED'

async function getLightDid() {
  // Instantiate the demo keystore.
  const keystore = new DemoKeystore()

  // Generate seed for the authentication key.
  // For random mnemonic generation, refer to the `UUID` module of the `@kiltprotocol/utils` package.
  const authenticationSeed = '0x123456789'

  // Ask the keystore to generate a new keypair to use for authentication with the generated seed.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: SigningAlgorithms.Sr25519,
    seed: authenticationSeed,
  })

  // Create a light DID from the generated authentication key.
  const lightDID = new LightDidDetails({
    authenticationKey: {
      publicKey: authenticationKeyPublicDetails.publicKey,
      type: DemoKeystore.getKeypairTypeForAlg(
        authenticationKeyPublicDetails.alg
      ),
    },
  })

  return { lightDID, keystore }
}

export async function runAll() {
  await kiltInit({ address: 'wss://peregrine-stg.kilt.io/para-public-ws' })

  const { lightDID: claimer, keystore } = await getLightDid()

  console.log('main1 - create ctype')
  const ctype = await main1()
  console.log('main2 - create claim')
  const claim = await main2(ctype, claimer)
  console.log('main3 - create request for attestation')
  await main3(claim, keystore, claimer)
}

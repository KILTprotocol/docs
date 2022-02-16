import * as Kilt from '@kiltprotocol/sdk-js'
import { generateKeypairs } from './generateKeypairs.js'

async function createLightDid(didUri, keypairs) {
  // build the Claimer keys object
  const keys = {
    authenticationKey: {
      publicKey: keypairs.signing.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(keypairs.signing.alg),
    },
    encryptionKey: {
      publicKey: keypairs.encryption.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(keypairs.encryption.alg),
    },
  }

  // create the DID
  const lightDid = new Kilt.Did.LightDidDetails(keys)

  // prompt to store it for reference
  if (!didUri) {
    console.log('\nsave following to .env to continue\n')
    console.error(`CLAIMER_DID_URI=${lightDid.didUri}\n`)
    process.env.CLAIMER_DID_URI = lightDid.didUri
  }

  return lightDid
}

export async function getLightDid(didUri, keystore, mnemonic) {
  const keypairs = await generateKeypairs(keystore, mnemonic)
  return await createLightDid(didUri, keypairs)
}

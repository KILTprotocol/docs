import * as Kilt from '@kiltprotocol/sdk-js'

export async function generateKeypairs(keystore, mnemonic) {
  // signing keypair
  const signing = await keystore.generateKeypair({
    alg: Kilt.Did.SigningAlgorithms.Sr25519,
    seed: mnemonic,
  })

  // encryption keypair
  const encryption = await keystore.generateKeypair({
    alg: Kilt.Did.EncryptionAlgorithms.NaclBox,
    seed: mnemonic,
  })

  return { signing, encryption }
}

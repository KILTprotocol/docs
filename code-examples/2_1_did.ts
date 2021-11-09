import * as Kilt from '@kiltprotocol/sdk-js'

export async function main() {
  const claimerMnemonic =
    'gold upset segment cake universe carry demand comfort dawn invite element capital'

  // **Using the demo keystore in production is highly discouraged as all the keys are kept in the memory and easily retrievable by malicious actors.**
  const keystore = new Kilt.Did.DemoKeystore()
  // Generate authentication and encryption keys used to derive a light DID from them.
  const claimerSigningKeypair = await keystore.generateKeypair({
    alg: Kilt.Did.SigningAlgorithms.Ed25519,
    seed: claimerMnemonic,
  })
  const claimerEncryptionKeypair = await keystore.generateKeypair({
    alg: Kilt.Did.EncryptionAlgorithms.NaclBox,
    seed: claimerMnemonic,
  })
  // Using the generated authentication and encryption keys to derive a light DID.
  const claimerLightDid = new Kilt.Did.LightDidDetails({
    authenticationKey: {
      publicKey: claimerSigningKeypair.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(
        claimerSigningKeypair.alg
      ),
    },
    encryptionKey: {
      publicKey: claimerEncryptionKeypair.publicKey,
      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(
        claimerEncryptionKeypair.alg
      ),
    },
  })

  return claimerLightDid
}

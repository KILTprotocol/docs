import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  keystore: Kilt.Did.DemoKeystore
): Promise<[Kilt.Did.LightDidDetails, Kilt.Did.DemoKeystore]> {
  const claimerMnemonic =
    'gold upset segment cake universe carry demand comfort dawn invite element capital'

  const claimerSigningKeypair = await keystore.generateKeypair({
    alg: Kilt.Did.SigningAlgorithms.Ed25519,
    seed: claimerMnemonic,
  })
  const claimerEncryptionKeypair = await keystore.generateKeypair({
    alg: Kilt.Did.EncryptionAlgorithms.NaclBox,
    seed: claimerMnemonic,
  })

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

  console.log('Claimers Light DID:', claimerLightDid)

  return [claimerLightDid, keystore]
}

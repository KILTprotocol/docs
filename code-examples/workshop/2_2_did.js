const Kilt = require('@kiltprotocol/sdk-js')

async function createClaimerLightDid(keystore, claimerMnemonic) {
  // replace with the claimer mnemonic
  // const claimerMnemonic =
  //   'gold upset segment cake universe carry demand comfort dawn invite element capital'

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

  return { claimerLightDid, keystore }
}

module.exports.createClaimerLightDid = createClaimerLightDid

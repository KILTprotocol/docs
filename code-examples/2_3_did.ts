import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  attester: Kilt.KeyringPair,
  attesterMnemonic: string,
  keystore: Kilt.Did.DemoKeystore
) {
  await Kilt.connect()

  const attesterFullDid = await Kilt.Did.createOnChainDidFromSeed(
    attester,
    keystore,
    attesterMnemonic
  )
  await Kilt.disconnect()

  return [attesterFullDid, keystore]
}

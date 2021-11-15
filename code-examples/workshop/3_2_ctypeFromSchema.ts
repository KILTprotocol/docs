import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  attester: Kilt.KeyringPair,
  attesterFullDid: Kilt.Did.FullDidDetails,
  ctype: Kilt.CType,
  keystore: Kilt.Did.DemoKeystore
) {
  await Kilt.connect()

  // Good to check if the ctype is stored on chain
  if (ctype.verifyStored()) return ctype

  // If the ctype isn't stored on the chain, then an account with a full DID will need to store the ctype on-chain.
  const tx = await ctype.store()

  const authorizedExtrinsic = await attesterFullDid.authorizeExtrinsic(
    tx,
    keystore,
    attester.address
  )

  await Kilt.BlockchainUtils.signAndSubmitTx(authorizedExtrinsic, attester, {
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
    reSign: true,
  })

  await Kilt.disconnect()
  return ctype
}

import * as Kilt from '@kiltprotocol/sdk-js'
export async function createDriversLicenseCType(
  keystore,
  creatorDid,
  submitterAccount,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // Create a new CType definition.
  const ctype = Kilt.CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: `Drivers License by ${creatorDid.uri}`,
    properties: {
      name: {
        type: 'string'
      },
      age: {
        type: 'integer'
      },
      id: {
        type: 'string'
      }
    },
    type: 'object'
  })
  // Generate a creation extrinsic and sign it with the attester's attestation key.
  const ctypeCreationTx = await ctype
    .getStoreTx()
    .then((tx) =>
      creatorDid.authorizeExtrinsic(tx, keystore, submitterAccount.address)
    )
  // Submit the creation extrinsic to the KILT blockchain
  // using the KILT account specified in the creation operation.
  await Kilt.BlockchainUtils.signAndSubmitTx(
    ctypeCreationTx,
    submitterAccount,
    { resolveOn }
  )
  return ctype
}

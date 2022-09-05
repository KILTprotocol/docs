import * as Kilt from '@kiltprotocol/sdk-js'
function getRandomCType() {
  // Random factor ensures that each created CType is unique and does not already exist on chain.
  const randomFactor = Kilt.Utils.UUID.generate()
  return Kilt.CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: `CType ${randomFactor}`,
    properties: {
      name: {
        type: 'string'
      },
      age: {
        type: 'integer'
      }
    },
    type: 'object'
  })
}
export async function batchCTypeCreationExtrinsics(
  keystore,
  api,
  submitterAccount,
  fullDid,
  resolveOn = Kilt.BlockchainUtils.IS_FINALIZED
) {
  // Create two random demo CTypes
  const ctype1 = getRandomCType()
  const ctype1CreationTx = await ctype1.getStoreTx()
  const ctype2 = getRandomCType()
  const ctype2CreationTx = await ctype2.getStoreTx()
  // Create the DID-signed batch
  const batch = await new Kilt.Did.DidBatchBuilder(api, fullDid)
    .addMultipleExtrinsics([ctype1CreationTx, ctype2CreationTx])
    .build(keystore, submitterAccount.address)
  // The authorized account submits the batch to the chain
  await Kilt.BlockchainUtils.signAndSubmitTx(batch, submitterAccount, {
    resolveOn
  })
  if (!(await ctype1.verifyStored()) || !(await ctype2.verifyStored())) {
    throw 'One of the two CTypes has not been properly stored.'
  }
}

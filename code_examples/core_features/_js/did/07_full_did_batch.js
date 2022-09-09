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
  api,
  submitterAccount,
  fullDid,
  signCallback,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
  // Create two random demo CTypes
  const ctype1 = getRandomCType()
  const ctype1CreationTx = await Kilt.CType.getStoreTx(ctype1)
  const ctype2 = getRandomCType()
  const ctype2CreationTx = await Kilt.CType.getStoreTx(ctype2)
  // Create the DID-signed batch
  const authorizedBatch = await Kilt.Did.authorizeBatch({
    batchFunction: api.tx.utility.batchAll,
    did: fullDid,
    extrinsics: [ctype1CreationTx, ctype2CreationTx],
    sign: signCallback,
    submitter: submitterAccount.address
  })
  // The authorized account submits the batch to the chain
  await Kilt.Blockchain.signAndSubmitTx(authorizedBatch, submitterAccount, {
    resolveOn
  })
}

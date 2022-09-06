import { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

function getRandomCType(): Kilt.ICType {
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
  api: ApiPromise,
  submitterAccount: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidDetails,
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain.IS_FINALIZED
): Promise<void> {
  // Create two random demo CTypes
  const ctype1 = getRandomCType()
  const ctype1CreationTx = await Kilt.CType.getStoreTx(ctype1)
  const ctype2 = getRandomCType()
  const ctype2CreationTx = await Kilt.CType.getStoreTx(ctype2)

  // Create the DID-signed batch
  const authorisedBatch = await Kilt.Did.authorizeBatch({
    batchFunction: api.tx.utility.batch,
    did: fullDid,
    extrinsics: [
      ctype1CreationTx,
      ctype2CreationTx
    ],
    sign: signCallback,
    submitter: submitterAccount.address
  })

  // The authorized account submits the batch to the chain
  await Kilt.Blockchain.signAndSubmitTx(authorisedBatch, submitterAccount, {
    resolveOn
  })

  if (!(await Kilt.CType.verifyStored(ctype1) || !(await Kilt.CType.verifyStored(ctype2)))) {
    throw 'One of the two CTypes has not been properly stored.'
  }
}

import * as Kilt from '@kiltprotocol/sdk-js'

function getRandomCType(): Kilt.ICType {
  // Random factor ensures that each created CType is unique and does not already exist on chain.
  const randomFactor = Kilt.Utils.UUID.generate()
  return Kilt.CType.fromProperties(`CType ${randomFactor}`, {
    name: {
      type: 'string'
    },
    age: {
      type: 'integer'
    }
  })
}

export async function batchCTypeCreationExtrinsics(
  submitterAccount: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidUri,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Create two random demo CTypes.
  const ctype1 = getRandomCType()
  const ctype1CreationTx = api.tx.ctype.add(Kilt.CType.toChain(ctype1))
  const ctype2 = getRandomCType()
  const ctype2CreationTx = api.tx.ctype.add(Kilt.CType.toChain(ctype2))

  // Create the DID-signed batch.
  const authorizedBatch = await Kilt.Did.authorizeBatch({
    batchFunction: api.tx.utility.batchAll,
    did: fullDid,
    extrinsics: [ctype1CreationTx, ctype2CreationTx],
    sign: signCallback,
    submitter: submitterAccount.address
  })

  // The authorized account submits the batch to the chain.
  await Kilt.Blockchain.signAndSubmitTx(authorizedBatch, submitterAccount)
}

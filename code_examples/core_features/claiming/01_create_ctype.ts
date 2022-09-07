import * as Kilt from '@kiltprotocol/sdk-js'

export async function createDriversLicenseCType(
  creator: Kilt.DidDetails,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<Kilt.ICType> {
  // Create a new CType definition.
  const ctype = Kilt.CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: `Drivers License by ${creator.uri}`,
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
  const ctypeCreationTx = await Kilt.CType.getStoreTx(ctype).then((tx) =>
    Kilt.Did.authorizeExtrinsic(
      creator,
      tx,
      signCallback,
      submitterAccount.address
    )
  )
  // Submit the creation extrinsic to the KILT blockchain
  // using the KILT account specified in the creation operation.
  await Kilt.Blockchain.signAndSubmitTx(ctypeCreationTx, submitterAccount, {
    resolveOn
  })

  return ctype
}

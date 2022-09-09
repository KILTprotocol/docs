import * as Kilt from '@kiltprotocol/sdk-js'
export async function createDriversLicenseCType(
  creator,
  submitterAccount,
  signCallback,
  resolveOn = Kilt.Blockchain.IS_FINALIZED
) {
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
  // Generate a creation extrinsic
  const ctypeCreationTx = await Kilt.CType.getStoreTx(ctype)
  // Sign it with the right DID key
  const authorisedCtypeCreationTx = await Kilt.Did.authorizeExtrinsic(
    creator,
    ctypeCreationTx,
    signCallback,
    submitterAccount.address
  )
  // Submit the creation extrinsic to the KILT blockchain
  // using the KILT account specified in the creation operation.
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedCtypeCreationTx,
    submitterAccount,
    {
      resolveOn
    }
  )
  return ctype
}

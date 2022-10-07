import * as Kilt from '@kiltprotocol/sdk-js'

export async function createDriversLicenseCType(
  creator: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback
): Promise<Kilt.ICType> {
  const api = Kilt.ConfigService.get('api')

  // Create a new CType definition.
  const ctype = Kilt.CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: `Drivers License by ${creator}`,
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
  const ctypeCreationTx = api.tx.ctype.add(Kilt.CType.toChain(ctype))
  // Sign it with the right DID key
  const authorizedCtypeCreationTx = await Kilt.Did.authorizeExtrinsic(
    creator,
    ctypeCreationTx,
    signCallback,
    submitterAccount.address
  )
  // Submit the creation extrinsic to the KILT blockchain
  // using the KILT account specified in the creation operation.
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedCtypeCreationTx,
    submitterAccount
  )

  return ctype
}

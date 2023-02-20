import * as Kilt from '@kiltprotocol/sdk-js'
// Just a helper to get an extrinsic
import getExtrinsic from '../utils/getExtrinsic'

export async function batchCTypeCreationExtrinsics(
  submitterAccount: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidUri,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Build two extrinsics
  const extrinsic1 = getExtrinsic()
  const extrinsic2 = getExtrinsic()

  // Create the DID-signed batch.
  const authorizedBatch = await Kilt.Did.authorizeBatch({
    batchFunction: api.tx.utility.batchAll,
    did: fullDid,
    extrinsics: [extrinsic1, extrinsic2],
    sign: signCallback,
    submitter: submitterAccount.address
  })

  // wrap the DID extrinsic in an account extrinsic
  await Kilt.Blockchain.signAndSubmitTx(authorizedBatch, submitterAccount)
}

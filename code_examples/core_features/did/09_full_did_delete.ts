import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function deleteFullDid(
  api: ApiPromise,
  submitterAccount: Kilt.KiltKeyringPair,
  fullDid: Kilt.DidDocument,
  signCallback: Kilt.SignCallback
): Promise<void> {
  // Create a DID deletion operation. We specify the number of endpoints currently stored under the DID because
  // of the upper computation limit required by the blockchain runtime.
  const didIdentifier = Kilt.Did.Chain.didToChain(fullDid.uri)
  const endpointsCountForDid = await api.query.did.didEndpointsCount(
    didIdentifier
  )
  const didDeletionExtrinsic = await api.tx.did.delete(endpointsCountForDid)

  // Sign the DID deletion operation using the DID authentication key.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const didSignedDeletionExtrinsic = await Kilt.Did.authorizeExtrinsic(
    fullDid,
    didDeletionExtrinsic,
    signCallback,
    submitterAccount.address
  )

  await Kilt.Blockchain.signAndSubmitTx(
    didSignedDeletionExtrinsic,
    submitterAccount
  )
}

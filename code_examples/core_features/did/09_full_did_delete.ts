import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function deleteFullDid(
  keystore: Kilt.Did.DemoKeystore,
  submitterAccount: KeyringPair,
  fullDid: Kilt.Did.FullDidDetails,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<void> {
  // Create a DID deletion operation. We specify the number of endpoints currently stored under the DID because
  // of the upper computation limit required by the blockchain runtime.
  const endpointsCountForDid = await Kilt.Did.DidChain.queryEndpointsCounts(
    fullDid.identifier
  )
  const didDeletionExtrinsic = await Kilt.Did.DidChain.getDeleteDidExtrinsic(
    endpointsCountForDid
  )

  // Sign the DID deletion operation using the DID authentication key.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const didSignedDeletionExtrinsic = await fullDid.authorizeExtrinsic(
    didDeletionExtrinsic,
    keystore,
    submitterAccount.address
  )

  await Kilt.BlockchainUtils.signAndSubmitTx(
    didSignedDeletionExtrinsic,
    submitterAccount,
    {
      resolveOn
    }
  )
}

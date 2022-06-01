import type { KeyringPair } from '@polkadot/keyring/types'

import { DemoKeystore, DidChain, FullDidDetails } from '@kiltprotocol/did'
import { KeystoreSigner, SubscriptionPromise } from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function deleteFullDid(
  keystore: DemoKeystore,
  submitterAccount: KeyringPair,
  fullDid: FullDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  // Create a DID deletion operation. We specify the number of endpoints currently stored under the DID because
  // of the upper computation limit required by the blockchain runtime.
  const endpointsCountForDid = await DidChain.queryEndpointsCounts(
    fullDid.identifier
  )
  const didDeletionExtrinsic = await DidChain.getDeleteDidExtrinsic(
    endpointsCountForDid
  )

  // Sign the DID deletion operation using the DID authentication key.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const didSignedDeletionExtrinsic = await fullDid.authorizeExtrinsic(
    didDeletionExtrinsic,
    keystore as KeystoreSigner<string>,
    submitterAccount.address
  )

  await BlockchainUtils.signAndSubmitTx(
    didSignedDeletionExtrinsic,
    submitterAccount,
    {
      resolveOn
    }
  )
}

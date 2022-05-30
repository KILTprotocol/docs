import type { KeyringPair } from '@polkadot/keyring/types'

import { IDidIdentifier, SubscriptionPromise } from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { DidChain } from '@kiltprotocol/did'

export async function reclaimFullDidDeposit(
  depositPayerAccount: KeyringPair,
  didIdentifier: IDidIdentifier,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  // Generate the submittable extrinsic to claim the deposit back.
  // It includes the DID identifier for which the deposit needs to be returned
  // and the count of service endpoints to provide an upper bound to the computation of the extrinsic execution.
  const endpointsCountForDid = await DidChain.queryEndpointsCounts(
    didIdentifier
  )
  const depositClaimExtrinsic = await DidChain.getReclaimDepositExtrinsic(
    didIdentifier,
    endpointsCountForDid
  )

  // The submission will fail if `depositPayerAccount` is not the owner of the deposit associated with the given DID identifier.
  await BlockchainUtils.signAndSubmitTx(
    depositClaimExtrinsic,
    depositPayerAccount,
    {
      resolveOn
    }
  )
}

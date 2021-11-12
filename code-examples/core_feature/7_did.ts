import { KeyringPair } from '@polkadot/keyring/types'

import { DidChain, FullDidDetails } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise } from '@kiltprotocol/types'
import { init as kiltInit } from '@kiltprotocol/core'

export async function main(
  kiltAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator,
  fullDid: FullDidDetails
) {
  await kiltInit({ address: 'wss://peregrine.kilt.io' })

  // Generate the submittable extrinsic to claim the deposit back, by including the DID identifier for which the deposit needs to be returned and the count of service endpoints to provide an upper bound to the computation of the extrinsic execution.
  const endpointsCountForDid = await DidChain.queryEndpointsCounts(fullDid.did)
  const depositClaimExtrinsic = await DidChain.getReclaimDepositExtrinsic(fullDid.did.replace("did:kilt:", ""), endpointsCountForDid)

  // The submission will fail if `aliceKiltAccount` is not the owner of the deposit associated with the given DID identifier.
  await BlockchainUtils.signAndSubmitTx(depositClaimExtrinsic, kiltAccount, {
    resolveOn,
  })
}

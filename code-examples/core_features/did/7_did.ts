import { KeyringPair } from '@polkadot/keyring/types'

import { DidChain } from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { SubscriptionPromise, IDidIdentifier } from '@kiltprotocol/types'
import { init, disconnect } from '@kiltprotocol/core'

export async function main(
  kiltAccount: KeyringPair,
  didIdentifier: IDidIdentifier,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_IN_BLOCK
) {
  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })

  // Generate the submittable extrinsic to claim the deposit back, by including the DID identifier for which the deposit needs to be returned and the count of service endpoints to provide an upper bound to the computation of the extrinsic execution.
  const endpointsCountForDid = await DidChain.queryEndpointsCounts(didIdentifier)
  const depositClaimExtrinsic = await DidChain.getReclaimDepositExtrinsic(
    didIdentifier,
    endpointsCountForDid
  )

  // The submission will fail if `aliceKiltAccount` is not the owner of the deposit associated with the given DID identifier.
  await BlockchainUtils.signAndSubmitTx(depositClaimExtrinsic, kiltAccount, {
    reSign: true,
    resolveOn,
  })

  await disconnect()
}

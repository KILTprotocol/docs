import { KeyringPair } from '@polkadot/keyring/types'

import {
  BlockchainApiConnection,
  BlockchainUtils
} from '@kiltprotocol/chain-helpers'
import { IDidIdentifier, SubscriptionPromise } from '@kiltprotocol/types'
import { DidChain } from '@kiltprotocol/did'
import { init } from '@kiltprotocol/core'

export async function main(
  kiltAccount: KeyringPair,
  didIdentifier: IDidIdentifier,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await BlockchainApiConnection.getConnectionOrConnect()

  // Generate the submittable extrinsic to claim the deposit back, by including the DID identifier for which the deposit needs to be returned and the count of service endpoints to provide an upper bound to the computation of the extrinsic execution.
  const endpointsCountForDid = await DidChain.queryEndpointsCounts(
    didIdentifier
  )
  const depositClaimExtrinsic = await DidChain.getReclaimDepositExtrinsic(
    didIdentifier,
    endpointsCountForDid
  )

  // The submission will fail if `aliceKiltAccount` is not the owner of the deposit associated with the given DID identifier.
  await BlockchainUtils.signAndSubmitTx(depositClaimExtrinsic, kiltAccount, {
    reSign: true,
    resolveOn
  })

  await api.disconnect()
}

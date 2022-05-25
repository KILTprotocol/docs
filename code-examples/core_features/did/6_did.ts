import { KeyringPair } from '@polkadot/keyring/types'

import { DemoKeystore, DidChain, FullDidDetails } from '@kiltprotocol/did'
import { KeystoreSigner, SubscriptionPromise } from '@kiltprotocol/types'
import {
  connect as kiltConnect,
  disconnect as kiltDisconnect,
  init as kiltInit
} from '@kiltprotocol/core'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  fullDid: FullDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  await kiltConnect()

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
    kiltAccount.address
  )

  await BlockchainUtils.signAndSubmitTx(
    didSignedDeletionExtrinsic,
    kiltAccount,
    {
      resolveOn
    }
  )

  await kiltDisconnect()
}

import { KeyringPair } from '@polkadot/keyring/types'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { KeystoreSigner, SubscriptionPromise } from '@kiltprotocol/types'
import { init, disconnect } from '@kiltprotocol/core'
import { DemoKeystore, DidChain, FullDidDetails } from '@kiltprotocol/did'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator,
  fullDid: FullDidDetails
) {
  await init({ address: 'wss://peregrine.kilt.io' })

  // Create a DID deletion operation. We specify the number of endpoints currently stored under the DID because
  // of the upper computation limit required by the blockchain runtime.
  const endpointsCountForDid = await DidChain.queryEndpointsCounts(fullDid.did)
  const didDeletionExtrinsic = await DidChain.getDeleteDidExtrinsic(endpointsCountForDid)

  // Sign the DID deletion operation using the DID authentication key.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorised in this operation, Alice in this case.
  const didSignedDeletionExtrinsic = await fullDid.authorizeExtrinsic(
    didDeletionExtrinsic,
    keystore as KeystoreSigner<string>,
    kiltAccount.address
  )

  await BlockchainUtils.signAndSubmitTx(didSignedDeletionExtrinsic, kiltAccount, {
    resolveOn,
  })

  await disconnect()
}

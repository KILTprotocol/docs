import type { KeyringPair } from '@polkadot/keyring/types'

import { ApiPromise } from '@polkadot/api'

import {
  DemoKeystore,
  DidBatchBuilder,
  FullDidDetails
} from '@kiltprotocol/did'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { CType } from '@kiltprotocol/core'
import { SubscriptionPromise } from '@kiltprotocol/types'
import { UUID } from '@kiltprotocol/utils'

function getRandomCType(): CType {
  // Random factor ensures that each created CType is unique and does not already exist on chain.
  const randomFactor = UUID.generate()
  return CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: `CType ${randomFactor}`,
    properties: {
      name: {
        type: 'string'
      },
      age: {
        type: 'integer'
      }
    },
    type: 'object'
  })
}

export async function batchCTypeCreationExtrinsics(
  keystore: DemoKeystore,
  api: ApiPromise,
  submitterAccount: KeyringPair,
  fullDid: FullDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<void> {
  // Create two random demo CTypes
  const ctype1 = getRandomCType()
  const ctype1CreationTx = await ctype1.getStoreTx()
  const ctype2 = getRandomCType()
  const ctype2CreationTx = await ctype2.getStoreTx()

  // Create the DID-signed batch
  const batch = await new DidBatchBuilder(api, fullDid)
    .addMultipleExtrinsics([ctype1CreationTx, ctype2CreationTx])
    .consume(keystore, submitterAccount.address)

  // The authorized account submits the batch to the chain
  await BlockchainUtils.signAndSubmitTx(batch, submitterAccount, {
    resolveOn
  })

  if (!(await ctype1.verifyStored()) || !(await ctype2.verifyStored())) {
    throw 'One of the two CTypes has not been properly stored.'
  }
}

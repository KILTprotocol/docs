import { KeyringPair } from '@polkadot/keyring/types'

import {
  BlockchainApiConnection,
  BlockchainUtils
} from '@kiltprotocol/chain-helpers'
import {
  CType,
  disconnect as kiltDisconnect,
  init as kiltInit
} from '@kiltprotocol/core'
import {
  DemoKeystore,
  DidBatchBuilder,
  FullDidDetails,
} from '@kiltprotocol/did'
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

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  fullDidDetails: FullDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
) {
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await BlockchainApiConnection.getConnectionOrConnect()

  // Create two random demo CTypes
  const ctype1 = getRandomCType()
  const ctype1CreationTx = await ctype1.getStoreTx()
  const ctype2 = getRandomCType()
  const ctype2CreationTx = await ctype2.getStoreTx()

  // Create the DID-signed batch
  const batch = await new DidBatchBuilder(api, fullDidDetails)
    .addMultipleExtrinsics([ctype1CreationTx, ctype2CreationTx])
    .consume(keystore, kiltAccount.address)

  // The authorized user submits the batch to the chain
  await BlockchainUtils.signAndSubmitTx(batch, kiltAccount, {
    resolveOn
  })

  if (!(await ctype1.verifyStored()) || !(await ctype2.verifyStored())) {
    throw 'One of the two CTypes has not been properly stored.'
  }

  await kiltDisconnect()
}

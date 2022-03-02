import { KeyringPair } from '@polkadot/keyring/types'

import { DemoKeystore, SigningAlgorithms, FullDidCreationBuilder, DidBatchBuilder } from '@kiltprotocol/did'
import { init, disconnect, CType } from '@kiltprotocol/core'
import { SubscriptionPromise, VerificationKeyType, ICType } from '@kiltprotocol/types'
import { BlockchainUtils, BlockchainApiConnection } from '@kiltprotocol/chain-helpers'
import { UUID } from '@kiltprotocol/utils'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_IN_BLOCK
): Promise<void> {
  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await BlockchainApiConnection.getConnectionOrConnect()

  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: SigningAlgorithms.EcdsaSecp256k1,
  })

  const fullDid = await new FullDidCreationBuilder(api, {
    publicKey: authenticationKeyPublicDetails.publicKey,
    type: VerificationKeyType.Ecdsa
  }).setAttestationKey({
    publicKey: authenticationKeyPublicDetails.publicKey,
    type: VerificationKeyType.Ecdsa
  }).consumeWithHandler(keystore, kiltAccount.address, async (creationTx) => {
    await BlockchainUtils.signAndSubmitTx(creationTx, kiltAccount, {
      reSign: true,
      resolveOn
    })
  })

  // Create two random demo CTypes
  const ctype1 = getRandomCType()
  const ctype1CreationTx = await ctype1.getStoreTx()
  const ctype2 = getRandomCType()
  const ctype2CreationTx = await ctype2.getStoreTx()

  // Create the DID-signed batch
  const batch =
    await new DidBatchBuilder(api, fullDid)
      .addMultipleExtrinsics([ctype1CreationTx, ctype2CreationTx])
      .consume(keystore, kiltAccount.address)

  // The authorised used submits the batch to the chain
  await BlockchainUtils.signAndSubmitTx(batch, kiltAccount, {
    reSign: true,
    resolveOn
  })

  if (!(await ctype1.verifyStored()) || !(await ctype2.verifyStored())) {
    throw 'One of the two CTypes has not been properly stored.'
  }

  await disconnect()
}

function getRandomCType(): CType {
  // Random factor ensures that each created CType is unique and does not already exist on chain.
  const randomFactor = UUID.generate()
  return CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: `CType ${randomFactor}`,
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'integer',
      },
    },
    type: 'object',
  })
}

import { KeyringPair } from '@polkadot/keyring/types'

import {
  BlockchainApiConnection,
  BlockchainUtils
} from '@kiltprotocol/chain-helpers'
import {
  DemoKeystore,
  FullDidCreationBuilder,
  FullDidDetails,
  SigningAlgorithms
} from '@kiltprotocol/did'
import { SubscriptionPromise, VerificationKeyType } from '@kiltprotocol/types'
import {
  disconnect as kiltDisconnect,
  init as kiltInit
} from '@kiltprotocol/core'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  // Generate seed for the authentication key.
  authenticationSeed: string,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  // Initialize connection to the public KILT test network and get the api object.
  await kiltInit({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await BlockchainApiConnection.getConnectionOrConnect()

  // Ask the keystore to generate a new keypair to use for authentication.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519
  })

  // Generate the DID-signed creation extrinsic and submit it to the blockchain with the specified account.
  // The submitter account parameter, ensures that only an entity authorized by the DID subject
  // can submit the extrinsic to the KILT blockchain.
  const fullDid = await new FullDidCreationBuilder(api, {
    publicKey: authenticationKeyPublicDetails.publicKey,
    type: VerificationKeyType.Ed25519
  }).consumeWithHandler(keystore, kiltAccount.address, async (creationTx) => {
    await BlockchainUtils.signAndSubmitTx(creationTx, kiltAccount, {
      reSign: true,
      resolveOn
    })
  })

  await kiltDisconnect()
  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }
  return fullDid
}

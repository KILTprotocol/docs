import type { KeyringPair } from '@polkadot/keyring/types'

import { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createSimpleFullDid(
  keystore: Kilt.Did.DemoKeystore,
  api: ApiPromise,
  submitterAccount: KeyringPair,
  authenticationSeed: string | undefined = undefined,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils
    .IS_FINALIZED
): Promise<Kilt.Did.FullDidDetails> {
  // Ask the keystore to generate a new keypair to use for authentication.
  // If no `authenticationSeed` is provided, a random one will be generated.
  const authenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: Kilt.Did.SigningAlgorithms.Ed25519
  })

  // Generate the DID-signed creation extrinsic and submit it to the blockchain with the specified account.
  // The submitter account parameter, ensures that only an entity authorized by the DID subject
  // can submit the extrinsic to the KILT blockchain.
  const fullDid = await new Kilt.Did.FullDidCreationBuilder(api, {
    publicKey: authenticationKeyPublicDetails.publicKey,
    type: Kilt.VerificationKeyType.Ed25519
  }).consumeWithHandler(
    keystore,
    submitterAccount.address,
    async (creationTx) => {
      await Kilt.BlockchainUtils.signAndSubmitTx(creationTx, submitterAccount, {
        resolveOn
      })
    }
  )

  if (!fullDid) {
    throw 'Could not find the DID just created.'
  }
  return fullDid
}

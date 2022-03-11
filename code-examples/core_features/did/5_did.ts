import { KeyringPair } from '@polkadot/keyring/types'

import { BlockchainUtils, BlockchainApiConnection } from '@kiltprotocol/chain-helpers'
import {
  DemoKeystore,
  SigningAlgorithms,
  FullDidDetails,
  FullDidUpdateBuilder
} from '@kiltprotocol/did'
import {
  SubscriptionPromise,
  VerificationKeyType
} from '@kiltprotocol/types'
import { init, disconnect } from '@kiltprotocol/core'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  authenticationSeed: string,
  fullDid: FullDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })
  const { api } = await BlockchainApiConnection.getConnectionOrConnect()

  // Ask the keystore to generate a new keypair to use for authentication.
  const newAuthenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519,
  })

  // Create and sign the DID operation to replace the authentication key with the new one generated.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorised in this operation, Alice in this case.
  const didUpdateExtrinsic = await new FullDidUpdateBuilder(api, fullDid).setAuthenticationKey({
    publicKey: newAuthenticationKeyPublicDetails.publicKey,
    type: VerificationKeyType.Ed25519
  }).removeServiceEndpoint('my-service').consume(keystore, kiltAccount.address)

  // Submit the DID update tx to the KILT blockchain after signing it with the authorised KILT account.
  await BlockchainUtils.signAndSubmitTx(didUpdateExtrinsic, kiltAccount, {
    reSign: true,
    resolveOn,
  })

  // Get the updated DID Doc
  const updatedDidDetails = await FullDidDetails.fromChainInfo(fullDid.identifier)
  await disconnect()

  if (!updatedDidDetails) {
    throw `Could not find the updated DID ${fullDid.did}`
  }
  return updatedDidDetails
}

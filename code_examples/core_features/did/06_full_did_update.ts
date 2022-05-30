import type { KeyringPair } from '@polkadot/keyring/types'

import { ApiPromise } from '@polkadot/api'

import {
  DemoKeystore,
  FullDidDetails,
  FullDidUpdateBuilder,
  SigningAlgorithms
} from '@kiltprotocol/did'
import { SubscriptionPromise, VerificationKeyType } from '@kiltprotocol/types'
import { BlockchainUtils } from '@kiltprotocol/chain-helpers'

export async function updateFullDid(
  keystore: DemoKeystore,
  api: ApiPromise,
  submitterAccount: KeyringPair,
  fullDid: FullDidDetails,
  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED
): Promise<FullDidDetails> {
  // Ask the keystore to generate a new keypair to use for authentication.
  // With no seed specified, a random one will be used.
  const newAuthenticationKeyPublicDetails = await keystore.generateKeypair({
    alg: SigningAlgorithms.Ed25519
  })

  // Create and sign the DID operation to replace the authentication key with the new one generated.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const didUpdateExtrinsic = await new FullDidUpdateBuilder(api, fullDid)
    .setAuthenticationKey({
      publicKey: newAuthenticationKeyPublicDetails.publicKey,
      type: VerificationKeyType.Ed25519
    })
    .removeServiceEndpoint('my-service')
    .consume(keystore, submitterAccount.address)

  // Submit the DID update tx to the KILT blockchain after signing it with the authorized KILT account.
  await BlockchainUtils.signAndSubmitTx(didUpdateExtrinsic, submitterAccount, {
    resolveOn
  })

  // Get the updated DID Doc
  const updatedDidDetails = await FullDidDetails.fromChainInfo(
    fullDid.identifier
  )

  if (!updatedDidDetails) {
    throw `Could not find the updated DID ${fullDid.did}`
  }
  return updatedDidDetails
}

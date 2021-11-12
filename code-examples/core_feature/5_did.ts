import { KeyringPair } from '@polkadot/keyring/types'

import { BlockchainUtils } from '@kiltprotocol/chain-helpers'
import { DefaultResolver, DemoKeystore, DidChain, SigningAlgorithms, FullDidDetails } from '@kiltprotocol/did'
import { KeyRelationship, KeystoreSigner, SubscriptionPromise } from '@kiltprotocol/types'
import { init as kiltInit } from '@kiltprotocol/core'

export async function main(
  keystore: DemoKeystore,
  kiltAccount: KeyringPair,
  resolveOn: SubscriptionPromise.ResultEvaluator,
  authenticationSeed: string,
  fullDid: FullDidDetails
) {
  await kiltInit({ address: 'wss://peregrine.kilt.io' })

  // Ask the keystore to generate a new keypair to use for authentication.
  const newAuthenticationKeyPublicDetails = await keystore.generateKeypair({
    seed: authenticationSeed,
    alg: SigningAlgorithms.Ed25519,
  })

  // Create a DID operation to replace the authentication key with the new one generated.
  const didUpdateExtrinsic = await DidChain.getSetKeyExtrinsic(KeyRelationship.authentication, {
    publicKey: newAuthenticationKeyPublicDetails.publicKey,
    type: DemoKeystore.getKeypairTypeForAlg(newAuthenticationKeyPublicDetails.alg),
  })

  // Sign the DID operation using the old DID authentication key.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorised in this operation, Alice in this case.
  const didSignedUpdateExtrinsic = await fullDid.authorizeExtrinsic(
    didUpdateExtrinsic,
    keystore as KeystoreSigner<string>,
    kiltAccount.address
  )

  // Submit the DID update tx to the KILT blockchain after signing it with the authorised KILT account.
  await BlockchainUtils.signAndSubmitTx(didSignedUpdateExtrinsic, kiltAccount, {
    resolveOn,
  })

  // Get the updated DID Doc
  const updatedDidDetails = (await (await DefaultResolver.resolveDoc(fullDid.did))?.details) as FullDidDetails
  if (updatedDidDetails === undefined) {
    throw 'We just created the did'
  }

  // Remove the service endpoint with id `my-service` added upon creation in the previous section.
  const didRemoveExtrinsic = await DidChain.getRemoveEndpointExtrinsic('my-service')

  // Sign the DID operation using the new authentication key.
  const didSignedRemoveExtrinsic = await updatedDidDetails.authorizeExtrinsic(
    didRemoveExtrinsic,
    keystore as KeystoreSigner<string>,
    kiltAccount.address
  )

  // Submit the signed operation as before.
  await BlockchainUtils.signAndSubmitTx(didSignedRemoveExtrinsic, kiltAccount, {
    resolveOn,
  })
}

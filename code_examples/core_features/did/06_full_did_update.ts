import type { Keyring } from '@polkadot/api'

import { randomAsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function updateFullDid(
  keyring: Keyring,
  fullDid: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<Kilt.DidDocument> {
  // Ask the keyring to generate a new keypair to use for authentication.
  const newAuthKey = keyring.addFromSeed(
    randomAsU8a(32)
  ) as Kilt.KiltKeyringPair

  // Create and sign the DID operation to replace the authentication key with the new one generated.
  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account
  // authorized in this operation, Alice in this case.
  const didUpdateTx = await Kilt.Did.Chain.getSetKeyExtrinsic(
    'authentication',
    newAuthKey
  )
  const authorisedDidUpdateTx = await Kilt.Did.authorizeExtrinsic(
    fullDid,
    didUpdateTx,
    signCallback,
    submitterAccount.address
  )

  // Submit the DID update tx to the KILT blockchain after signing it with the authorized KILT account.
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedDidUpdateTx,
    submitterAccount,
    {
      resolveOn
    }
  )

  // Get the updated DID Document
  const updatedDidDetails = await Kilt.Did.query(fullDid.uri)

  if (!updatedDidDetails) {
    throw `Could not find the updated DID ${fullDid.uri}`
  }

  return updatedDidDetails
}

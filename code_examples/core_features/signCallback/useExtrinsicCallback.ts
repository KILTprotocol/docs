/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'
import { Extrinsic } from '@polkadot/types/interfaces'


export async function useSignExtrinsicCallback(
  didUri: Kilt.DidUri,
  didSigningKey: Kilt.KeyringPair & { type: "sr25519" | "ed25519" },
  extrinsic: Extrinsic,
  submitterAddress: Kilt.KiltKeyringPair['address']
) {

  // The SignExtrinsicCallback is a more specialized SignCallback since it doesn't
  // need to return the keyUri.
  const signCallback: Kilt.SignExtrinsicCallback = async ({
    data,
    // The key relationship specifies which DID key must be used.
    keyRelationship,
    // The DID URI specifies which DID must be used. We already know which DID
    // this will be since we will use this callback just a few lines later (did === didUri).
    did
  }) => ({
    signature: didSigningKey.sign(data),
    keyType: didSigningKey.type,
  })

  return await Kilt.Did.authorizeTx(
    didUri,
    extrinsic,
    signCallback,
    submitterAddress
  )
}

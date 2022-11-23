/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'
import { Extrinsic } from '@polkadot/types/interfaces'

export async function useSignCallback(
  didUri: Kilt.DidUri,
  keyUri: Kilt.DidResourceUri,
  didSigningKey: Kilt.KeyringPair & { type: 'sr25519' | 'ed25519' },
  extrinsic: Extrinsic,
  submitterAddress: Kilt.KiltKeyringPair['address']
) {
  const signCallback: Kilt.SignCallback = async ({
    data,
    // The key relationship specifies which DID key must be used.
    keyRelationship,
    // The DID URI specifies which DID must be used. We already know which DID
    // this will be since we will use this callback just a few lines later (did === didUri).
    did
  }) => ({
    signature: didSigningKey.sign(data),
    keyType: didSigningKey.type,
    keyUri
  })

  return await Kilt.Did.authorizeTx(
    didUri,
    extrinsic,
    signCallback,
    submitterAddress
  )
}

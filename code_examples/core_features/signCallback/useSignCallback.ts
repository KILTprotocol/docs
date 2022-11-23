/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'
import { Extrinsic } from '@polkadot/types/interfaces'

export function useSignCallback(
  keyUri: Kilt.DidResourceUri,
  didSigningKey: Kilt.KeyringPair & { type: 'sr25519' | 'ed25519' }
): Kilt.SignCallback {
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

  return signCallback
}

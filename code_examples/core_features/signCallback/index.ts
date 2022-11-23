import * as Kilt from '@kiltprotocol/sdk-js'
import {
  DidDocument,
  DidResourceUri,
  DidUri,
  KiltKeyringPair
} from '@kiltprotocol/sdk-js'
import { useSignCallback } from './useSignCallback'
import { useSignExtrinsicCallback } from './useExtrinsicCallback'
import { useStoreTxSignCallback } from './useStoreTxSignCallback'

// The _keyUri parameter is there to show that the DID key pair is looked up using the URI
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function lookupDidKeyPair(_keyUri: DidResourceUri): KiltKeyringPair {
  return Kilt.Utils.Crypto.makeKeypairFromSeed()
}

export function generateDidKeyPair(): KiltKeyringPair {
  return Kilt.Utils.Crypto.makeKeypairFromSeed()
}

// The _did parameter is there to show that the DID document is looked up using the DID
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function lookupDidDocument(_did: DidUri): DidDocument {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromSeed()
  const lightDID = Kilt.Did.createLightDidDocument({
    authentication: [authentication]
  })

  return lightDID
}

export async function runAll(): Promise<void> {
  console.log('Test signCallback')
  const didKey = Kilt.Utils.Crypto.makeKeypairFromSeed()

  await useSignCallback(
    'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g',
    'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g#key-one',
    didKey,
    // We don't use the extrinsic anyways!
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]) as any,
    '4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  )

  console.log('Test signExtrinsicCallback')
  await useSignExtrinsicCallback(
    'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g',
    didKey,
    // We don't use the extrinsic anyways!
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]) as any,
    '4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  )

  console.log('Test getStoreTxSignCallback')
  await useStoreTxSignCallback("4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g")
}

import * as Kilt from '@kiltprotocol/sdk-js'
import {
  DidDocument,
  DidResourceUri,
  DidUri,
  KiltKeyringPair
} from '@kiltprotocol/sdk-js'
import { ApiPromise } from '@polkadot/api'
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

export async function runAll(api: ApiPromise): Promise<void> {
  console.log('Test signCallback')
  const didKey = Kilt.Utils.Crypto.makeKeypairFromSeed()

  ;(
    await useSignCallback(
      'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g#key-one',
      didKey
    )
  )({
    data: new Uint8Array([0, 1, 2, 3, 4]),
    keyRelationship: 'authentication',
    did: 'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  })

  console.log('Test signExtrinsicCallback')
  await useSignExtrinsicCallback(
    'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g',
    didKey,
    api.tx.didLookup.associateSender(),
    '4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  )

  console.log('Test getStoreTxSignCallback')
  await useStoreTxSignCallback(
    '4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  )
}

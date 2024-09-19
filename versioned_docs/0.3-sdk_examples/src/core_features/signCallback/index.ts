import * as Kilt from '@kiltprotocol/sdk-js'

import { useSignCallback } from './useSignCallback'
import { useSignExtrinsicCallback } from './useExtrinsicCallback'
import { useStoreTxSignCallback } from './useStoreTxSignCallback'

// The _keyUri parameter is there to show that the DID key pair is looked up using the URI
export function lookupDidKeyPair(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _keyUri: Kilt.DidResourceUri
): Kilt.KiltKeyringPair {
  return Kilt.Utils.Crypto.makeKeypairFromSeed()
}

export function generateDidKeyPair(): Kilt.KiltKeyringPair {
  return Kilt.Utils.Crypto.makeKeypairFromSeed()
}

// The _did parameter is there to show that the DID document is looked up using the DID
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function lookupDidDocument(_did: Kilt.DidUri): Kilt.DidDocument {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromSeed()
  const lightDID = Kilt.Did.createLightDidDocument({
    authentication: [authentication]
  })

  return lightDID
}

export async function runAll(): Promise<void> {
  const api = Kilt.ConfigService.get('api')

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

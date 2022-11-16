import * as Kilt from '@kiltprotocol/sdk-js'
import {
  DidDocument,
  DidResourceUri,
  DidUri,
  KiltKeyringPair
} from '@kiltprotocol/sdk-js'
import { getStoreTxSignCallback } from './getStoreTxSignCallback'
import { signCallback } from './signCallback'
import { signExtrinsicCallback } from './signExtrinsicCallback'

export function lookupDidKeyPair(keyUri: DidResourceUri): KiltKeyringPair {
  return Kilt.Utils.Crypto.makeKeypairFromSeed()
}

export function generateDidKeyPair(): KiltKeyringPair {
  return Kilt.Utils.Crypto.makeKeypairFromSeed()
}

export function lookupDidDocument(did: DidUri): DidDocument {
  const authentication = Kilt.Utils.Crypto.makeKeypairFromSeed()
  const lightDID = Kilt.Did.createLightDidDocument({
    authentication: [authentication]
  })

  return lightDID
}

export async function runAll(): Promise<void> {
  console.log('Test signCallback')
  await signCallback({
    data: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]),
    keyRelationship: 'authentication',
    did: 'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  })

  console.log('Test signExtrinsicCallback')
  await signExtrinsicCallback({
    data: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]),
    keyRelationship: 'authentication',
    did: 'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  })

  console.log('Test getStoreTxSignCallback')
  await getStoreTxSignCallback({
    data: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]),
    keyRelationship: 'authentication'
  })
}

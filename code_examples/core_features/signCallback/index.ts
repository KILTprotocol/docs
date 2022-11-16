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

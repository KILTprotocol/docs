import type { Keyring } from '@polkadot/api'

import {
  blake2AsHex,
  blake2AsU8a,
  naclBoxPairFromSecret
} from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

let attesterDid: TestDidDocument | undefined
let claimerDid: TestDidDocument | undefined

// Add the secret encryption key as a property to the elements of the keyAgreement set. Just for testing.
export type TestDidDocument = Omit<Kilt.DidDocument, 'keyAgreement'> & {
  keyAgreement: Array<Kilt.DidEncryptionKey & { secretKey: Uint8Array }>
}

export async function generateAttesterDid(
  keyring: Keyring
): Promise<TestDidDocument> {
  const authSeed = blake2AsU8a('attester-auth')
  const encSeed = blake2AsU8a('attester-enc')
  const authKey = keyring.addFromSeed(authSeed) as Kilt.KiltKeyringPair
  const { publicKey: encPk, secretKey: encSk } = naclBoxPairFromSecret(encSeed)

  const details: TestDidDocument = {
    authentication: [
      {
        ...authKey,
        id: `#${blake2AsHex(authKey.publicKey)}`
      }
    ],
    keyAgreement: [
      {
        publicKey: encPk,
        type: 'x25519',
        id: `#${blake2AsHex(encPk)}`,
        secretKey: encSk
      }
    ],
    uri: Kilt.Did.Utils.getFullDidUriFromKey(authKey)
  }

  attesterDid = details

  return details
}

export async function generateClaimerDid(
  keyring: Keyring
): Promise<TestDidDocument> {
  const authSeed = blake2AsU8a('claimer-auth')
  const encSeed = blake2AsU8a('claimer-enc')
  const authKey = keyring.addFromSeed(authSeed) as Kilt.KiltKeyringPair
  const { publicKey: encPk, secretKey: encSk } = naclBoxPairFromSecret(encSeed)

  const details: TestDidDocument = {
    authentication: [
      {
        ...authKey,
        id: `#${blake2AsHex(authKey.publicKey)}`
      }
    ],
    keyAgreement: [
      {
        publicKey: encPk,
        type: 'x25519',
        id: `#${blake2AsHex(encPk)}`,
        secretKey: encSk
      }
    ],
    uri: Kilt.Did.Utils.getFullDidUriFromKey(authKey)
  }

  claimerDid = details

  return details
}

const resolve = async (
  didUri: Kilt.DidUri
): Promise<Kilt.DidResolutionResult | null> => {
  const { did: uriWithNoFragment } = Kilt.Did.Utils.parseDidUri(didUri)
  if (uriWithNoFragment === claimerDid?.uri) {
    return {
      metadata: { deactivated: false },
      document: claimerDid
    }
  } else if (uriWithNoFragment === attesterDid?.uri) {
    return {
      metadata: { deactivated: false },
      document: attesterDid
    }
  } else {
    return null
  }
}

export const resolveKey: Kilt.DidResolveKey = async (
  keyUri: Kilt.DidResourceUri
) => {
  const { did, fragment: keyId } = Kilt.Did.Utils.parseDidUri(keyUri)
  if (!keyId) {
    throw 'keyId must be present when resolving a key'
  }

  const resolved = await resolve(keyUri)
  if (!resolved) {
    return null
  }

  const { document } = resolved
  if (!document) {
    return null
  }

  const key = Kilt.Did.getKey(document, keyId)
  if (!key) {
    return null
  }

  return {
    controller: did,
    id: `${did}${keyId}`,
    publicKey: key.publicKey,
    type: key.type
  }
}

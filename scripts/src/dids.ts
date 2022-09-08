import type { Keyring } from '@polkadot/api'

import { blake2AsHex, naclBoxPairFromSecret } from '@polkadot/util-crypto'
import { hexToU8a } from '@polkadot/util'

import * as Kilt from '@kiltprotocol/sdk-js'

let attesterDid: TestDidDetails | undefined
let claimerDid: TestDidDetails | undefined

// Add the secret encryption key as a property to the elements of the keyAgreement set. Just for testing.
export type TestDidDetails = Omit<Kilt.DidDetails, 'keyAgreement'> & {
  keyAgreement: Array<Kilt.DidEncryptionKey & { secretKey: Uint8Array }>
}

export async function generateAttesterDid(
  keyring: Keyring
): Promise<TestDidDetails> {
  const authSeed = Kilt.Utils.Crypto.hashStr('attester-auth')
  const encSeed = Kilt.Utils.Crypto.hashStr('attester-enc')
  const { publicKey: authPk } = keyring.addFromSeed(hexToU8a(authSeed), {}, 'sr25519')
  const { publicKey: encPk, secretKey: encSk } = naclBoxPairFromSecret(hexToU8a(encSeed))

  const details: TestDidDetails = {
    authentication: [
      {
        publicKey: authPk,
        type: 'sr25519',
        id: `#${blake2AsHex(authPk)}`
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
    uri: Kilt.Did.Utils.getFullDidUriFromKey({
      publicKey: authPk,
      type: 'sr25519'
    })
  }

  attesterDid = details

  return details
}

export async function generateClaimerDid(
  keyring: Keyring
): Promise<TestDidDetails> {
  const authSeed = Kilt.Utils.Crypto.hashStr('claimer-auth')
  const encSeed = Kilt.Utils.Crypto.hashStr('claimer-enc')
  const { publicKey: authPk } = keyring.addFromSeed(hexToU8a(authSeed), {}, 'sr25519')
  const { publicKey: encPk, secretKey: encSk } = naclBoxPairFromSecret(hexToU8a(encSeed))

  const details: TestDidDetails = {
    authentication: [
      {
        publicKey: authPk,
        type: 'sr25519',
        id: `#${blake2AsHex(authPk)}`
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
    uri: Kilt.Did.Utils.getFullDidUriFromKey({
      publicKey: authPk,
      type: 'sr25519'
    })
  }

  claimerDid = details

  return details
}

const resolve = async (
  didUri: Kilt.DidUri
): Promise<Kilt.DidResolvedDetails | null> => {
  const { did: uriWithNoFragment } = Kilt.Did.Utils.parseDidUri(didUri)
  if (uriWithNoFragment === claimerDid?.uri) {
    return {
      metadata: { deactivated: false },
      details: claimerDid
    }
  } else if (uriWithNoFragment === attesterDid?.uri) {
    return {
      metadata: { deactivated: false },
      details: attesterDid
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

  const { details } = resolved
  if (!details) {
    return null
  }

  const key = Kilt.Did.getKey(details, keyId)
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

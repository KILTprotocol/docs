import { encodeAddress } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

let attesterDid: Kilt.Did.FullDidDetails | undefined
let claimerDid: Kilt.Did.FullDidDetails | undefined

export async function generateAttesterDid(
  keystore: Kilt.Did.DemoKeystore
): Promise<Kilt.Did.FullDidDetails> {
  const kiltAttesterAuthKey: Kilt.DidVerificationKey = await keystore
    .generateKeypair({
      alg: Kilt.Did.SigningAlgorithms.Sr25519,
      seed: Kilt.Utils.Crypto.hashStr('attester-auth')
    })
    .then((k) => {
      return {
        publicKey: k.publicKey,
        type: Kilt.VerificationKeyType.Sr25519,
        id: Kilt.Utils.Crypto.hashStr(k.publicKey)
      }
    })
  const kiltAttesterEncKey: Kilt.DidEncryptionKey = await keystore
    .generateKeypair({
      alg: Kilt.Did.EncryptionAlgorithms.NaclBox,
      seed: Kilt.Utils.Crypto.hashStr('attester-enc')
    })
    .then((k) => {
      return {
        publicKey: k.publicKey,
        type: Kilt.EncryptionKeyType.X25519,
        id: Kilt.Utils.Crypto.hashStr(k.publicKey)
      }
    })
  const kiltAttesterIdentifier: Kilt.IIdentity['address'] = encodeAddress(
    kiltAttesterAuthKey.publicKey,
    38
  )
  attesterDid = new Kilt.Did.FullDidDetails({
    identifier: kiltAttesterIdentifier,
    keys: {
      [kiltAttesterAuthKey.id]: kiltAttesterAuthKey,
      [kiltAttesterEncKey.id]: kiltAttesterEncKey
    },
    keyRelationships: {
      authentication: new Set([kiltAttesterAuthKey.id]),
      keyAgreement: new Set([kiltAttesterEncKey.id])
    },
    uri: Kilt.Did.Utils.getKiltDidFromIdentifier(kiltAttesterIdentifier, 'full')
  })

  return attesterDid
}

export async function generateClaimerDid(
  keystore: Kilt.Did.DemoKeystore
): Promise<Kilt.Did.FullDidDetails> {
  const kiltClaimerAuthKey: Kilt.DidVerificationKey = await keystore
    .generateKeypair({
      alg: Kilt.Did.SigningAlgorithms.Sr25519,
      seed: Kilt.Utils.Crypto.hashStr('claimer-auth')
    })
    .then((k) => {
      return {
        publicKey: k.publicKey,
        type: Kilt.VerificationKeyType.Sr25519,
        id: Kilt.Utils.Crypto.hashStr(k.publicKey)
      }
    })
  const kiltClaimerEncKey: Kilt.DidEncryptionKey = await keystore
    .generateKeypair({
      alg: Kilt.Did.EncryptionAlgorithms.NaclBox,
      seed: Kilt.Utils.Crypto.hashStr('claimer-enc')
    })
    .then((k) => {
      return {
        publicKey: k.publicKey,
        type: Kilt.EncryptionKeyType.X25519,
        id: Kilt.Utils.Crypto.hashStr(k.publicKey)
      }
    })
  const kiltClaimerIdentifier: Kilt.IIdentity['address'] = encodeAddress(
    kiltClaimerAuthKey.publicKey,
    38
  )
  claimerDid = new Kilt.Did.FullDidDetails({
    identifier: kiltClaimerIdentifier,
    keys: {
      [kiltClaimerAuthKey.id]: kiltClaimerAuthKey,
      [kiltClaimerEncKey.id]: kiltClaimerEncKey
    },
    keyRelationships: {
      authentication: new Set([kiltClaimerAuthKey.id]),
      keyAgreement: new Set([kiltClaimerEncKey.id])
    },
    uri: Kilt.Did.Utils.getKiltDidFromIdentifier(kiltClaimerIdentifier, 'full')
  })

  return claimerDid
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

// TODO: This could be improved, not sure if it's worth it.
export const resolver: Kilt.IDidResolver = {
  resolve,
  resolveDoc: resolve,
  resolveKey: async (didUri: Kilt.DidPublicKey['uri']) => {
    const { did, fragment } = Kilt.Did.Utils.parseDidUri(didUri)
    const doc = await resolve(didUri)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const key = doc!.details!.getKey(fragment!)
    if (!key) return null
    return {
      controller: did,
      uri: didUri,
      publicKey: key.publicKey,
      type: key.type
    }
  },
  resolveServiceEndpoint: async () => null
}

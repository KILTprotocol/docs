import type { Keyring } from '@polkadot/api'

import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function signCallbackForKeyringAndDid(
  keyring: Keyring,
  did: Kilt.DidDocument
): Kilt.SignCallback {
  return async ({ data, keyRelationship }) => {
    const { publicKey, type, id } = did[keyRelationship][0]
    const address = encodeAddress(
      type === 'ecdsa' ? blake2AsU8a(publicKey) : publicKey,
      Kilt.Utils.ss58Format
    )
    const key = keyring.getPair(address)

    return { data: key.sign(data), keyType: type, keyUri: `${did.uri}${id}` }
  }
}

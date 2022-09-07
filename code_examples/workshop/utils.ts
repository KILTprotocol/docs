import type { Keyring } from '@polkadot/api'

import { blake2AsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

export function signCallbackForKeyring(keyring: Keyring): Kilt.SignCallback {
  return async ({ data, alg, publicKey }) => {
    const address = alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey
    const key = keyring.getPair(address)

    return { data: key.sign(data), alg }
  }
}

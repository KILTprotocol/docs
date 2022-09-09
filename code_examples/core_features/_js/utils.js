import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import * as Kilt from '@kiltprotocol/sdk-js'
export function signCallbackForKeyring(keyring) {
  return async ({ data, alg, publicKey }) => {
    const address = encodeAddress(
      alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey,
      Kilt.Utils.ss58Format
    )
    const key = keyring.getPair(address)
    return { data: key.sign(data), alg }
  }
}

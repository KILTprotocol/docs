import * as Kilt from '@kiltprotocol/sdk-js'
import { naclOpen } from '@polkadot/util-crypto'

export function useDecryptionSignCallback(
  keyAgreement: Kilt.KiltEncryptionKeypair
): Kilt.DecryptCallback {
  return async function decryptCallback({
    data,
    nonce,
    peerPublicKey
  }): Promise<Kilt.DecryptResponseData> {
    const decrypted = naclOpen(
      data,
      nonce,
      peerPublicKey,
      keyAgreement.secretKey
    )

    if (!decrypted) {
      throw new Error('Failed to decrypt with given key')
    }

    return {
      data: decrypted
    }
  }
}

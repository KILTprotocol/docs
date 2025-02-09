import * as Kilt from '@kiltprotocol/sdk-js'

export function useDecryptionCallback(
  keyAgreement: Kilt.KiltEncryptionKeypair
): Kilt.DecryptCallback {
  return async function decryptCallback({
    data,
    nonce,
    peerPublicKey
  }): Promise<Kilt.DecryptResponseData> {
    const decrypted = Kilt.Utils.Crypto.decryptAsymmetric(
      { box: data, nonce },
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

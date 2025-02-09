import * as Kilt from '@kiltprotocol/sdk-js'

export function useEncryptionCallback({
  keyAgreement,
  keyAgreementUri
}: {
  keyAgreement: Kilt.KiltEncryptionKeypair
  keyAgreementUri: Kilt.DidResourceUri
}): Kilt.EncryptCallback {
  return async function encryptCallback({
    data,
    peerPublicKey
  }): Promise<Kilt.EncryptResponseData> {
    const { box, nonce } = Kilt.Utils.Crypto.encryptAsymmetric(
      data,
      peerPublicKey,
      keyAgreement.secretKey
    )
    return {
      nonce,
      data: box,
      keyUri: keyAgreementUri
    }
  }
}

import * as Kilt from '@kiltprotocol/sdk-js'
import { naclSeal } from '@polkadot/util-crypto'

export function useEncryptionSignCallback({
  keyAgreement,
  didDocument
}: {
  keyAgreement: Kilt.KiltEncryptionKeypair
  didDocument: Kilt.DidDocument
}): Kilt.EncryptCallback {
  return async function encryptCallback({
    data,
    peerPublicKey
  }): Promise<Kilt.EncryptResponseData> {
    const keyId = didDocument.keyAgreement?.[0].id
    if (!keyId) {
      throw new Error(`Encryption key not found in did "${didDocument.uri}"`)
    }
    const { sealed, nonce } = naclSeal(
      data,
      keyAgreement.secretKey,
      peerPublicKey
    )
    return {
      nonce,
      data: sealed,
      keyUri: `${didDocument.uri}${keyId}`
    }
  }
}

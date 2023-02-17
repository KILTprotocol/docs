import * as Kilt from '@kiltprotocol/sdk-js'
import { naclSeal } from '@polkadot/util-crypto'
import { u8aToHex } from '@polkadot/util'

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
    const { sealed, nonce } = naclSeal(
      data,
      peerPublicKey,
      keyAgreement.secretKey
    )
    return {
      nonce,
      data: sealed,
      keyUri: keyAgreementUri
    }
  }
}

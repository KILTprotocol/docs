/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'

let encryptionKeyUri: Kilt.DidResourceUri
let emailCtype: Kilt.ICType['hash']
let requestChallenge: string

export async function main() {
  const did = 'did:kilt:4smcAoiTiCLaNrGhrAM4wZvt5cMKEGm8f3Cu9aFrpsh5EiNV'
  const { did: receiverDid } = Kilt.Did.Utils.parseDidUri(encryptionKeyUri)

  const message = Kilt.Message.fromBody(
    {
      content: {
        cTypes: [{ cTypeHash: emailCtype }],
        challenge: requestChallenge
      },
      type: 'request-credential'
    },
    did,
    receiverDid
  )
}

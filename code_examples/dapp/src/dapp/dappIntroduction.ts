/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let window: {
  kilt: {
    sporran: {
      startSession: (
        dAppName: string,
        dAppEncryptionKeyUri: Kilt.DidResourceUri,
        challenge: string
      ) => Promise<void>
    }
  }
}

export async function main() {
  const api = Kilt.ConfigService.get('api')

  const did = 'did:kilt:4smcAoiTiCLaNrGhrAM4wZvt5cMKEGm8f3Cu9aFrpsh5EiNV'
  const dAppName = 'Your dApp Name'

  const encodedFullDid = await api.call.did.query(Kilt.Did.toChain(did))
  const { document } = Kilt.Did.linkedInfoFromChain(encodedFullDid)
  // If there is no DID, or the DID does not have any key agreement key, return
  if (!document.keyAgreement || !document.keyAgreement[0]) {
    return
  }
  const dAppEncryptionKeyUri =
    `${document.uri}${document.keyAgreement[0].id}` as Kilt.DidResourceUri

  // Generate and store challenge on the server side for the next step
  const response = await fetch('/challenge')
  const challenge = await response.text()

  const session = await window.kilt.sporran.startSession(
    dAppName,
    dAppEncryptionKeyUri,
    challenge
  )
}

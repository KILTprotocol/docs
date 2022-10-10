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
  const did = 'did:kilt:4smcAoiTiCLaNrGhrAM4wZvt5cMKEGm8f3Cu9aFrpsh5EiNV'
  const dAppName = 'Your dApp Name'

  const fullDid = await Kilt.Did.fetch(did)
  // If there is no DID, or the DID does not have any key agreement key, return
  if (!fullDid || !fullDid.keyAgreement || !fullDid.keyAgreement[0]) {
    return
  }
  const dAppEncryptionKeyUri =
    `${fullDid?.uri}${fullDid.keyAgreement[0].id}` as Kilt.DidResourceUri

  // Generate and store challenge on the server side for the next step
  const response = await fetch('/challenge')
  const challenge = await response.text()

  const session = await window.kilt.sporran.startSession(
    dAppName,
    dAppEncryptionKeyUri,
    challenge
  )
}

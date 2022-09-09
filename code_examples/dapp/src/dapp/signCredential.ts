/* eslint-disable @typescript-eslint/no-unused-vars */
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

let claim: Kilt.IClaim
let did: Kilt.DidUri
let keyring: Keyring

export async function main() {
  const credential = Kilt.Credential.fromClaim(claim)

  const fullDid = await Kilt.Did.query(did)
  if (!fullDid) {
    return
  }
  const attestationKey = fullDid.assertionMethod?.[0]
  if (!attestationKey) {
    return
  }

  // Create a callback that uses the DID attestation key to sign the credential
  const signCallback: Kilt.SignCallback = async ({ alg, data }) => {
    const signature = await keyring.getPair(attestationKey.publicKey).sign(data)
    return {
      alg,
      data: signature
    }
  }

  const { signature, keyUri } = await Kilt.Did.signPayload(
    fullDid,
    Kilt.Utils.Crypto.coToUInt8(credential.rootHash),
    signCallback,
    attestationKey.id
  )

  const selfSignedCredential = await Kilt.Credential.addSignature(
    credential,
    signature,
    keyUri
  )
}

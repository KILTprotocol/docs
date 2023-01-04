/* eslint-disable @typescript-eslint/no-unused-vars */
import { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'
import { Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

let claim: Kilt.IClaim
let did: Kilt.DidDocument
let keyring: Keyring

export async function main() {
  const credential = Kilt.Credential.fromClaim(claim)

  const attestationKey = did.assertionMethod?.[0]
  if (!attestationKey) {
    throw "An attestation key is required in order to submit attestations."
  }

  // Create a callback that uses the DID attestation key to sign the credential.
  const signCallback: Kilt.SignCallback = async ({ data }) => {
    const { publicKey, type } = attestationKey
    const address = encodeAddress(
      type === 'ecdsa' ? blake2AsU8a(publicKey) : publicKey,
      Kilt.Utils.ss58Format
    )
    const keypair = keyring.getPair(address) as Kilt.KiltKeyringPair
    return {
      signature: keypair.sign(data),
      keyType: keypair.type,
      keyUri: `${did.uri}${attestationKey.id}`
    }
  }

  return await Kilt.Credential.createPresentation({
    credential,
    signCallback
  })
}

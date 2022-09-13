import * as Kilt from '@kiltprotocol/sdk-js'
let claim
let did
let keyring
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
  const signCallback = async ({ alg, data }) => {
    const signature = keyring.getPair(attestationKey.publicKey).sign(data)
    return {
      alg,
      data: signature
    }
  }
  const selfSignedPresentation = await Kilt.Credential.createPresentation({
    credential,
    signCallback,
    claimerDid: fullDid
  })
}

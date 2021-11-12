import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  claimerLightDid: Kilt.Did.LightDidDetails,
  claim: Kilt.Claim,
  keystore: Kilt.Did.DemoKeystore
): Promise<Kilt.RequestForAttestation> {
  const requestForAttestation = Kilt.RequestForAttestation.fromClaim(claim)

  await requestForAttestation.signWithDid(keystore, claimerLightDid)

  // log this so you can paste it locally
  console.log(
    'requestForAttestationJSONString:\n',
    JSON.stringify(requestForAttestation)
  )

  return requestForAttestation
}

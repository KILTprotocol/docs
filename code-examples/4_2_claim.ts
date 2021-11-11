import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  claimer: Kilt.KeyringPair,
  claimerLightDid: Kilt.LightDidDetails,
  claim: Kilt.Claim
): Kilt.RequestForAttestation {
  const requestForAttestation = Kilt.RequestForAttestation.fromClaimAndIdentity(
    claim,
    claimer
  )

  await requestForAttestation.signWithDid(claimerLightDid)

  // log this so you can paste it locally
  console.log(
    'requestForAttestationJSONString:\n',
    JSON.stringify(requestForAttestation)
  )

  return requestForAttestation
}

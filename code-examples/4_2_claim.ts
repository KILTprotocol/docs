import * as Kilt from '@kiltprotocol/sdk-js'

export function main(
  claimer: Kilt.Identity,
  claim: Kilt.Claim
): Kilt.RequestForAttestation {
  const requestForAttestation = Kilt.RequestForAttestation.fromClaimAndIdentity(
    claim,
    claimer
  )

  // log this so you can paste it locally
  console.log(
    'requestForAttestationJSONString:\n',
    JSON.stringify(requestForAttestation)
  )

  return requestForAttestation
}

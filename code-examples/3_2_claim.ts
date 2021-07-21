import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  address: string,
  claimer: Kilt.Identity,
  claim: Kilt.Claim
): Promise<Kilt.RequestForAttestation> {
  await Kilt.init({ address })
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

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(request) {

  const attestation = await Kilt.Attestation.query(request.rootHash)

  return attestation
}

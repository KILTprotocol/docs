const Kilt = require('@kiltprotocol/sdk-js')

async function createRequestForAttestation(claimerLightDid, claim, keystore) {
  const requestForAttestation = Kilt.RequestForAttestation.fromClaim(claim)

  await requestForAttestation.signWithDid(keystore, claimerLightDid)

  // log this so you can paste it locally
  console.log(
    'requestForAttestationJSONString:\n',
    JSON.stringify(requestForAttestation)
  )

  return requestForAttestation
}

module.exports.createRequestForAttestation = createRequestForAttestation

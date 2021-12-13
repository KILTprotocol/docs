const Kilt = require('@kiltprotocol/sdk-js')

exports = async function requestForAttestation(claimerLightDid, claim, keystore) {
  const requestForAttestation = Kilt.RequestForAttestation.fromClaim(claim)

  await requestForAttestation.signWithDid(keystore, claimerLightDid)

  // log this so you can paste it locally
  console.log(
    'requestForAttestationJSONString:\n',
    JSON.stringify(requestForAttestation)
  )

  return requestForAttestation
}

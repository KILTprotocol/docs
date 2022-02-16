const Kilt = require('@kiltprotocol/sdk-js');

// create and return a RequestForAttestation from claim
async function createRequest(lightDid, keystore, claim) {
  const request = Kilt.RequestForAttestation.fromClaim(claim);
  await request.signWithDid(keystore, lightDid);

  console.log('\n\nsave this to ./claimer/_request.json for testing\n\n');
  console.log(JSON.stringify(request, null, 2))
  console.log('\n\n')
  return request;
}

module.exports = createRequest;

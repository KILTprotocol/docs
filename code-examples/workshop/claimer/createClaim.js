const Kilt = require('@kiltprotocol/sdk-js');

// create a Claim object from lightDid, ctype and given content
function createClaim(lightDid, ctype, content) {
  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    content,
    lightDid.did
  );

  return claim;
}

module.exports = createClaim
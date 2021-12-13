const Kilt = require('@kiltprotocol/sdk-js')

function createClaim(claimerLightDid, ctype) {
  // These contents can be replaced following the schema types
  const claimContents = {
    name: 'Alice',
    age: 25,
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    claimContents,
    claimerLightDid.did
  )

  return claim
}

module.exports.createClaim = createClaim

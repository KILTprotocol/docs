const Kilt = require('@kiltprotocol/sdk-js')

exports = function claim(claimerLightDid, ctype) {
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

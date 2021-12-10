const Kilt = require('@kiltprotocol/sdk-js')

function main(claimerLightDid, ctype) {
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

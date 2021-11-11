import * as Kilt from '@kiltprotocol/sdk-js'

export function main(claimer: Kilt.KeyringPair, ctype: Kilt.CType): Kilt.Claim {
  const claimContents = {
    name: 'Alice',
    age: 25,
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    claimContents,
    claimer.address
  )

  return claim
}

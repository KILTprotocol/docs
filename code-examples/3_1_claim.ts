import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  address: string,
  mnemonic: string,
  ctype: Kilt.CType
): Promise<[Kilt.Claim, Kilt.Identity]> {
  await Kilt.init({ address })
  const claimer = Kilt.Identity.buildFromMnemonic(mnemonic)

  const claimContents = {
    name: 'Alice',
    age: 25,
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    ctype,
    claimContents,
    claimer.address
  )

  return [claim, claimer]
}

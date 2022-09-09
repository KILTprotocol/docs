/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Kilt from '@kiltprotocol/sdk-js'

let domainLinkageCtype: Kilt.ICType

export async function main() {
  const did = 'did:kilt:4smcAoiTiCLaNrGhrAM4wZvt5cMKEGm8f3Cu9aFrpsh5EiNV'

  const claimContents: Kilt.IClaimContents = {
    id: did,
    origin: 'https://example-dApp.com',
  }

  const claim = Kilt.Claim.fromCTypeAndClaimContents(
    domainLinkageCtype,
    claimContents,
    did
  )
}

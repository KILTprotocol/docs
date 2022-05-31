import { CType, Claim, RequestForAttestation } from '@kiltprotocol/core'

const stringify = (object) => JSON.stringify(object, undefined, 2)

export function jsonExamples() {
  const ctype = CType.fromSchema({
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: 'Drivers License',
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'integer',
      },
    },
    type: 'object',
  })

  const rawClaim = {
    name: 'Alice',
    age: 29,
  }
  const claim = Claim.fromCTypeAndClaimContents(
    ctype,
    rawClaim,
    'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  )
  const requestForAttestation = RequestForAttestation.fromClaim(claim)

  return {
    ctype: stringify(ctype),
    rawClaim: stringify(rawClaim),
    claim: stringify(claim),
    requestForAttestation: stringify(requestForAttestation),
  }
}

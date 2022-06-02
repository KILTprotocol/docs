import { CType, Claim, RequestForAttestation } from '@kiltprotocol/core'

const stringify = (object) => JSON.stringify(object, undefined, 2)

export type jsonExampleTypes =
  | 'ctype'
  | 'rawClaim'
  | 'claim'
  | 'requestForAttestation'

export function jsonExamples(type: jsonExampleTypes) {
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
  if (type === 'ctype') return stringify(ctype)

  const rawClaim = {
    name: 'Alice',
    age: 29,
  }
  if (type === 'rawClaim') return stringify(rawClaim)

  const claim = Claim.fromCTypeAndClaimContents(
    ctype,
    rawClaim,
    'did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g'
  )
  if (type === 'claim') return stringify(claim)

  const requestForAttestation = RequestForAttestation.fromClaim(claim)
  if (type === 'requestForAttestation') return stringify(requestForAttestation)
}

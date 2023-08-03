import * as Kilt from '@kiltprotocol/sdk-js'

export function main() {
  const emailCType: Kilt.ICType = {
    $id: 'kilt:ctype:0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac',
    $schema: 'http://kilt-protocol.org/draft-01/ctype#',
    title: 'Email',
    properties: {
      Email: {
        type: 'string'
      }
    },
    type: 'object'
  }
}

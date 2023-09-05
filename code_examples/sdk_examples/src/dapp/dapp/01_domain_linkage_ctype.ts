import * as Kilt from '@kiltprotocol/sdk-js'

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function main(): Promise<Kilt.ICType> {
  const {
    creator,
    createdAt,
    cType: domainLinkageCType
  } = await Kilt.CType.fetchFromChain(
    'kilt:ctype:0xb08800a574c436831a2b9fce00fd16e9df489b2b3695e88a0895d148eca0311e'
  )

  console.log(JSON.stringify(domainLinkageCType, null, 2))

  /** Prints the following definition:
  {
    "$schema": "ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/",
    "additionalProperties": false,
    "properties": {
        "id": {
            "type": "string"
        },
        "origin": {
            "type": "string"
        }
    },
    "title": "Domain Linkage Credential",
    "type": "object",
    "$id": "kilt:ctype:0xb08800a574c436831a2b9fce00fd16e9df489b2b3695e88a0895d148eca0311e"
  }
  */
  return domainLinkageCType
}

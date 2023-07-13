import * as Kilt from '@kiltprotocol/sdk-js'

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function main(): Promise<Kilt.ICType> {
  const { creator, createdAt, ...domainLinkageCType } =
    await Kilt.CType.fetchFromChain(
      'kilt:ctype:0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643'
    )

  console.log(JSON.stringify(domainLinkageCType, null, 2))

  /** Prints the following definition:
  {
    "$schema": "ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/",
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
    "$id": "kilt:ctype:0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643"
  }
  */
  return domainLinkageCType
}

import * as Kilt from '@kiltprotocol/sdk-js'

export async function queryDidDocument(
  web3Name: Kilt.Did.Web3Name
): Promise<Kilt.DidDocument> {
  const api = Kilt.ConfigService.get('api')

  console.log(`Querying the blockchain for the web3name "${web3Name}"`)
  // Query the owner of the provided web3name.
  const encodedWeb3NameOwner = await api.call.did.queryByWeb3Name(web3Name)

  // Extract the DidDocument and other linked information from the encodedWeb3NameOwner.
  const { document } = Kilt.Did.linkedInfoFromChain(encodedWeb3NameOwner)

  return document
}

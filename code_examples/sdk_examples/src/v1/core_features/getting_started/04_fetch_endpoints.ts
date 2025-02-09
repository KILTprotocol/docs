import * as Kilt from '@kiltprotocol/sdk-js'
import {Did} from "@kiltprotocol/types"

export async function main(id: Did): Promise<Object[]> {
  const kiltnerd123DidDocument = await Kilt.DidResolver.resolve(id)
  console.log(`kiltnerd123's DID Document:`)
  console.log(JSON.stringify(kiltnerd123DidDocument, null, 2))

  const endpoints = kiltnerd123DidDocument?.didDocument?.service
  if (!endpoints) {
    console.log('No endpoints for the DID.')
    return []
  }
  console.log('Endpoints:')
  console.log(JSON.stringify(endpoints, null, 2))

  return endpoints
}

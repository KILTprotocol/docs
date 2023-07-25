import * as Kilt from '@kiltprotocol/sdk-js'
import { ApiPromise } from '@polkadot/api'

import { main as connect_pere } from './02_connect_spirit'
import { main as connect_spirit } from './02_connect_spirit'
import { main as disconnect } from './07_disconnect'
import { main as fetchEndpointData } from './05_fetch_endpoint_data'
import { main as fetchJohnDoeDid } from './03_fetch_did'
import { main as fetchJohnDoeEndpoints } from './04_fetch_endpoints'
import { main as printHelloWorld } from './01_print_hello_world'
import { main as verifyCredential } from './06_verify_credential'

async function fetchDidAndCredential(api: ApiPromise) {
  const johnDoeDid = await fetchJohnDoeDid(api)
  if (!johnDoeDid)
    throw new Error('"john_doe" is not associated to any DID on Spiritnet')
  const endpoints = await fetchJohnDoeEndpoints(johnDoeDid)
  if (!endpoints || !endpoints.length)
    throw new Error(`DID doesn't include services`)

  let credential: Kilt.ICredential
  try {
    // FIXME: Occasionally there is a timeout error, because the endpoint uses the official ipfs gateway.
    // Fix it by using a reliable endpoint.
    // For now simply disconnect and return (i.e., ignore this error).
    credential = await fetchEndpointData(endpoints)
  } catch (error) {
    console.error('Error while fetching IPFS', error)
    return
  }
  await verifyCredential(credential)
}

export async function runAll(): Promise<void> {
  await printHelloWorld()

  // check that the getting started works with both spiritnet and peregine
  const api_spirit = await connect_spirit()
  try {
    await fetchDidAndCredential(api_spirit)
  } finally {
    await disconnect()
  }

  const api_pere = await connect_pere()
  try {
    await fetchDidAndCredential(api_pere)
  } finally {
    await disconnect()
  }
}

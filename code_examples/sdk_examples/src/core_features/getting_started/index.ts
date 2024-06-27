import * as Kilt from '@kiltprotocol/sdk-js'

import { main as connectToPeregrine } from './02_connect_pere'
import { main as disconnect } from './07_disconnect'
import { main as fetchEndpointData } from './05_fetch_endpoint_data'
import { main as fetchkiltnerd123Did } from './03_fetch_did'
import { main as fetchkiltnerd123Endpoints } from './04_fetch_endpoints'
import { main as printHelloWorld } from './01_print_hello_world'
import { main as verifyCredential } from './06_verify_credential'

async function fetchDidAndCredential() {
  const kiltnerd123Did = await fetchkiltnerd123Did()
  if (!kiltnerd123Did)
    throw new Error('"kiltnerd123" is not associated to any DID on Spiritnet')
  const endpoints = await fetchkiltnerd123Endpoints(kiltnerd123Did)
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

  await connectToPeregrine()
  try {
    await fetchDidAndCredential()
  } finally {
    await disconnect()
  }
}

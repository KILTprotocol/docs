import * as Kilt from '@kiltprotocol/sdk-js'
import { main as buildCredential } from './07_build_credential'
import { main as connect } from './03_connect'
import { main as disconnect } from './09_disconnect'
import { main as fetchEndpointData } from './06_fetch_endpoint_data'
import { main as fetchJohnDoeDid } from './04_fetch_did'
import { main as fetchJohnDoeEndpoints } from './05_fetch_endpoints'
import { main as initSDKWithSpiritnet } from './02_init_sdk'
import { main as printHelloWorld } from './01_print_hello_world'
import { main as verifyCredential } from './08_verify_credential'

export async function runAll(): Promise<void> {
  printHelloWorld()
  await initSDKWithSpiritnet()
  // Connect to Spiritnet
  await connect()
  const johnDoeDid = await fetchJohnDoeDid()
  if (!johnDoeDid) throw '"john_doe" is not associated to any DID on Spiritnet'
  const endpoints = await fetchJohnDoeEndpoints(johnDoeDid)
  if (!endpoints || !endpoints.length)
    throw `DID doesn't include the service endpoints`

  let request: Kilt.IRequestForAttestation
  try {
    request = await fetchEndpointData(endpoints)
  } catch {
    // FIXME: Occasionally there is a timeout error, because the endpoint uses the official ipfs gateway.
    // Fix it by using a reliable endpoint.
    // For now simply disconnect and return (i.e., ignore this error).
    await disconnect()
    return
  }

  const credential = await buildCredential(request)
  if (!credential) throw 'Credential not created'
  const credentialValidity = await verifyCredential(credential)
  if (!credentialValidity) throw 'Credential not valid.'
  await disconnect()
}

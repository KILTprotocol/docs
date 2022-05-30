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
  if (!endpoints || !endpoints.length) throw `DID doesn't include the service endpoints`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let request: any
  try {
    request = await fetchEndpointData(endpoints)
  } catch {
    // Case in which the fetching fails. Simply disconnect and return (i.e., ignore this error).
    await disconnect()
    return
  }
  const credential = await buildCredential(request)
  if (!credential) throw 'Credential not created'
  const credentialValidity = await verifyCredential(credential)
  if (!credentialValidity) throw 'Credential not valid.'
  await disconnect()
}

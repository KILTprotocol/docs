import { main as connect } from './02_connect'
import { main as disconnect } from './08_disconnect'
import { main as fetchEndpointData } from './05_fetch_endpoint_data'
import { main as fetchJohnDoeDid } from './03_fetch_did'
import { main as fetchJohnDoeEndpoints } from './04_fetch_endpoints'
import { main as printHelloWorld } from './01_print_hello_world'
import { main as verifyAttestation } from './06_verify_attestation'
import { main as verifyCredential } from './07_verify_credential'
export async function runAll() {
  printHelloWorld()
  // Connect to Spiritnet
  await connect()
  const johnDoeDid = await fetchJohnDoeDid()
  if (!johnDoeDid) throw '"john_doe" is not associated to any DID on Spiritnet'
  const endpoints = await fetchJohnDoeEndpoints(johnDoeDid)
  if (!endpoints || !endpoints.length)
    throw `DID doesn't include the service endpoints`
  let credential
  try {
    credential = await fetchEndpointData(endpoints)
  } catch {
    // FIXME: Occasionally there is a timeout error, because the endpoint uses the official ipfs gateway.
    // Fix it by using a reliable endpoint.
    // For now simply disconnect and return (i.e., ignore this error).
    await disconnect()
    return
  }
  const attestationStatus = await verifyAttestation(credential)
  if (attestationStatus) {
    console.log("John Doe's credential is attested!")
  } else {
    console.log("John Doe's credential is not attested.")
  }
  await verifyCredential(credential)
  await disconnect()
}

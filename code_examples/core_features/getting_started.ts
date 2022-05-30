import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main() {
  console.log('hello world')

  await Kilt.init({ address: 'wss://spiritnet.kilt.io/' })
  await Kilt.connect()

  const johnDoeDid =
    await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe')
  if (!johnDoeDid) {
    return console.log('No DID found for "john_doe".')
  }

  console.log(
    `Hello world, my name is john_doe and this is my DID: "${johnDoeDid}"`
  )
  const johnDoeDidDocument = await Kilt.Did.DidResolver.resolveDoc(johnDoeDid)
  console.log('John Doe\'s DID Document:')
  console.log(JSON.stringify(johnDoeDidDocument, undefined, 2))
  const endpoints = johnDoeDidDocument?.details?.getEndpoints()
  if (!endpoints) {
    return console.log('No endpoints for the DID.')
  }

  console.log('Endpoints:')
  console.log(JSON.stringify(endpoints, undefined, 2))
  const endpointRequestData = await axios
    .get(endpoints[0].urls[0])
    .then((response) => response.data)
  const attestation = await Kilt.Attestation.query(endpointRequestData.rootHash)
  if (!attestation) {
    return console.log('The request didn\'t have an attestation.')
  }

  const credential = Kilt.Credential.fromRequestAndAttestation(
    endpointRequestData,
    attestation
  )
  console.log('John Doe credential:')
  console.log(JSON.stringify(credential, undefined, 2))
  const verifiedCredential = await credential.verify()
  console.log(`Is John Doe's credential valid? ${verifiedCredential}`)

  await Kilt.disconnect()
}

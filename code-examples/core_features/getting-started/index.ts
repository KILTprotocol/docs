import * as Kilt from '@kiltprotocol/sdk-js'
import fetch from 'node-fetch'

export async function runAll() {
  await Kilt.init({ address: 'wss://spiritnet.kilt.io/' })

  await Kilt.ChainHelpers.BlockchainApiConnection.getConnectionOrConnect()

  const johnDoeDidId = await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe')

  if (!johnDoeDidId) return
  const johnDoeDid = await Kilt.Did.DidResolver.resolveDoc(johnDoeDidId)

  const endPoints = johnDoeDid?.details?.getEndpoints()

  if (!endPoints) return console.log('no endpoints')

  const request = await fetch(endPoints[0].urls[0]).then((request) =>
    request.json()
  )

  const attestation = await Kilt.Attestation.query(request.rootHash)

  const credential = Kilt.Credential.fromRequestAndAttestation(
    request,
    attestation
  )

  await credential.verify()

  await Kilt.disconnect()
}

runAll()

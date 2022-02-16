// make environment variables available in process.env
import 'dotenv/config'
import { fileURLToPath } from 'url'

// bring in dependencies
import * as Kilt from '@kiltprotocol/sdk-js'
import { cryptoWaitReady } from '@polkadot/util-crypto'

// load actors for the workshop
import * as claimer from './claimer/index.js'
import * as attester from './attester/index.js'
import * as verifier from './verifier/index.js'

// load the node address from .env
const { WSS_ADDRESS: address } = process.env

async function main() {
  // wait for the crypto library to be ready
  await cryptoWaitReady()

  // connect to the KILT wss node
  await Kilt.init({ address })

  // Claimer gets ctype from Attester
  const ctypeJSON = await attester.getCtype()

  // Claimer forms a claim for the ctype
  const content = { name: 'Alice', age: 25 }
  const claimJSON = await claimer.createClaim(ctypeJSON, content)

  // Claimer creates an attestation request
  const requestJSON = await claimer.createRequest(claimJSON)

  // Claimer sends request to the Attester for approval or rejection
  const credentialJSON = await attester.attestCredential(requestJSON)
  if (!credentialJSON) throw Error('credential denied')

  // Claimer gets a challenge from Verifier
  const challenge = verifier.getChallenge()

  // Claimer creates a signed presentation using credential and challenge
  const presentationJSON = await claimer.createPresentation(credentialJSON, challenge)

  // Claimer sends their presentation Verifier for processing
  const isVerified = await verifier.verifyCredential(presentationJSON, challenge)

  // presentation is verified or denied by the Verifier
  if (isVerified) console.log('woohoo verified, workshop complete!')
  else console.log('booo verification denied!')

  // we can disconnect
  await Kilt.disconnect()
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((e) => {
    console.log('Error in the workshop!', e)
    process.exit(1)
  })
}

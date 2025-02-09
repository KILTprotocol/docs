import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'
import { types } from '@kiltprotocol/credentials'

export async function main(
  endpoints: types.DidUrl[]
): Promise<types.VerifiableCredential> {
  const { data: credential } = await axios.get<types.VerifiableCredential>(
    endpoints[0].serviceEndpoint[0]
  )
  console.log(`Credentials: ${JSON.stringify(credential, null, 2)}`)
  return credential
}

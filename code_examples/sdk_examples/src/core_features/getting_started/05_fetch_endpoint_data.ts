import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'
import { VerifiableCredential } from '@kiltprotocol/credentials/lib/cjs/V1/types'

export async function main(
  endpoints: Kilt.Service<DidUrl>[]
): Promise<VerifiableCredential> {
  const { data: credential } = await axios.get<VerifiableCredential>(
    endpoints[0].serviceEndpoint[0]
  )
  console.log(`Credentials: ${JSON.stringify(credential, null, 2)}`)
  return credential
}

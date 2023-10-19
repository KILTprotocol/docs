import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  endpoints: Kilt.DidServiceEndpoint[]
): Promise<Kilt.ICredential> {
  const {
    data: [{ credential }]
  } = await axios.get<Kilt.KiltPublishedCredentialCollectionV1>(
    endpoints[0].serviceEndpoint[0]
  )
  console.log(`Credentials: ${credential}`)
  return credential
}

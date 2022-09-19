import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  endpoints: Kilt.DidServiceEndpoint[]
): Promise<Kilt.ICredentialPresentation> {
  const {
    data: [{ credential }]
  } = await axios.get<Kilt.KiltPublishedCredentialCollectionV1>(
    endpoints[0].serviceEndpoint[0]
  )

  return credential
}

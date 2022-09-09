import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  endpoints: Kilt.DidServiceEndpoint[]
): Promise<Kilt.ICredential> {
  const { data: endpointRequestData } = await axios.get<Kilt.ICredential>(
    endpoints[0].serviceEndpoint[0]
  )

  return endpointRequestData
}

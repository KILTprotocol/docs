import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function main(
  endpoints: Kilt.DidServiceEndpoint[]
): Promise<Kilt.ICredential> {
  const endpointRequestData = await axios
    .get<Kilt.ICredential>(endpoints[0].serviceEndpoint[0])
    .then((response) => response.data)

  return endpointRequestData
}

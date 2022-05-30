import axios from 'axios'

import * as Kilt from '@kiltprotocol/sdk-js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function main(endpoints: Kilt.DidServiceEndpoint[]): Promise<any> {
  const endpointRequestData = await axios
    .get(endpoints[0].urls[0])
    .then((response) => response.data)

  return endpointRequestData
}

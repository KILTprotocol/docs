import { DidServiceEndpoint } from '@kiltprotocol/sdk-js'
import axios from 'axios'

export async function main(endpoints: DidServiceEndpoint[]) {
  const endpointRequestData = await axios
    .get(endpoints[0].urls[0])
    .then((response) => response.data)

  return endpointRequestData
}

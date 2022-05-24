import { DidServiceEndpoint } from '@kiltprotocol/sdk-js'
import axios from 'axios'

export async function main(endPoints: DidServiceEndpoint[]) {
  const request = await axios.get(endPoints[0].urls[0]).then(response => response.data)

  return request
}

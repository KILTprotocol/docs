import axios from 'axios'
export async function main(endpoints) {
  const { data: endpointRequestData } = await axios.get(
    endpoints[0].serviceEndpoint[0]
  )
  return endpointRequestData
}

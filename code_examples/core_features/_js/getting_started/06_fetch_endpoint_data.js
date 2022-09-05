import axios from 'axios'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function main(endpoints) {
  const endpointRequestData = await axios
    .get(endpoints[0].urls[0])
    .then((response) => response.data)
  return endpointRequestData
}

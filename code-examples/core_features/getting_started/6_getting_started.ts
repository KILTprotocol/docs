export async function main(endPoints) {
  const request = await fetch(endPoints[0].urls[0]).then((request) =>
    request.json()
  )
  return request
}

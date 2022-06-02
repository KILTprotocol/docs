import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(credential: Kilt.Credential): Promise<boolean> {
  const isCredentialValid = await credential.verify()
  console.log(`Is John Doe's credential valid? ${isCredentialValid}`)
  return isCredentialValid
}

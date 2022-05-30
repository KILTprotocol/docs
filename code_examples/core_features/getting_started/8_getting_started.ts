import { Credential } from '@kiltprotocol/sdk-js'

export async function main(credential: Credential) {
  const verifiedCredential = await credential.verify()
  console.log(`Is John Doe's credential valid: ${verifiedCredential}`)
}

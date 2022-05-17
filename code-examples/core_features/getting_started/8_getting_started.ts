import { Credential } from '@kiltprotocol/sdk-js'

export async function main(credential: Credential) {
  const verifiedCrdential = await credential.verify()

  console.log(`Is John Doe's credential valid: ${verifiedCrdential}`)
}

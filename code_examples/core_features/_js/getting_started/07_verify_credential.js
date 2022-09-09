import * as Kilt from '@kiltprotocol/sdk-js'
export async function main(credential) {
  try {
    await Kilt.Credential.verify(credential)
    console.log("John Doe's credential is valid!")
  } catch {
    console.log("John Doe's credential is not valid.")
  }
}

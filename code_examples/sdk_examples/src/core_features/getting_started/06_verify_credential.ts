import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(credential: Kilt.ICredential): Promise<void> {
  try {
    await Kilt.Credential.verifyCredential(credential)
    console.log(
      "John Doe's credential is valid!",
      JSON.stringify(credential, null, 2)
    )
  } catch {
    console.log("John Doe's credential is not valid.")
  }
}

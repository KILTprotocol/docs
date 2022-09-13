import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  presentation: Kilt.ICredentialPresentation
): Promise<void> {
  try {
    await Kilt.Credential.verifyPresentation(presentation)
    console.log("John Doe's credential is valid!")
  } catch {
    console.log("John Doe's credential is not valid.")
  }
}

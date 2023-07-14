import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(credential: Kilt.ICredential): Promise<void> {
  try {
    const { attester, revoked } = await Kilt.Credential.verifyCredential(
      credential
    )

    // Verify that the credential is not revoked. Exception caught by the catch {} block below.
    if (revoked) {
      throw new Error('The credential has been revoked, hence it is not valid.')
    }
    console.log(
      `John Doe's credential is valid and has been attested by ${attester}!`,
      JSON.stringify(credential, null, 2)
    )
  } catch {
    console.log("John Doe's credential is not valid.")
  }
}

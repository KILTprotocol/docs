import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(credential: Kilt.ICredential): Promise<void> {
  try {
    await Kilt.Credential.verifyCredential(credential)

    const api = Kilt.ConfigService.get('api')
    const attestationInfo = await api.query.attestation.attestations(
      credential.rootHash
    )
    const attestation = Kilt.Attestation.fromChain(
      attestationInfo,
      credential.rootHash
    )
    // Verify that the credential is not revoked. Exception caught by the catch {} block below.
    if (attestation.revoked) {
      throw 'The credential has been revoked, hence it is not valid.'
    }
    console.log(
      "John Doe's credential is valid!",
      JSON.stringify(credential, null, 2)
    )
  } catch {
    console.log("John Doe's credential is not valid.")
  }
}

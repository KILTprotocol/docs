import * as Kilt from '@kiltprotocol/sdk-js'
import * as KiltVC from '@kiltprotocol/vc-export'

export async function exportCredentialToVerifiableCredential(
  credential: Kilt.ICredential
): Promise<KiltVC.VerifiableCredential> {
  // Fetch the attestion
  const api = Kilt.ConfigService.get('api')
  const attestation = Kilt.Attestation.fromChain(
    await api.query.attestation.attestations(credential.rootHash),
    credential.rootHash
  )

  // Turn the KILT credential into a VerifiableCredential
  const vc = KiltVC.fromCredentialAndAttestation(credential, attestation)
  console.log('Exported credential: ', JSON.stringify(vc, null, 2))
  return vc
}

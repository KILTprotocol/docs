import * as Kilt from '@kiltprotocol/sdk-js'
import * as KiltVC from '@kiltprotocol/vc-export'

async function verifyAttestedProof(
  credential: KiltVC.VerifiableCredential,
  proof: KiltVC.Proof
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  if (proof.type === KiltVC.constants.KILT_ATTESTED_PROOF_TYPE) {
    const { verified, errors } = await KiltVC.verification.verifyAttestedProof(
      credential,
      proof as KiltVC.AttestedProof,
      api
    )
    if (!verified) {
      throw new Error(`Proof verification failed. Errors: ${errors}`)
    }
  }
}

export async function verifyVerifiableCredential(
  credential: KiltVC.VerifiableCredential
): Promise<void> {
  if (Array.isArray(credential.proof)) {
    const proofs = credential.proof
    proofs.forEach((proof) => verifyAttestedProof(credential, proof))
  } else {
    const proof = credential.proof
    verifyAttestedProof(credential, proof)
  }
}

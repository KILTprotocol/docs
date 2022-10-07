import * as Kilt from '@kiltprotocol/sdk-js'

export async function createAttestation(
  attester: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback,
  credential: Kilt.ICredential
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // Create an attestation object and write its root hash on the chain
  // using the provided attester's full DID.
  const { cTypeHash, claimHash, delegationId } =
    Kilt.Attestation.fromCredentialAndDid(credential, attester)

  // Write the attestation info on the chain.
  const attestationTx = api.tx.attestation.add(
    claimHash,
    cTypeHash,
    delegationId
  )
  const authorizedAttestationTx = await Kilt.Did.authorizeExtrinsic(
    attester,
    attestationTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAttestationTx,
    submitterAccount
  )
}

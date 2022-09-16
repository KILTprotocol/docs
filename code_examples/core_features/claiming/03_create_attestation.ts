import type { ApiPromise } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function createAttestation(
  api: ApiPromise,
  attester: Kilt.DidDocument,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback,
  credential: Kilt.ICredential
): Promise<void> {
  // Create an attestation object and write its root hash on the chain
  // using the provided attester's full DID.
  const { cTypeHash, claimHash, delegationId } =
    Kilt.Attestation.fromCredentialAndDid(credential, attester.uri)

  // Write the attestation info on the chain.
  const attestationTx = api.tx.attestation.add(
    claimHash,
    cTypeHash,
    delegationId
  )
  const authorisedAttestationTx = await Kilt.Did.authorizeExtrinsic(
    attester,
    attestationTx,
    signCallback,
    submitterAccount.address
  )
  await Kilt.Blockchain.signAndSubmitTx(
    authorisedAttestationTx,
    submitterAccount
  )
}

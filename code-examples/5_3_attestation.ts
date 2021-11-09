import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  attester: Kilt.Identity,
  requestForAttestation: Kilt.RequestForAttestation
): Promise<Kilt.AttestedClaim> {
  // build the attestation object
  const attestation = Kilt.Attestation.fromRequestAndPublicIdentity(
    requestForAttestation,
    attester.getPublicIdentity()
  )

  // store the attestation on chain

  const tx = await attestation.store()
  await Kilt.BlockchainUtils.signAndSubmitTx(tx, attester, {
    resolveOn: Kilt.BlockchainUtils.IS_IN_BLOCK,
  })
  console.log('Attestation saved on chain.')

  // the attestation was successfully stored on the chain, so you can now create the AttestedClaim object
  const attestedClaim = Kilt.AttestedClaim.fromRequestAndAttestation(
    requestForAttestation,
    attestation
  )
  // log the attestedClaim so you can copy/send it back to the claimer
  console.log('attestedClaimJSONString:\n', JSON.stringify(attestedClaim))

  // disconnect from the chain
  await Kilt.disconnect()
  console.log('Disconnected from KILT testnet')
  return attestedClaim
}

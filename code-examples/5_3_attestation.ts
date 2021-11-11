import * as Kilt from '@kiltprotocol/sdk-js'

export async function main(
  attester: Kilt.KeyringPair,
  attesterFullDid: Kilt.FullDidDetails,
  requestForAttestation: Kilt.RequestForAttestation,
  keystore: Kilt.DemoKeystore
): Promise<Kilt.Credential> {
  // build the attestation object
  const attestation = Kilt.Attestation.fromRequestAndDid(
    requestForAttestation,
    attesterFullDid.did
  )

  // store the attestation on chain
  const tx = await attestation.store()
  const authorizedTx = await attester.authorizeExtrinsic(
    tx,
    keystore,
    attester.address
  )
  await Kilt.BlockchainUtils.signAndSubmitTx(authorizedTx, attester, {
    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
  })
  console.log('Attestation saved on chain.')

  // the attestation was successfully stored on the chain, so you can now create the credential object
  const credential = Kilt.Credential.fromRequestAndAttestation(
    requestForAttestation,
    attestation
  )
  // log the Credential so you can copy/send it back to the claimer
  console.log('CredentialJSONString:\n', JSON.stringify(credential))

  // disconnect from the chain
  await Kilt.disconnect()
  console.log('Disconnected from KILT testnet')
  return { ...credential, keystore }
}

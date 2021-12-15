const Kilt = require('@kiltprotocol/sdk-js')

async function attestCredential(
  attester,
  attesterFullDid,
  requestForAttestation,
  keystore
) {
  await Kilt.connect()

  // build the attestation object
  const attestation = Kilt.Attestation.fromRequestAndDid(
    requestForAttestation,
    attesterFullDid.details.did
  )

  if (await Kilt.Attestation.query(attestation.claimHash)) {
    console.log('Attestation found on chain')

    const credential = Kilt.Credential.fromRequestAndAttestation(
      requestForAttestation,
      attestation
    )

    // log the Credential so you can copy/send it back to the claimer
    console.log('CredentialJSONString:\n', JSON.stringify(credential))

    // disconnect from the chain
    await Kilt.disconnect()
    return credential
  }

  // store the attestation on chain
  const tx = await attestation.store()
  const authorizedTx = await attesterFullDid.details.authorizeExtrinsic(
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
  return credential
}

module.exports.attestCredential = attestCredential

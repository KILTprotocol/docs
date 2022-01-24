const Kilt = require('@kiltprotocol/sdk-js')

async function attestCredential(account, fullDid, keystore, request) {
  // build the attestation object
  const attestation = Kilt.Attestation.fromRequestAndDid(request, fullDid.details.did);

  // check the request content and deny based on your business logic..
  // if (request.claim.content.age < 20) return null;

  // if the attestaion is not yet on chain store it
  if (!await Kilt.Attestation.query(attestation.claimHash)) {

    // form tx and authorized extrinsic
    const tx = await attestation.store();
    const extrinsic = await fullDid.details.authorizeExtrinsic(
      tx,
      keystore,
      account.address
    );

    // write to chain
    await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {
      resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,
    });
  }

  // build the credential and return it
  const credential = Kilt.Credential.fromRequestAndAttestation(
    request,
    attestation
  );

  return credential;
}

module.exports = attestCredential
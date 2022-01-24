const Kilt = require('@kiltprotocol/sdk-js');

async function createPresentation(credentialObj, challenge, lightDid, keystore) {
  // creates a Credential from object
  const credential = new Kilt.Credential(credentialObj)

  // creates the presentation from credential, keystore, did and challenge
  const presentation = await credential.createPresentation({
    signer: keystore,
    claimerDid: lightDid,
    challenge: challenge,
  });

  return presentation;
}

module.exports = createPresentation
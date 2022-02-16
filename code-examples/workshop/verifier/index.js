const Kilt = require('@kiltprotocol/sdk-js');

module.exports = {
  // returns a challenge for Claimer to sign
  getChallenge() {
    return Kilt.Utils.UUID.generate();
  },
  // verifies validity, ownership & attestation returning true|false
  async verifyCredential(presentationJSON, challenge) {
    const presentation = JSON.parse(presentationJSON);
    const credential = new Kilt.Credential(presentation);

    const isValid = await credential.verify();

    const isSenderOwner = await Kilt.Credential.verify(presentation, { challenge });

    const isAttested = !credential.attestation.revoked;

    return isValid && isSenderOwner && isAttested
  },
}

const Kilt = require('@kiltprotocol/sdk-js')
const { cryptoWaitReady } = require('@polkadot/util-crypto')

const { keystoreGeneration } = require('./2_1_did')
const { createClaimerLightDid } = require('./2_2_did')
const { createAttesterFullDid } = require('./2_3_did')
const { createCType } = require('./3_1_ctypeFromSchema')
const { ctypeStored } = require('./3_2_ctypeFromSchema')
const { createClaim } = require('./4_1_claim')
const { createRequestForAttestation } = require('./4_2_claim')
const { requestForAttestationReconstructed } = require('./5_1_attestation')
const { verifyRequest } = require('./5_2_attestation')
const { attestCredential } = require('./5_3_attestation')
const { verifyCredential } = require('./6_verification')
const { createPresentation } = require('./7_1_verification-with-nonce')
const { verifyPresentation } = require('./7_2_verification-with-nonce')

// Copy created addresses and mnemonics from accounts.js
const claimerMnemonic = `safe left nature enact naive thunder square crystal crystal pipe aspect garment`
const claimerAddress = `4tCJTpKruJeDubA9vYmcFSqdrStVKooQSZZF9MaykYpQfqcr`
const attesterMnemonic = `shock drastic forget grass multiply peanut copy hip grab already muscle seek`
const attesterAddress = `4pkHJoq85VY8aXQE6nkfR27PGtw4DAPyNsRRPeocLcUSHmA1`

async function main() {
  await cryptoWaitReady()
  await Kilt.init({ address: 'wss://peregrine.kilt.io' })

  // Fetch the keyring pair for the attester as in accounts using the generated mnemonic
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'ed25519',
  })
  const attester = keyring.addFromMnemonic(attesterMnemonic)

  // Creates a light DID for the claimer
  const { claimerLightDid, keystore: claimerKeystore } =
    await createClaimerLightDid(await keystoreGeneration(), claimerMnemonic)

  // Checks if the attester has balance, if no balance has been found the script will end
  if ((await Kilt.Balance.getBalances(attesterAddress)).free === 0) {
    throw new Error(
      `The following address: ${attesterAddress} holds no tokens, please request tokens from the faucet`
    )
  }

  // Creates a full DID for the attester
  const { attesterFullDid, keystore: attesterKeystore } =
    await createAttesterFullDid(attester, attesterMnemonic, claimerKeystore)

  // Creates a CType from a schema
  const ctypeFromSchema = createCType()

  // Checks to see if a CType is stored on-chain, if not stores the CType on-chain
  const ctype = await ctypeStored(
    attester,
    attesterFullDid,
    ctypeFromSchema,
    attesterKeystore
  )

  // Creates a claim for the claimer
  const claim = createClaim(claimerLightDid, ctype)

  // Make a request for attestation to be sent to an Attester
  const requestForAttestation = await createRequestForAttestation(
    claimerLightDid,
    claim,
    claimerKeystore
  )

  // The claimer sends a request to an attester who reconstructs the request
  if (!requestForAttestationReconstructed(requestForAttestation)) {
    throw new Error('unable to construct the request for attestation')
  }

  // The attester verifies the request for an attestation
  if (!(await verifyRequest(requestForAttestation))) {
    throw new Error(
      'The following requestion for attestation fails the attesters verification'
    )
  }

  // Attests the request for attestation and anchors the attestation on-chain to create a credential
  const credential = await attestCredential(
    attester,
    attesterFullDid,
    requestForAttestation,
    attesterKeystore
  )

  // Verifying the credential
  if (!(await verifyCredential(credential))) {
    throw new Error('The credential fails to be verified')
  }

  // A verifer would create and send a nonce for the claimer to use in the verification process, called a challenge
  const nonce = Kilt.Utils.UUID.generate()

  // Claimer creates a presentation to send to a verifier
  const presentation = await createPresentation(
    claimerLightDid,
    credential,
    nonce,
    claimerKeystore
  )

  // A verifer receives the presentation and enters the nonce to verify
  if (!(await verifyPresentation(presentation, nonce))) {
    throw new Error(
      'The claimers presentation of the credential fails to be verified'
    )
  }
  await Kilt.disconnect()
  return console.log('Congratulation you have completed the KILT workshop')
}

main()

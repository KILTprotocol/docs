const Kilt = require('@kiltprotocol/sdk-js')
const { cryptoWaitReady } = require('@polkadot/util-crypto')

const keystore = require('./keystore')
const createClaimerLightDid = require('./claimersDid')
const createAttesterFullDid = require('./attestersDid')
const createCType = require('ctype')
const ctypeStored = require('storedCtype')
const createClaim = require('./claim')
const createRequestForAttestation = require('./requestForAttestation')
const requestForAttestationReconstructed = require('./reconstructRequestForAttestation')
const verifyRequest = require('./verifyRequest')
const attestCredential = require('./attestation')
const verifyCredential = require('./verification')
const createPresentation = require('./create-presentation')
const verifyPresentation = require('./verification-of-presentation')

// Copy created addresses and mnemonics from accounts.js
const claimerMnemonic = `<generatedClaimerMnemonic>`
const claimerAddress = `<generatedClaimerAddress>`
const attesterMnemonic = `<generatedAttesterMnemonic>`
const attesterAddress = `<generatedAttesterAddress>`

async function main() {
  await cryptoWaitReady()
  // Fetch the keyring pair for the attester as in accounts using the generated mnemonic
  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'ed25519',
  })
  const attester = keyring.addFromMnemonic(attesterMnemonic)

  // Creates a light DID for the claimer
  const { claimerLightDid, keystore: claimerKeystore } =
    await createClaimerLightDid(keystore, claimerMnemonic)

  // Checks if the attester has balance, if no balance has been found the script will end
  if (Kilt.Balance.getBalances(attesterAddress)) {
    return console.log(
      `The following address: ${attesterAddress} holds no tokens, please request tokens from the faucet`
    )
  }

  // Creates a full DID for the attester
  const { attesterFullDid, keystore: attesterKeystore } =
    await createAttesterFullDid(attester, attesterMnemonic, keystore)

  // Creates a CType from a schema
  const ctypeFromSchema = createCType()

  // Checks to see if a CType is stored on-chain, if not stores the CType on-chain
  const ctype = ctypeStored(
    attester,
    attesterFullDid,
    ctypeFromSchema,
    attesterKeystore
  )

  // Creates a claim for the claimer
  const claim = createClaim(claimerLightDid, ctype)

  // Make a request for attestation to be sent to an Attester
  const requestForAttestation = createRequestForAttestation(
    claimerLightDid,
    claim,
    claimerKeystore
  )

  // The claimer sends a request to an attester who reconstructs the request
  requestForAttestationReconstructed(requestForAttestation)

  // The attester verifies the request for an attestation
  if (!verifyRequest(requestForAttestation)) {
    return console.log(
      'The following requestion for attestation fails the attesters verification'
    )
  }

  // Attests the request for attestation and anchors the attestation on-chain to create a credential
  const credential = attestCredential(
    attester,
    attesterFullDid,
    requestForAttestation,
    attesterKeystore
  )

  // Verifying the credential
  if (!verifyCredential(credential)) {
    return console.log('The credential fails to be verified')
  }

  // A verifer would create and send a nonce for the claimer to use in the verification process, called a challenge
  const nonce = Kilt.Utils.UUID.generate()

  // Claimer creates a presentation to send to a verifier
  const presentation = createPresentation(
    claimerLightDid,
    credential,
    nonce,
    claimerKeystore
  )

  // A verifer receives the presentation and enters the nonce to verify
  if (!verifyPresentation(presentation, nonce)) {
    return console.log(
      'The claimers presentation of the credential fails to be verified'
    )
  }

  return console.log('Congratulation you have completed the KILT workshop')
}

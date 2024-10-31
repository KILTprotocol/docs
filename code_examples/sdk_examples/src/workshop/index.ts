/**
 * Copyright (c) 2018-2024, BOTLabs GmbH.
 *
 * This source code is licensed under the BSD 4-Clause "Original" license
 * found in the LICENSE file in the root directory of this source tree.
 */

import * as Kilt from '@kiltprotocol/sdk-js'
import { CType } from '@kiltprotocol/credentials'
// TODO: Look into tidier way with PD Keyring…
import { getFunds } from '../getFunds'

export function generateAccounts() {
  const issuerAccount = Kilt.generateKeypair({ type: 'ed25519' })
  const submitterAccount = Kilt.generateKeypair({ type: 'ed25519' })
  const holderAccount = Kilt.generateKeypair({ type: 'ed25519' })
  const verifierAccount = Kilt.generateKeypair({ type: 'ed25519' })

  console.log('keypair generation complete')
  console.log(`ISSUER_ACCOUNT_ADDRESS=${issuerAccount.publicKeyMultibase}`)
  console.log(
    `SUBMITTER_ACCOUNT_ADDRESS=${submitterAccount.publicKeyMultibase}`
  )
  console.log(`HOLDER_ACCOUNT_ADDRESS=${holderAccount.publicKeyMultibase}`)

  return { issuerAccount, submitterAccount, holderAccount, verifierAccount }
}

export async function generateIssuerDid(
  submitterAccount,
  authenticationKeyPair
) {
  const api = Kilt.ConfigService.get('api')
  const transactionHandler = Kilt.DidHelpers.createDid({
    api,
    signers: [authenticationKeyPair],
    submitter: submitterAccount,
    fromPublicKey: authenticationKeyPair.publicKeyMultibase
  })

  const didDocumentTransactionResult = await transactionHandler.submit()

  if (didDocumentTransactionResult.status !== 'confirmed') {
    console.log(didDocumentTransactionResult.status)
    throw new Error('create DID failed')
  }

  let { didDocument, signers } = didDocumentTransactionResult.asConfirmed
  console.log(`ISSUER_DID_URI=${didDocument.id}`)
  // TODO: Don't need to pass signers? but explain that it's more flexible in real use
  return { didDocument, signers }
}

export async function generateHolderDid(
  submitterAccount,
  authenticationKeyPair
) {
  const api = Kilt.ConfigService.get('api')

  const transactionHandler = Kilt.DidHelpers.createDid({
    api,
    signers: [authenticationKeyPair],
    submitter: submitterAccount,
    fromPublicKey: authenticationKeyPair.publicKeyMultibase
  })

  const didDocumentTransactionResult = await transactionHandler.submit()

  if (didDocumentTransactionResult.status !== 'confirmed') {
    console.log(didDocumentTransactionResult.status)
    throw new Error('create DID failed')
  }

  let { didDocument, signers } = didDocumentTransactionResult.asConfirmed
  console.log(`HOLDER_DID_URI=${didDocument.id}`)
  // TODO: Don't need to pass signers? but explain that it's more flexible in real use
  return { didDocument, signers }
}

export async function generateVerifierDid(
  submitterAccount,
  authenticationKeyPair
) {
  const api = Kilt.ConfigService.get('api')

  const transactionHandler = Kilt.DidHelpers.createDid({
    api,
    signers: [authenticationKeyPair],
    submitter: submitterAccount,
    fromPublicKey: authenticationKeyPair.publicKeyMultibase
  })

  const didDocumentTransactionResult = await transactionHandler.submit()

  if (didDocumentTransactionResult.status !== 'confirmed') {
    console.log(didDocumentTransactionResult.status)
    throw new Error('create DID failed')
  }

  let { didDocument, signers } = didDocumentTransactionResult.asConfirmed
  // TODO: Don't need to pass signers? but explain that it's more flexible in real use
  return { didDocument, signers }
}

export async function verifyDid(submitterAccount, didDocument, signers) {
  // TODO: DID verify step currently. What step?
  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃ Create Verification Method ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  //
  // - `DidHelpers` include a function to add a verification methods.
  // Similar to `createDid`, setting a verification method requires some parameters.
  //
  // - `didDocument` is the latest state of the DID Document that shall be updated.
  // - `signers` includes all the keypairs included in the DID documents and necessary for the
  // specified operation, in this case, the keypair of the authentication key, which is necessary to
  // allow updates to the DID Document.
  // - `publicKey` is the key used for the verification method.
  //
  // Note: setting a verification method will remove any existing method for the specified relationship.
  const api = Kilt.ConfigService.get('api')

  // TODO: use mnemonic here.
  const assertionKeyPair = Kilt.generateKeypair({
    type: 'sr25519'
  })
  // Add another key, public in this case
  const vmTransactionResult = await Kilt.DidHelpers.setVerificationMethod({
    api,
    didDocument,
    signers: [...signers, assertionKeyPair],
    submitter: submitterAccount,
    publicKey: assertionKeyPair.publicKeyMultibase,
    relationship: 'assertionMethod'
  }).submit()

  if (vmTransactionResult.status !== 'confirmed') {
    throw new Error('add verification method failed')
  }
  ;({ didDocument, signers } = vmTransactionResult.asConfirmed)

  console.log('assertion method added')
  return { didDocument, signers }
}
// TODO: Add into tutorial. Actually does it make sense?
export async function claimWeb3Name(submitterAccount, didDocument, signers) {
  const api = Kilt.ConfigService.get('api')

  const claimW3nTransactionResult = await Kilt.DidHelpers.claimWeb3Name({
    api,
    didDocument,
    submitter: submitterAccount,
    signers,
    name: 'testtest7865348999'
  }).submit()

  if (claimW3nTransactionResult.status !== 'confirmed') {
    throw new Error('claim web3name failed')
  }

  // The didDocument now contains an `alsoKnownAs` entry.
  ;({ didDocument } = claimW3nTransactionResult.asConfirmed)
  console.log('w3n claimed')
  return { didDocument, signers }
}

// Issuer
export async function issueCredential(issuerDid, holderDid, signers, submitterAccount) {
  const passportCType = await CType.fetchFromChain(
    'kilt:ctype:0x5f6634bc0edf08ced5fc7a7bec24a2019228570b912703c834955e0d00f69bf4'
  )

  const passportCredential = await Kilt.Issuer.createCredential({
    issuer: issuerDid.id,
    credentialSubject: {
      id: holderDid.id,
      age: 22
    },
    cType: passportCType.cType
  })

  const credential = await Kilt.Issuer.issue({
    credential: passportCredential,
    issuer: {
      didDocument: issuerDid,
      signers: [...signers, submitterAccount],
      submitter: submitterAccount
    }
  })

  console.log('credential issued')
  return credential
}

export async function createPresentation(credential, didDocument, signers) {
  const derived = await Kilt.Holder.deriveProof({
    credential,
    proofOptions: { includeClaims: ['/credentialSubject/age'] }
  })

  const presentation = await Kilt.Holder.createPresentation({
    credentials: [derived],
    holder: {
      didDocument,
      signers
    },
    presentationOptions: {
      verifier: didDocument.id,
      validUntil: new Date(Date.now() + 100_000)
    }
  })

  console.log('presentation created')
  return presentation
}

export async function verifyPresentation(presentation, didDocument) {
  const { verified, error } = await Kilt.Verifier.verifyPresentation({
    presentation,
    verificationCriteria: {
      verifier: didDocument.id,
      proofPurpose: 'authentication',
      domain: 'example.com'
    }
  })

  if (verified !== true) {
    throw new Error(`failed to verify credential: ${JSON.stringify(error)}`)
  }

  console.log('presentation verified')
}

export async function removeVerificationMethod(
  didDocument,
  submitterAccount,
  signers
) {
  // TODO: Need more now to tear down all created assets
  const api = Kilt.ConfigService.get('api')

  const removeVmTransactionResult =
    await Kilt.DidHelpers.removeVerificationMethod({
      api,
      didDocument,
      signers,
      submitter: submitterAccount,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      verificationMethodId: didDocument.assertionMethod![0],
      relationship: 'assertionMethod'
    }).submit()

  if (removeVmTransactionResult.status !== 'confirmed') {
    throw new Error('remove verification method failed')
  }
  ;({ didDocument } = removeVmTransactionResult.asConfirmed)

  console.log('assertion method removed')
}

export async function releaseWeb3Name(didDocument, submitterAccount, signers) {
  const api = Kilt.ConfigService.get('api')

  const releaseW3nTransactionResult = await Kilt.DidHelpers.releaseWeb3Name({
    api,
    didDocument,
    submitter: submitterAccount,
    signers
  }).submit()

  if (releaseW3nTransactionResult.status !== 'confirmed') {
    throw new Error('release web3name failed')
  }
  ;({ didDocument } = releaseW3nTransactionResult.asConfirmed)

  console.log('w3n released')
}

export async function removeService(didDocument, submitterAccount, signers) {
  const api = Kilt.ConfigService.get('api')

  const removeServiceTransactionResult = await Kilt.DidHelpers.removeService({
    api,
    submitter: submitterAccount,
    signers,
    didDocument,
    id: '#my_service'
  }).submit()

  if (removeServiceTransactionResult.status !== 'confirmed') {
    throw new Error('remove service failed')
  }
  ;({ didDocument } = removeServiceTransactionResult.asConfirmed)

  console.log('service removed')
}

export async function deactivateDid(didDocument, submitterAccount, signers) {
  const api = Kilt.ConfigService.get('api')

  const deactivateDidTransactionResult = await Kilt.DidHelpers.deactivateDid({
    api,
    submitter: submitterAccount,
    signers,
    didDocument
  }).submit()

  if (deactivateDidTransactionResult.status !== 'confirmed') {
    throw new Error('deactivate DID failed')
  }
  ;({ didDocument } = deactivateDidTransactionResult.asConfirmed)

  if (Array.isArray(didDocument.verificationMethod)) {
    throw new Error('Did not deactivated')
  }

  console.log('Did deactivated')
}

export async function runAll() {
  const api = await Kilt.connect(
    process.env.WSS_ADDRESS || 'wss://peregrine.kilt.io'
  )
  console.log('connected')

  const faucetAccount = Kilt.generateKeypair({
    type: 'sr25519',
    seed: '0xe566550fec3ca23d80dfe9e9529ada463b93fc33f17219c1089de906f7253f1c'
  })

  const { issuerAccount, submitterAccount, holderAccount, verifierAccount } = generateAccounts()
  
  await getFunds(faucetAccount, submitterAccount, 10)
  console.log('Successfully transferred tokens')
  let issuerDid = await generateIssuerDid(submitterAccount, issuerAccount)
  let holderDid = await generateHolderDid(submitterAccount, holderAccount)
  let verifierDid = await generateVerifierDid(submitterAccount, verifierAccount)

  issuerDid = await verifyDid(
    submitterAccount,
    issuerDid.didDocument,
    issuerDid.signers
  )
  issuerDid = await claimWeb3Name(
    submitterAccount,
    issuerDid.didDocument,
    issuerDid.signers
  )
  const credential = await issueCredential(
    issuerDid.didDocument,
    holderDid.didDocument,
    issuerDid.signers,
    submitterAccount
  )
  const presentation = await createPresentation(
    credential,
    holderDid.didDocument,
    holderDid.signers
  )
  await verifyPresentation(presentation, verifierDid.didDocument)

  await removeVerificationMethod(
    issuerDid.didDocument,
    submitterAccount,
    issuerDid.signers
  )
  await releaseWeb3Name(
    issuerDid.didDocument,
    submitterAccount,
    issuerDid.signers
  )
  await removeService(
    issuerDid.didDocument,
    submitterAccount,
    issuerDid.signers
  )
  await deactivateDid(
    issuerDid.didDocument,
    submitterAccount,
    holderDid.signers
  )
  await deactivateDid(
    holderDid.didDocument,
    submitterAccount,
    holderDid.signers
  )

  await api.disconnect()

  console.log('disconnected')
}

runAll()

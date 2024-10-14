/**
 * Copyright (c) 2018-2024, BOTLabs GmbH.
 *
 * This source code is licensed under the BSD 4-Clause "Original" license
 * found in the LICENSE file in the root directory of this source tree.
 */

import type {
  KiltAddress,
  SignerInterface,
  KeyringPair,
  MultibaseKeyPair,
  TransactionSigner,
  ICType
} from '@kiltprotocol/types'
import { Keyring } from '@polkadot/keyring'
import { BN } from '@polkadot/util'
import * as Kilt from '@kiltprotocol/sdk-js'
import { Multikey } from '@kiltprotocol/utils'
import { Blockchain, BalanceUtils } from '@kiltprotocol/chain-helpers'
import { CType } from '@kiltprotocol/credentials'
// TODO: Look into tidier way with PD Keyring…
import { getFunds } from '../getFunds'
// import { releaseWeb3Name } from '../core_features/web3names/04_release'

export function generateAccount() {
  // Generate account
  const authenticationKeyPair = Kilt.generateKeypair({ type: 'ed25519' })
  // TODO: Do you want to also create a submitter account?
  const submitterAccount = Kilt.generateKeypair({
    type: 'ed25519',
    seed: 'frequent arrange trap mouse shove labor rookie bitter absent club field exhibit'
  })
  console.log('keypair generation complete')
  return { authenticationKeyPair, submitterAccount }
}

export async function generateDid(
  api,
  submitterAccount,
  authenticationKeyPair
) {
  // ┏━━━━━━━━━━━━┓
  // ┃ create DID ┃
  // ┗━━━━━━━━━━━━┛
  //
  // Generate the DID-signed creation tx and submit it to the blockchain with the specified account.
  // The DID Document will have one Verification Key with an authentication relationship.
  //
  // Note the following parameters:
  // - `api`: The connected blockchain api.
  // - `signers`: The keys for verification materials inside the DID Document. For creating a DID,
  // only the key for the authentication verification method is required.
  // - `submitter`: The account used to submit the transaction to the blockchain. Note: the submitter account must have
  // enough funds to cover the required storage deposit.
  // - `fromPublicKey`: The public key that will feature as the DID's initial authentication method and will determine the DID identifier.

  // Much like current workshop, these two accounts can be the same
  const transactionHandler = Kilt.DidHelpers.createDid({
    api,
    signers: [authenticationKeyPair],
    submitter: submitterAccount,
    fromPublicKey: authenticationKeyPair.publicKeyMultibase
  })

  // The `createDid` function returns a transaction handler, which includes two methods:
  // - `submit`: Submits a transaction for inclusion in a block, resulting in its execution in the blockchain runtime.
  // - `getSubmittable`: Produces transaction that can be submitted to a blockchain node for inclusion, or signed and submitted by an external service.

  // Submit transaction.
  // Note: `submit()` by default, waits for the block to be finalized. This behaviour can be overwritten
  // in the function's optional parameters.
  const didDocumentTransactionResult = await transactionHandler.submit()

  // Once the transaction is submitted, the result should be checked.
  // For the sake of this example, we will only check if the transaction went through.
  if (didDocumentTransactionResult.status !== 'confirmed') {
    console.log(didDocumentTransactionResult.status)
    throw new Error('create DID failed')
  }

  // Get the DID Document from the transaction result.
  let { didDocument, signers } = didDocumentTransactionResult.asConfirmed
  console.log('Did created')

  return { didDocument, signers }
}

export async function verifyDid(api, submitterAccount, didDocument, signers) {
  // DID verify step currently
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

  // TODO: use mnemonic here.
  const assertionKeyPair = Kilt.generateKeypair({
    type: 'sr25519'
  })
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

export async function claimWeb3Name(
  api,
  submitterAccount,
  didDocument,
  signers
) {
  // ┏━━━━━━━━━━━━━━━━━┓
  // ┃ Claim web3name  ┃
  // ┗━━━━━━━━━━━━━━━━━┛
  const claimW3nTransactionResult = await Kilt.DidHelpers.claimWeb3Name({
    api,
    didDocument,
    submitter: submitterAccount,
    signers,
    name: 'testtest7865348'
  }).submit()

  if (claimW3nTransactionResult.status !== 'confirmed') {
    throw new Error('claim web3name failed')
  }

  // The didDocument now contains an `alsoKnownAs` entry.
  ;({ didDocument } = claimW3nTransactionResult.asConfirmed)
  console.log('w3n claimed')
  return { didDocument }
}

export async function addService(api, submitterAccount, signers, didDocument) {
  // TODO: No correlation in current workshop
  // ┏━━━━━━━━━━━━━━━━┓
  // ┃ Add a service  ┃
  // ┗━━━━━━━━━━━━━━━━┛
  const addServiceTransactionResult = await Kilt.DidHelpers.addService({
    api,
    submitter: submitterAccount,
    signers,
    didDocument,
    // TODO:  change service endpoint.
    service: {
      id: '#my_service',
      type: ['http://schema.org/EmailService'],
      serviceEndpoint: ['mailto:info@kilt.io']
    }
  }).submit()

  if (addServiceTransactionResult.status !== 'confirmed') {
    throw new Error('add service failed')
  }
  ;({ didDocument } = addServiceTransactionResult.asConfirmed)
  console.log('service added')

  return didDocument
}

export async function registerCType(api, didDocument, signers, submitterAccount) {
  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃ Register a CType             ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  //
  // Register a credential type on chain so we can issue credentials against it.
  //
  // Note:
  // We are registering a CType that has been created previously using functionality from the @kiltprotocol/credentials package.
  // The @kiltprotocol/sdk-js package and bundle do not currently offer support for this.
  //
  // TODO: Decide if CType definitions are expected to be hardcoded in application logic, at least for credential issuance.
  // Verifying credentials / presentations is already possible even if the CType definition is not known.
  //
  // TODO: Ideally, convert to using one we have on ctype hub
  const DriversLicenseDef =
    '{"$schema":"ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/","additionalProperties":false,"properties":{"age":{"type":"integer"},"name":{"type":"string"}},"title":"Drivers License","type":"object"}'
  const cTypeHash = CType.getHashForSchema(JSON.parse(DriversLicenseDef))
  const reg = CType.fetchFromChain(`kilt:ctype:${cTypeHash}`)
  console.log(reg)
  const createCTypeResult = await Kilt.DidHelpers.transact({
    api,
    didDocument,
    signers,
    submitter: submitterAccount,
    call: api.tx.ctype.add(DriversLicenseDef),
    expectedEvents: [{ section: 'CType', method: 'CTypeCreated' }]
  }).submit()
  console.log(createCTypeResult.asFailed)
  if (createCTypeResult.status !== 'confirmed') {
    throw new Error('CType creation failed')
  }

  // TODO: We don't have the CType id in the definition, so we need to get it from the events.
  const ctypeHash = createCTypeResult.asConfirmed.events
    .find((event) => api.events.ctype.CTypeCreated.is(event))
    ?.data[1].toHex()

  if ((await api.query.ctype.ctypes(ctypeHash)).isEmpty) {
    throw new Error('CType not registered')
  }

  // TODO: Should we at least be able to load an existing CType from the chain?
  const DriversLicense = JSON.parse(DriversLicenseDef)
  DriversLicense.$id = `kilt:ctype:${ctypeHash}`

  console.log('CType registered')
  return DriversLicense
}

export async function issueCredential(DriversLicense, didDocument, signers, submitterAccount) {
  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃ Issue a Credential           ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  //
  // Create and issue a credential using our Did.
  // The holder is also our Did, so we are issuing to ourselves here.
  //
  const unsigned = await Kilt.Issuer.createCredential({
    issuer: didDocument.id,
    credentialSubject: {
      id: didDocument.id,
      age: 22,
      name: 'Gustav'
    },
    cType: DriversLicense
  })

  const credential = await Kilt.Issuer.issue({
    credential: unsigned,
    issuer: {
      didDocument,
      signers: [...signers, submitterAccount],
      submitter: submitterAccount
    }
  })

  console.log('credential issued')
  return credential
}

export async function createPresentation(credential, didDocument, signers) {
  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃ Create a Presentation        ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  //
  // Create a derived credential that only contains selected properties (selective disclosure), then create a credential presentation for it.
  // The presentation includes a proof of ownership and is scoped to a verified and time frame to prevent unauthorized re-use.
  //
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
  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃ Verify a Presentation        ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  //
  // Verify a presentation.
  //
  // Verification would fail if:
  // - The presentation is not signed by the holder's Did.
  // - The current time is outside of the validity time frame of the presentation.
  // - The verifier in the presentation does not match the one specified.
  //
  const { verified, error } = await Kilt.Verifier.verifyPresentation({
    presentation,
    verificationCriteria: {
      verifier: didDocument.id,
      proofPurpose: 'authentication'
    }
  })

  if (verified !== true) {
    throw new Error(`failed to verify credential: ${JSON.stringify(error)}`)
  }

  console.log('presentation verified')
}

export async function removeVerificationMethod(didDocument, api, submitterAccount, signers) {
  // More for internal tests, not part of workshop, links

  // ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  // ┃ Remove a Verification Method ┃
  // ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  //
  // Removing a verification method can be done by specifying its id.
  //
  // Note:
  // - The provided `didDocument` must include the specified verification method.
  // - The authentication verification method can not be removed.
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

export async function releaseWeb3Name(didDocument, api, submitterAccount, signers) {
  // ┏━━━━━━━━━━━━━━━━━━┓
  // ┃ Release web3name ┃
  // ┗━━━━━━━━━━━━━━━━━━┛
  //
  // A web3name can be released from a DID and potentially claimed by another DID.
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

export async function removeService(didDocument, api, submitterAccount, signers) {
  // ┏━━━━━━━━━━━━━━━━━━┓
  // ┃ Remove a service ┃
  // ┗━━━━━━━━━━━━━━━━━━┛
  //
  // Services can be removed by specifying the service `id`
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

export async function deactivateDid(didDocument, api, submitterAccount, signers) {
  // ┏━━━━━━━━━━━━━━━━━━┓
  // ┃ Deactivate a DID ┃
  // ┗━━━━━━━━━━━━━━━━━━┛
  //
  // _Permanently_ deactivate the DID, removing all verification methods and services from its document.
  // Deactivating a DID cannot be undone, once a DID has been deactivated, all operations on it (including attempts at re-creation) are permanently disabled.
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
  // Setup code
  const api = await Kilt.connect('wss://peregrine.kilt.io')
  console.log('connected')

  const faucetAccount = Kilt.generateKeypair({
    type: 'sr25519',
    seed: '0xe566550fec3ca23d80dfe9e9529ada463b93fc33f17219c1089de906f7253f1c'
  })

  const { authenticationKeyPair, submitterAccount } = generateAccount()
  // ┏━━━━━━━━━━━━┓
  // ┃ Get funds  ┃
  // ┗━━━━━━━━━━━━┛
  //

  await getFunds(faucetAccount, submitterAccount, 5)
  console.log('Successfully transferred tokens')
  let { didDocument, signers } = await generateDid(
    api,
    submitterAccount,
    authenticationKeyPair
  )
  ;({ didDocument, signers } = await verifyDid(
    api,
    submitterAccount,
    didDocument,
    signers
  ))
  ;({ didDocument } = await claimWeb3Name(
    api,
    submitterAccount,
    didDocument,
    signers
  ))
  ;({ didDocument } = await addService(api, submitterAccount, signers, didDocument))
  const DriversLicense = await registerCType(api, didDocument, signers, submitterAccount)
  const credential = await issueCredential(DriversLicense, didDocument, signers, submitterAccount)
  const presentation = await createPresentation(credential, didDocument, signers)
  await verifyPresentation(presentation, didDocument)

  await removeVerificationMethod(didDocument, api, submitterAccount, signers)
  await releaseWeb3Name(didDocument, api, submitterAccount, signers)
  await removeService(didDocument, api, submitterAccount, signers)
  await deactivateDid(didDocument, api, submitterAccount, signers)

  // Release the connection to the blockchain.
  await api.disconnect()

  console.log('disconnected')
}

runAll()

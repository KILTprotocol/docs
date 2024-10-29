import * as Kilt from '@kiltprotocol/sdk-js'
import { Crypto } from '@kiltprotocol/utils'
import { mnemonicGenerate, randomAsU8a } from '@polkadot/util-crypto'

async function createDid() {

  // Create a connection to a KILT blockchain.
  // let api = await Kilt.connect('wss://peregrine.kilt.io/')
  let api = await Kilt.connect('ws://localhost:9944/')

  // Create keypair, of which the DID will be derived.
  const mnemonic = mnemonicGenerate()
  const didKeypair = Crypto.makeKeypairFromUri(mnemonic, 'sr25519')

  // The submitter account must have enough funds to cover the deposit costs.
  const submitterMnemonic =
    'build hill second flame trigger simple rigid cabbage phrase evolve final eight'
  const submitter = Crypto.makeKeypairFromUri(submitterMnemonic, 'sr25519')

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
  // only the key for the verification method is required.
  // - `submitter`: The account used to submit the transaction to the blockchain. Note: the submitter account must have
  // enough funds to cover the required storage deposit.
  // - `fromPublicKey`: The public key that will feature as the DID's initial authentication method and will determine the DID identifier.

  let transactionHandler = Kilt.DidHelpers.createDid({
    api,
    signers: [didKeypair],
    submitter,
    fromPublicKey: didKeypair,
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
    console.error('create DID failed')
    return
  }

  // Get the DID Document from the transaction result.
  let { didDocument } = didDocumentTransactionResult.asConfirmed

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
  const seed = randomAsU8a(32)
  const keyAgreementKeypair = Crypto.makeEncryptionKeypairFromSeed(seed)
  const vmTransactionResult = await Kilt.DidHelpers.setVerificationMethod({
    api,
    didDocument,
    signers: [didKeypair],
    submitter,
    publicKey: keyAgreementKeypair,
    relationship: 'keyAgreement',
  }).submit()

  if (vmTransactionResult.status !== 'confirmed') {
    console.error('add verification method failed')
    return
  }
  ; ({ didDocument } = vmTransactionResult.asConfirmed)

  // ┏━━━━━━━━━━━━━━━━━┓
  // ┃ Claim web3name  ┃
  // ┗━━━━━━━━━━━━━━━━━┛
  const claimW3nTransactionResult = await Kilt.DidHelpers.claimWeb3Name({
    api,
    didDocument,
    submitter,
    signers: [didKeypair],
    name: 'example123',
  }).submit()

  if (claimW3nTransactionResult.status !== 'confirmed') {
    console.error('claim web3name failed')
    return
  }

  // TODO: does the DID Document change after adding a w3n?
  ; ({ didDocument } = claimW3nTransactionResult.asConfirmed)

  // ┏━━━━━━━━━━━━━━━━┓
  // ┃ Add a service  ┃
  // ┗━━━━━━━━━━━━━━━━┛
  const addServiceTransactionResult = await Kilt.DidHelpers.addService({
    api,
    submitter,
    signers: [didKeypair],
    didDocument,
    // TODO:  change service endpoint.
    service: {
      id: '#my_service',
      type: ['http://schema.org/EmailService'],
      serviceEndpoint: ['mailto:info@kilt.io'],
    },
  }).submit()

  if (addServiceTransactionResult.status !== 'confirmed') {
    console.error('add service failed')
    return
  }
  ; ({ didDocument } = addServiceTransactionResult.asConfirmed)

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
      signers: [didKeypair],
      submitter,
      verificationMethodId: didDocument.keyAgreement![0],
      relationship: 'keyAgreement',
    }).submit()

  if (removeVmTransactionResult.status !== 'confirmed') {
    console.error('remove verification method failed')
    return
  }
  ; ({ didDocument } = removeVmTransactionResult.asConfirmed)

  // ┏━━━━━━━━━━━━━━━━━━┓
  // ┃ Release web3name ┃
  // ┗━━━━━━━━━━━━━━━━━━┛
  //
  // A web3name can be released from a DID and potentially claimed by another DID.
  const releaseW3nTransactionResult = await Kilt.DidHelpers.releaseWeb3Name({
    api,
    didDocument,
    submitter,
    signers: [didKeypair],
  }).submit()

  if (releaseW3nTransactionResult.status !== 'confirmed') {
    console.error('release web3name failed')
    return
  }
  ; ({ didDocument } = releaseW3nTransactionResult.asConfirmed)

  // ┏━━━━━━━━━━━━━━━━━━┓
  // ┃ Remove a service ┃
  // ┗━━━━━━━━━━━━━━━━━━┛
  //
  // Services can be removed by specifying the service `id`
  const removeServiceTransactionResult = await Kilt.DidHelpers.removeService({
    api,
    submitter,
    signers: [didKeypair],
    didDocument,
    id: '#my_service',
  }).submit()

  if (removeServiceTransactionResult.status !== 'confirmed') {
    console.error('remove service failed')
    return
  }
  ; ({ didDocument } = removeServiceTransactionResult.asConfirmed)

  // ┏━━━━━━━━━━━━━━━━━━┓
  // ┃ Deactivate a DID ┃
  // ┗━━━━━━━━━━━━━━━━━━┛
  //
  // _Permanently_ deactivate the DID, removing all verification methods and services from its document.
  // Deactivating a DID cannot be undone, once a DID has been deactivated, all operations on it (including attempts at re-creation) are permanently disabled.
  const deactivateDidTransactionResult = await Kilt.DidHelpers.deactivateDid({
    api,
    submitter,
    signers: [didKeypair],
    didDocument,
  }).submit()

  if (deactivateDidTransactionResult.status !== 'confirmed') {
    console.error('deactivate DID failed')
    return
  }
  ; ({ didDocument } = deactivateDidTransactionResult.asConfirmed)


  // Release the connection to the blockchain.
  await api.disconnect()
}
createDid().then(() => { })

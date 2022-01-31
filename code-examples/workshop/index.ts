import * as Kilt from '@kiltprotocol/sdk-js'
import * as BN from 'bn.js'

import { account } from './1_1_account'
import { accounts } from './1_2_account'
import { keystoreGeneration } from './2_1_did'
import { createClaimerLightDid } from './2_2_did'
import { createAttesterFullDid } from './2_3_did'
import { createCType } from './3_1_ctypeFromSchema'
import { ctypeStored } from './3_2_ctypeFromSchema'
import { createClaim } from './4_1_claim'
import { createRequestForAttestation } from './4_2_claim'
import { requestForAttestationReconstructed } from './5_1_attestation'
import { verifyRequest } from './5_2_attestation'
import { attestCredential } from './5_3_attestation'
import { verifyCredential } from './6_verification'
import { createPresentation } from './7_1_verification-with-nonce'
import { verifyPresentation } from './7_2_verification-with-nonce'

const wsAddress = 'wss://peregrine.kilt.io/parachain-public-ws'
export const nonce = '3a66fc28-379c-4443-9537-a00169fd76a4'
export const crendetialJSONString =
  '{"request":{"claim":{"cTypeHash":"0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5","contents":{"name":"Alice","age":25},"owner":"5GoNkf6WdbxCFnPdAnYYQyCjAKPJgLNxXwPjwTh6DGg6gN3E"},"claimOwner":{"nonce":"ad7935b2-6e3c-4e2c-8437-3e5ea956d12e","hash":"0x3a463e6395762fcb06997560a77472bdb5b83ddde7b938eb6635cb5d3eb6fdbb"},"cTypeHash":{"nonce":"bb5e2cc9-b703-4701-91a2-40172fa40fa6","hash":"0xe80c3fd8dd7c3bbdafd0dd0e012006a3bdc1b42856ac70337178780b15c2a121"},"legitimations":[],"delegationId":null,"claimHashTree":{"name":{"nonce":"9c0ffa36-87fd-4880-87ca-1c5377fc3af2","hash":"0x909656276e1a8d1cf78b2d92c984b125b9a1224d37197f67f64bdbb0fdb79aff"},"age":{"nonce":"6b1cab69-a204-433b-9ae2-935d9c9da410","hash":"0x19ed5ccfb988d71812154fb4c519e1081134940ec7ad28cb55fd32c11d041cec"}},"rootHash":"0xe98671c41a7ee662ddc72e25e120bdd364a627dc1bfaac875141fc29e6cd51d1","claimerSignature":"0x00af688b7604f34bd2ec087449fa3526c1730f326a1355bd95a8ab0cf80fa8d0ab786b35e4bac12ceccc72f315a8fe3842cb7ad28966a9c9c44ee26700ca69d30b","privacyEnhancement":null},"attestation":{"claimHash":"0xe98671c41a7ee662ddc72e25e120bdd364a627dc1bfaac875141fc29e6cd51d1","cTypeHash":"0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5","delegationId":null,"owner":"5HTEzvVT5bQxJTYPiDhRUw4GHarQVs66sFQEpQDUNT6MyoJr","revoked":false}}'
export const dataToVerifyJSONString = JSON.stringify({
  crendetialStruct: JSON.parse(crendetialJSONString),
})
const faucetSeed = process.env['FAUCET_SEED']
const EXISTENTIAL_DEPOSIT = new BN(10 ** 13)
const ENDOWMENT = EXISTENTIAL_DEPOSIT.muln(1000)

export async function test_all() {
  await Kilt.init({ address: wsAddress })

  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'sr25519',
  })

  const faucetAcc = keyring.addFromMnemonic(faucetSeed)
  let ctype: Kilt.CType
  let claimerLightDid: Kilt.Did.LightDidDetails
  let attesterFullDid: Kilt.IDidResolvedDetails
  let keystore: Kilt.Did.DemoKeystore
  console.group('Account-1')
  account()
  console.groupEnd()
  console.group('Account-2')
  const { claimer, claimerMnemonic, attester, attesterMnemonic } = accounts()

  await Promise.all([
    Kilt.Balance.makeTransfer(claimer.address, ENDOWMENT) //
      .then((tx) => Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAcc))
      .then(() => console.log('Successfully transferred tokens to claimer')),
    Kilt.Balance.makeTransfer(attester.address, ENDOWMENT) //
      .then((tx) => Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAcc))
      .then(() => console.log('Successfully transferred tokens to attester')),
    ,
  ])
  console.groupEnd()
  console.group('Did-1')
  keystore = await keystoreGeneration()
  console.groupEnd()
  console.group('Did-2')
  ;({ claimerLightDid, keystore } = await createClaimerLightDid(
    keystore,
    claimerMnemonic
  ))
  console.groupEnd()
  console.group('Did-3')
  ;({ attesterFullDid, keystore } = await createAttesterFullDid(
    attester,
    attesterMnemonic,
    keystore
  ))
  console.groupEnd()
  console.group('ctypeFromSchema-1')
  ctype = createCType()
  console.groupEnd()
  console.group('ctypeFromSchema-2')
  ctype = await ctypeStored(attester, attesterFullDid, ctype, keystore)
  console.groupEnd()

  console.group('claim1')
  let claim = createClaim(claimerLightDid, ctype)
  console.groupEnd()
  console.group('claim2')
  let rfa = await createRequestForAttestation(claimerLightDid, claim, keystore)
  console.groupEnd()
  console.group('attestation1')
  requestForAttestationReconstructed(rfa)
  console.groupEnd()
  console.group('attestation2')
  await verifyRequest(rfa)
  console.groupEnd()

  console.group('attestation3')
  let crendetial = await attestCredential(
    attester,
    attesterFullDid,
    rfa,
    keystore
  )
  console.groupEnd()
  console.group('verification1')
  await verifyCredential(crendetial)
  console.groupEnd()
  console.group('verification2')
  let presentation = await createPresentation(
    claimerLightDid,
    crendetial,
    nonce,
    keystore
  )
  console.groupEnd()
  console.group('verification3')
  await verifyPresentation(presentation, nonce)
  console.groupEnd()

  await Kilt.disconnect()
}

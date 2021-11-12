import * as Kilt from '@kiltprotocol/sdk-js'

import * as BN from 'bn.js'

import { main as account1 } from './1_1_account'
import { main as account2 } from './1_2_account'
import { main as did1 } from './2_1_did'
import { main as did2 } from './2_2_did'
import { main as did3 } from './2_3_did'
import { main as ctypeFromSchema1 } from './3_1_ctypeFromSchema'
import { main as ctypeFromSchema2 } from './3_2_ctypeFromSchema'
import { main as claim1 } from './4_1_claim'
import { main as claim2 } from './4_2_claim'
import { main as attestation1 } from './5_1_attestation'
import { main as attestation2 } from './5_2_attestation'
import { main as attestation3 } from './5_3_attestation'
import { main as verification1 } from './6_verification'
import { main as verification2 } from './7_1_verification-with-nonce'
import { main as verification3 } from './7_2_verification-with-nonce'

const wsAddress = 'wss://peregrine.kilt.io'
export const nonce = '3a66fc28-379c-4443-9537-a00169fd76a4'
export const crendetialJSONString =
  '{"request":{"claim":{"cTypeHash":"0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5","contents":{"name":"Alice","age":25},"owner":"5GoNkf6WdbxCFnPdAnYYQyCjAKPJgLNxXwPjwTh6DGg6gN3E"},"claimOwner":{"nonce":"ad7935b2-6e3c-4e2c-8437-3e5ea956d12e","hash":"0x3a463e6395762fcb06997560a77472bdb5b83ddde7b938eb6635cb5d3eb6fdbb"},"cTypeHash":{"nonce":"bb5e2cc9-b703-4701-91a2-40172fa40fa6","hash":"0xe80c3fd8dd7c3bbdafd0dd0e012006a3bdc1b42856ac70337178780b15c2a121"},"legitimations":[],"delegationId":null,"claimHashTree":{"name":{"nonce":"9c0ffa36-87fd-4880-87ca-1c5377fc3af2","hash":"0x909656276e1a8d1cf78b2d92c984b125b9a1224d37197f67f64bdbb0fdb79aff"},"age":{"nonce":"6b1cab69-a204-433b-9ae2-935d9c9da410","hash":"0x19ed5ccfb988d71812154fb4c519e1081134940ec7ad28cb55fd32c11d041cec"}},"rootHash":"0xe98671c41a7ee662ddc72e25e120bdd364a627dc1bfaac875141fc29e6cd51d1","claimerSignature":"0x00af688b7604f34bd2ec087449fa3526c1730f326a1355bd95a8ab0cf80fa8d0ab786b35e4bac12ceccc72f315a8fe3842cb7ad28966a9c9c44ee26700ca69d30b","privacyEnhancement":null},"attestation":{"claimHash":"0xe98671c41a7ee662ddc72e25e120bdd364a627dc1bfaac875141fc29e6cd51d1","cTypeHash":"0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5","delegationId":null,"owner":"5HTEzvVT5bQxJTYPiDhRUw4GHarQVs66sFQEpQDUNT6MyoJr","revoked":false}}'
export const dataToVerifyJSONString = JSON.stringify({
  crendetialStruct: JSON.parse(crendetialJSONString),
})
const faucetSeed = process.env['FAUCET_SEED']

async function test_all() {
  await Kilt.init({ address: wsAddress })

  const keyring = new Kilt.Utils.Keyring({
    ss58Format: 38,
    type: 'ed25519',
  })

  const faucetAcc = keyring.addFromSeed(faucetSeed)
  let keystore
  let claimerLightDid
  let attesterFullDid
  let attester
  let attesterMnemonic
  let claimer
  let ctype
  console.group('Account-1')
  claimer = account1()
  attester = account1()
  console.groupEnd()

  await Promise.all([
    Kilt.Balance.makeTransfer(claimer.address, new BN(5), 0) //
      .then((tx) => Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAcc))
      .then(() => console.log('Successfully transferred tokens to claimer')),
    Kilt.Balance.makeTransfer(attester.address, new BN(5), 0) //
      .then((tx) => Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAcc))
      .then(() => console.log('Successfully transferred tokens to attester')),
    ,
  ])

  console.group('Account-2')
  account2()
  console.groupEnd()
  console.group('Did-1')
  keystore = await did1()
  console.groupEnd()
  console.group('Did-2')
  ;[claimerLightDid, keystore] = await did2(keystore)
  console.groupEnd()
  console.group('Did-3')
  ;[attesterFullDid, keystore] = await did3(
    attester,
    attesterMnemonic,
    keystore
  )
  console.groupEnd()
  console.group('ctypeFromSchema-1')
  ctype = ctypeFromSchema1()
  console.groupEnd()
  console.group('ctypeFromSchema-2')
  ctype = await ctypeFromSchema2(attester, attesterFullDid, ctype, keystore)
  console.groupEnd()

  console.group('claim1')
  let claim = claim1(claimer, ctype)
  console.groupEnd()
  console.group('claim2')
  let rfa = await claim2(claimerLightDid, claim, keystore)
  console.groupEnd()
  console.group('attestation1')
  attestation1(JSON.stringify(rfa))
  console.groupEnd()
  console.group('attestation2')
  await attestation2(rfa)
  console.groupEnd()

  console.group('attestation3')
  let crendetial = await attestation3(attester, attesterFullDid, rfa, keystore)
  console.groupEnd()
  console.group('verification1')
  await verification1(crendetial)
  console.groupEnd()
  console.group('verification2')
  let presentation = await verification2(
    claimerLightDid,
    crendetial,
    nonce,
    keystore
  )
  console.groupEnd()
  console.group('verification3')
  await verification3(presentation, nonce, keystore)
  console.groupEnd()
}

test_all()

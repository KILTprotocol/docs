import * as Kilt from '@kiltprotocol/sdk-js'

import * as BN from 'bn.js'

import { main as identity1 } from './1_1_identity'
import { main as identity2 } from './1_2_identity'
import { main as ctypeFromSchema } from './2_ctypeFromSchema'
import { main as claim1 } from './3_1_claim'
import { main as claim2 } from './3_2_claim'
import { main as attestation1 } from './4_1_attestation'
import { main as attestation2 } from './4_2_attestation'
import { main as attestation3 } from './4_3_attestation'
import { main as verification1 } from './5_verification'
import { main as verification2 } from './6_1_verification-with-nonce'
import { main as verification3 } from './6_2_verification-with-nonce'

const wsAddress = 'wss://peregrine.kilt.io'
export const nonce = '3a66fc28-379c-4443-9537-a00169fd76a4'
export const signedNonce =
  '0x007f6f168bc6f0eda62b3af50bb86a1e5043fa33ec6e44e21ea66c6edda2a51d57de844c3105943a79bfad3851e056687566ee47fac58384a6fb92aaa8c0561800'
export const attestedClaimJSONString =
  '{"request":{"claim":{"cTypeHash":"0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5","contents":{"name":"Alice","age":25},"owner":"5GoNkf6WdbxCFnPdAnYYQyCjAKPJgLNxXwPjwTh6DGg6gN3E"},"claimOwner":{"nonce":"ad7935b2-6e3c-4e2c-8437-3e5ea956d12e","hash":"0x3a463e6395762fcb06997560a77472bdb5b83ddde7b938eb6635cb5d3eb6fdbb"},"cTypeHash":{"nonce":"bb5e2cc9-b703-4701-91a2-40172fa40fa6","hash":"0xe80c3fd8dd7c3bbdafd0dd0e012006a3bdc1b42856ac70337178780b15c2a121"},"legitimations":[],"delegationId":null,"claimHashTree":{"name":{"nonce":"9c0ffa36-87fd-4880-87ca-1c5377fc3af2","hash":"0x909656276e1a8d1cf78b2d92c984b125b9a1224d37197f67f64bdbb0fdb79aff"},"age":{"nonce":"6b1cab69-a204-433b-9ae2-935d9c9da410","hash":"0x19ed5ccfb988d71812154fb4c519e1081134940ec7ad28cb55fd32c11d041cec"}},"rootHash":"0xe98671c41a7ee662ddc72e25e120bdd364a627dc1bfaac875141fc29e6cd51d1","claimerSignature":"0x00af688b7604f34bd2ec087449fa3526c1730f326a1355bd95a8ab0cf80fa8d0ab786b35e4bac12ceccc72f315a8fe3842cb7ad28966a9c9c44ee26700ca69d30b","privacyEnhancement":null},"attestation":{"claimHash":"0xe98671c41a7ee662ddc72e25e120bdd364a627dc1bfaac875141fc29e6cd51d1","cTypeHash":"0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5","delegationId":null,"owner":"5HTEzvVT5bQxJTYPiDhRUw4GHarQVs66sFQEpQDUNT6MyoJr","revoked":false}}'
export const dataToVerifyJSONString = JSON.stringify({
  signedNonce,
  attestedClaimStruct: JSON.parse(attestedClaimJSONString),
})
const faucetSeed = process.env['FAUCET_SEED']

async function test_all() {
  await Kilt.init({ address: wsAddress })

  const faucetAcc = Kilt.Identity.buildFromSeedString(faucetSeed)

  console.group('Identity-1')
  let claimer = identity1()
  let attester = identity1()
  console.groupEnd()
  console.group('Identity-2')
  identity2()
  console.groupEnd()
  console.group('ctypeFromSchema')
  let ctype = ctypeFromSchema()
  console.groupEnd()

  await Promise.all([
    Kilt.Balance.makeTransfer(claimer.address, new BN(5), 0) //
      .then((tx) => Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAcc))
      .then(() => console.log('Successfully transferred tokens to claimer')),
    Kilt.Balance.makeTransfer(attester.address, new BN(5), 0) //
      .then((tx) => Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAcc))
      .then(() => console.log('Successfully transferred tokens to attester')),
    await ctype
      .store()
      .then((tx) => Kilt.BlockchainUtils.signAndSubmitTx(tx, faucetAcc))
      .then(() => console.log('Stored workshop Ctype on chain'))
      .catch(
        (err) => `couldn't store CType. It probably already exists. ${err}`
      ),
  ])

  console.group('claim1')
  let claim = await claim1(claimer, ctype)
  console.groupEnd()
  console.group('claim2')
  let rfa = claim2(claimer, claim)
  console.groupEnd()
  console.group('attestation1')
  let rfa2 = attestation1(JSON.stringify(rfa))
  console.groupEnd()
  console.group('attestation2')
  let assert1 = await attestation2(rfa)
  console.groupEnd()

  console.group('attestation3')
  let attestedClaim = await attestation3(attester, rfa)
  console.groupEnd()
  console.group('verification1')
  await verification1(attestedClaim)
  console.groupEnd()
  console.group('verification2')
  let signedNonde = await verification2('12', attestedClaim, claimer)
  console.groupEnd()
  console.group('verification3')
  await verification3(attestedClaim, '12', signedNonde)
  console.groupEnd()
}

test_all()

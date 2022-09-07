import { Keyring } from '@polkadot/api'
import { blake2AsU8a } from '@polkadot/util-crypto'

import * as Kilt from '@kiltprotocol/sdk-js'

import { createCompleteFullDid } from '../did/05_full_did_complete'
import { createSimpleLightDid } from '../did/01_light_did_simple'

import { createAttestation } from './03_create_attestation'
import { createDriversLicenseCType } from './01_create_ctype'
import { createPresentation } from './04_create_presentation'
import { reclaimAttestationDeposit } from './07_reclaim_attestation_deposit'
import { requestAttestation } from './02_request_attestation'
import { revokeCredential } from './06_revoke_attestation'
import { verifyPresentation } from './05_verify_presentation'

export async function runAll(
  submitterAccount: Kilt.KiltKeyringPair,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  console.log('Running claiming flow...')
  const keyring = new Keyring({ ss58Format: Kilt.Utils.ss58Format })
  const signCallback: Kilt.SignCallback<Kilt.SigningAlgorithms> = async ({
    data,
    alg,
    publicKey
  }) => {
    // Taken from https://github.com/polkadot-js/common/blob/master/packages/keyring/src/pair/index.ts#L44
    const address =
      alg === 'ecdsa-secp256k1' ? blake2AsU8a(publicKey) : publicKey
    const key = keyring.getPair(address)

    return { data: key.sign(data), alg }
  }
  const claimerLightDid = await createSimpleLightDid(keyring)
  const attesterFullDid = await createCompleteFullDid(
    keyring,
    submitterAccount,
    undefined,
    signCallback,
    resolveOn
  )

  console.log('1 claming) Create CType')
  const ctype = await createDriversLicenseCType(
    attesterFullDid,
    submitterAccount,
    signCallback,
    resolveOn
  )
  console.log('2 claiming) Create credential')
  const credential = await requestAttestation(
    claimerLightDid,
    signCallback,
    ctype
  )
  console.log('3 claiming) Create attestation and credential')
  await createAttestation(
    attesterFullDid,
    submitterAccount,
    signCallback,
    credential,
    resolveOn
  )
  console.log('4 claiming) Create selective disclosure presentation')
  const presentation = await createPresentation(
    claimerLightDid,
    credential,
    signCallback,
    ['name', 'id']
  )
  console.log('5 claiming) Verify selective disclosure presentation')
  await verifyPresentation(presentation)
  console.log('6 claiming) Revoke credential')
  await revokeCredential(
    attesterFullDid,
    submitterAccount,
    signCallback,
    credential,
    false,
    resolveOn
  )
  console.log('7 claiming) Reclaim attestation deposit')
  await reclaimAttestationDeposit(submitterAccount, credential, resolveOn)

  console.log('Claiming flow completed!')
}

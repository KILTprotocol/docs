import Web3 from 'web3'
const web3 = new Web3()

import { hexToU8a, u8aToString } from '@polkadot/util'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkAccountToDid(
  did: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  linkedAccountPrivateKey: string,
  linkedAccountAddress: string,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  const blockNo = await api.query.system.number()
  // the challenge will be valid for 300 blocks (~1h)
  const validTill = blockNo.addn(300)

  // We build the challenge that needs to be signed by the ethereum account
  const challenge = u8aToString(
    await Kilt.Did.getLinkingChallenge(did, validTill)
  )

  // sign the challenge
  const signResult = await web3.eth.accounts.sign(
    challenge,
    linkedAccountPrivateKey
  )

  // build the arguments for the extrinsic that links ethereum account and DID
  const accountLinkingParameters = await Kilt.Did.getLinkingArguments(
    linkedAccountAddress,
    validTill,
    hexToU8a(signResult.signature),
    'ethereum'
  )

  // Build the actual extrinsic
  const accountLinkingTx = await api.tx.didLookup.associateAccount(
    ...(accountLinkingParameters as any as [any, any])
  )
  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(
    did,
    accountLinkingTx,
    signCallback,
    submitterAccount.address
  )

  // sign and submit the extrinsic to the blockchain
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAccountLinkingTx,
    submitterAccount
  )
}

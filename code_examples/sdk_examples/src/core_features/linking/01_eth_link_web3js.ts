import Web3 from 'web3';
const web3 = new Web3();

import { hexToString, hexToU8a } from "@polkadot/util";

import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkAccountToDid(
  did: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  linkedAccountPrivateKey: string,
  linkedAccountAddress: string,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // The account to be linked has to sign a specifically-crafted payload to prove
  // willingness to be linked to the DID.
  const linkingAccountSignatureGeneration = async (
    signaturePayload: string | Uint8Array
  ) => {
    let signResult;
    if (typeof signaturePayload === "string") {
      console.log("string", signaturePayload)
      signResult = await web3.eth.accounts.sign(hexToString(signaturePayload), linkedAccountPrivateKey)
    } else {
      console.log("u8a", Kilt.Utils.Crypto.u8aToHex(signaturePayload))
      signResult = await web3.eth.accounts.sign(Kilt.Utils.Crypto.u8aToHex(signaturePayload), linkedAccountPrivateKey)
    }
    console.log("signature", signResult)
    return hexToU8a(signResult.signature)
  }

  console.log("linkedAccountAddress", linkedAccountAddress)
  // Authorizing the tx with the full DID and including a signature of the linked account
  // results in the provided account being linked to the DID authorizing the operation.
  const accountLinkingParameters = await Kilt.Did.associateAccountToChainArgs(
    linkedAccountAddress,
    did,
    linkingAccountSignatureGeneration
  )
  const accountLinkingTx = await api.tx.didLookup.associateAccount(
    ...(accountLinkingParameters as any as [any, any])
  )
  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(
    did,
    accountLinkingTx,
    signCallback,
    submitterAccount.address
  )

  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAccountLinkingTx,
    submitterAccount
  )
}

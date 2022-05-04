import type { BlockNumber, Extrinsic } from '@polkadot/types/interfaces'
import { ApiPromise, WsProvider } from '@polkadot/api'
import type { MultiSignature, AccountId } from '@polkadot/types/interfaces'
import { KeypairType } from '@polkadot/util-crypto/types'
import type { AnyNumber } from '@polkadot/types/types'
import type { HexString } from '@polkadot/util/types'
import { hexToU8a, u8aToHex } from '@polkadot/util'
import { wrapBytes } from '@polkadot/extension-dapp/wrapBytes'
import {
  encodeAddress,
  signatureVerify,
  cryptoWaitReady,
} from '@polkadot/util-crypto'
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from '@polkadot/extension-dapp'
import { SubmittableExtrinsic } from '@polkadot/api/promise/types'

type SignatureType = MultiSignature['type']

type LinkingSignerCallback = (
  payload: HexString,
  address: string
) => Promise<HexString>

export const connect = async () => {
  const ENDPOINT_URL = 'wss://peregrine.kilt.io/parachain-public-ws'
  const provider = new WsProvider(ENDPOINT_URL)
  return await ApiPromise.create({
    provider,
  })
}

const getApi = async (): Promise<ApiPromise> => {
  return await connect()
}
export const getFilteredAccounts = async () => {
  await web3Enable('web3 account linking')
  const allAccounts = await web3Accounts()

  const api = await getApi()
  const genesisHash = api.genesisHash.toHex()
  const filteredAccounts = allAccounts.filter(
    (account) =>
      !account.meta.genesisHash || account.meta.genesisHash === genesisHash
  )
  api.disconnect()
  return { allAccounts, filteredAccounts }
}
export const submitDidCall = async (
  payerAddress: string,
  extrinsic: SubmittableExtrinsic
) => {
  const injector = await web3FromAddress(payerAddress)
  return extrinsic.signAndSend(payerAddress, { signer: injector.signer })
}
export const linkDidWithAccount = async (
  linkAccountAddress: string,
  did: string,
  payerAccountAddress: string
) => {
  const api = await getApi()
  await cryptoWaitReady()
  const ss58Prefix = api.registry.chainSS58
  const encodedAccountAddress = encodeAddress(linkAccountAddress, ss58Prefix)
  const injector = await web3FromAddress(encodedAccountAddress)
  const didID = did.split(':').pop()
  if (!didID) throw Error('DID Address Undefined')
  console.log(didID)
  console.log(encodedAccountAddress)
  const extrinsic = await authorizeLinkWithAccount(
    api,
    encodedAccountAddress,
    didID,
    async (payload, address) => {
      if (!injector.signer.signRaw)
        throw Error("Extension doesn't support signRaw")
      const result = await injector.signer.signRaw({
        data: payload,
        address,
        type: 'bytes',
      })
      return result.signature
    }
  )
  api.disconnect()
  const signedOutputFromSporran =
    await window.kilt.sporran.signExtrinsicWithDid(
      extrinsic.toHex(),
      payerAccountAddress
    )
  const genericExtrinsic = api.createType(
    'Extrinsic',
    signedOutputFromSporran.signed
  )
  const submittableExtrinsic = api.tx.did.submitDidCall(
    genericExtrinsic.args[0],
    genericExtrinsic.args[1]
  )
  const txHash = submitDidCall(payerAccountAddress, submittableExtrinsic)

  // logs txhash. isFinalised Callback not implemented yet.
  console.log(txHash)
}
function getMultiSignatureTypeFromKeypairType(
  keypairType: KeypairType
): SignatureType {
  switch (keypairType) {
    case 'ed25519':
      return 'Ed25519'
    case 'sr25519':
      return 'Sr25519'
    case 'ecdsa':
      return 'Ecdsa'
    default:
      throw new Error(`Unsupported signature algorithm '${keypairType}'`)
  }
}
export async function getAccountSignedAssociationTx(
  api: ApiPromise,
  account: string | AccountId,
  signatureValidUntilBlock: AnyNumber,
  signature: Uint8Array | HexString,
  sigType: SignatureType
): Promise<Extrinsic> {
  return api.tx.didLookup.associateAccount(account, signatureValidUntilBlock, {
    [sigType]: signature,
  })
}

export async function authorizeLinkWithAccount(
  api: ApiPromise,
  accountAddress: string,
  didIdentifier: string,
  signingCallback: LinkingSignerCallback,
  nBlocksValid = 20
): Promise<Extrinsic> {
  const blockNo = await api.query.system.number<BlockNumber>()
  const validTill = blockNo.addn(nBlocksValid)
  const signMe = wrapBytes(
    api.createType('(AccountId32, u64)', [didIdentifier, validTill]).toU8a()
  )
  const signature = hexToU8a(
    await signingCallback(u8aToHex(signMe), accountAddress)
  )

  //  let result = {
  //    crypto: 'none',
  //    isValid: false,
  //  }

  //  if (!result.isValid) {
  //    try {
  //      result = signatureVerify(signMe, signature, accountAddress)
  //    } catch {
  //      console.log('Can not verify signature')
  //    }
  //  }
  const result = signatureVerify(signMe, signature, accountAddress)
  if (!result.isValid) throw new Error('signature not valid')
  console.log('SIGNATURE IS VALID')
  const sigType = getMultiSignatureTypeFromKeypairType(
    result.crypto as KeypairType
  )
  return getAccountSignedAssociationTx(
    api,
    accountAddress,
    validTill,
    signature,
    sigType
  )
}

import * as Kilt from '@kiltprotocol/sdk-js'
import { main as attestCredential } from './dapp/attestCredential'
import { createFullDid } from '../workshop/attester/generateDid'
import { domainLinkageCType } from './dapp/domainLinkageCtype'
import { main as formatCredential } from './dapp/formatCredential'
import { generateAccount } from '../workshop/attester/generateAccount'
import { generateKeypairs as generateAttesterKeypairs } from '../workshop/attester/generateKeypairs'
import { main as getDomainLinkageCredential } from './dapp/domainLinkageClaim'
import { getFunds } from '../getFunds'
import { main as signPresentation } from './dapp/signPresentation'

export async function testDapp(account: Kilt.KeyringPair, wssAddress: string) {
  console.log('Running the dapp examples!')

  Kilt.ConfigService.set({ submitTxResolveOn: Kilt.Blockchain.IS_IN_BLOCK })
  const api = await Kilt.connect(wssAddress)

  // Setup attester account.
  const { account: dappAccount } = await generateAccount()

  await getFunds(api, account, dappAccount.address, 4)

  // Create attester DID & ensure CType.
  const { fullDid: attesterDid, mnemonic: attesterMnemonic } =
    await createFullDid(dappAccount)
  const { assertionMethod: assertionMethodKey } =
    generateAttesterKeypairs(attesterMnemonic)

  const { domainLinkageCredential } = getDomainLinkageCredential({
    domainLinkageCType,
    didUri: attesterDid.uri
  })
  await attestCredential({
    api,
    didUri: attesterDid.uri,
    dappAccount,
    assertionMethodKey,
    domainLinkageCredential
  })
  const { domainLinkagePresentation } = await signPresentation({
    didUri: attesterDid.uri,
    assertionMethodKey,
    domainLinkageCredential
  })
  const pseudoVc = await formatCredential({ api, domainLinkagePresentation })
  console.log(JSON.stringify(pseudoVc))
}

import * as Kilt from '@kiltprotocol/sdk-js'
import { main as attestCredential } from './dapp/04_attest_credential'
import { createFullDid } from '../workshop/attester/generateDid'
import { main as formatCredential } from './dapp/05_format_credentia'
import { generateAccount } from '../workshop/attester/generateAccount'
import { generateKeypairs as generateAttesterKeypairs } from '../workshop/attester/generateKeypairs'
import { main as getDomainLinkageCType } from './dapp/01_domain_linkage_ctype'
import { main as getDomainLinkageCredential } from './dapp/02_domain_linkage_claim'
import { getFunds } from '../getFunds'
import { main as signPresentation } from './dapp/03_sign_presentation'

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

  const domainLinkageCType = await getDomainLinkageCType()
  const { domainLinkageCredential } = getDomainLinkageCredential({
    domainLinkageCType,
    didUri: attesterDid.uri
  })
  await attestCredential({
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
  const pseudoVc = await formatCredential(domainLinkagePresentation)
  console.log(JSON.stringify(pseudoVc))
}

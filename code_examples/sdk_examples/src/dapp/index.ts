
import * as Kilt from '@kiltprotocol/sdk-js'
import { main as attestCredential } from './dapp/attestCredential'
import chalk from 'chalk'
import { createFullDid } from '../workshop/attester/generateDid'
import { domainLinkageCType } from './dapp/domainLinkageCtype'
import { main as domainLinkageCredential } from './dapp/domainLinkageClaim'
import { generateAccount } from '../workshop/attester/generateAccount'
import { generateKeypairs as generateAttesterKeypairs } from '../workshop/attester/generateKeypairs'
import { getFunds } from '../getFunds'

export async function testDapp(faucetAccount: Kilt.KeyringPair, wssAddress: string) {
  console.log('Running the dapp examples!')

  Kilt.ConfigService.set({ submitTxResolveOn: Kilt.Blockchain.IS_IN_BLOCK })
  const api = await Kilt.connect(wssAddress)

  // Setup attester account.
  const { account: attesterAccount } = await generateAccount()

  await getFunds(api, faucetAccount, attesterAccount.address, 4);

  // Create attester DID & ensure CType.
  const { fullDid: attesterDid, mnemonic: attesterMnemonic } =
    await createFullDid(attesterAccount)
  const { attestation: attestationKey } = generateAttesterKeypairs(attesterMnemonic)

  const credential = domainLinkageCredential(domainLinkageCType, attesterDid.uri);
  await attestCredential(api, attesterDid.uri, attesterAccount, attestationKey, credential)
}

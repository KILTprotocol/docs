// import type {
//   KiltAddress,
//   SignerInterface,
//   KeyringPair,
//   MultibaseKeyPair,
//   TransactionSigner,
//   ICType
// } from "@kiltprotocol/types";
// import { Keyring } from "@polkadot/keyring";
// import { BN } from "@polkadot/util";
import * as Kilt from "@kiltprotocol/sdk-js";
// import { Multikey } from "@kiltprotocol/utils";
// import { BalanceUtils, Blockchain } from "@kiltprotocol/chain-helpers";
// import { CType } from "@kiltprotocol/credentials";
import { mnemonicGenerate, randomAsU8a } from '@polkadot/util-crypto'


import { attestingFlow } from './issuer/issueCredential'
import { createDid } from './issuer/generateDid'
import { ensureStoredCtype } from './issuer/generateCtype'
import { generateAccount } from './issuer/generateAccount'
// import { generateKeypairs as generateAttesterKeypairs } from './issuer/generateKeypairs'
// import { generateKeypairs as generateClaimerKeypairs } from './holder/generateKeypairs'
import { generateCredential } from './holder/generateCredential'
// import { generateLightDid } from './holder/generateLightDid'
import { getFunds } from '../getFunds'
import { verificationFlow } from './verify'

export async function testWorkshop(
) {
  console.log('Running the workshop!')
// TODO: Move to env var

  const api = await Kilt.connect("wss://peregrine.kilt.io");
  console.log("connected");

  // ┏━━━━━━━━━━━━┓
  // ┃ Get funds  ┃
  // ┗━━━━━━━━━━━━┛
  //
// TODO: Move to env var
  const faucetAccount = Kilt.generateKeypair({
    type: "sr25519",
    seed: "0xe566550fec3ca23d80dfe9e9529ada463b93fc33f17219c1089de906f7253f1c",
  });
  const authenticationKeyPair = Kilt.generateKeypair({ type: "ed25519" });
  const submitterAccount = Kilt.generateKeypair({
    type: "ed25519",
    seed: "frequent arrange trap mouse shove labor rookie bitter absent club field exhibit",
  });
  console.log("keypair generation complete");

  await getFunds(faucetAccount, submitterAccount, 5);
  console.log("Successfully transferred tokens");



  // Setup attester account.
  // const { account: attesterAccount } = await generateAccount()

  // Setup claimer & create a credential.
  // const claimerMnemonic = mnemonicGenerate()
  // const { authentication } = generateClaimerKeypairs(claimerMnemonic)
  // const lightDid = generateLightDid(claimerMnemonic)

  // generateCredential(lightDid.uri, {
  //   age: 27,
  //   name: 'Karl'
  // })

  // await getFunds(account, attesterAccount.address, 5)

  // Create attester DID & ensure CType.
  const { fullDid: attesterDid } = await createDid(submitterAccount, authenticationKeyPair)
}

testWorkshop()
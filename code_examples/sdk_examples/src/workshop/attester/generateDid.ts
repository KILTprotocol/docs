import { config as envConfig } from 'dotenv'

import * as Kilt from '@kiltprotocol/sdk-js'
// TODO: No longer needed in content, but needed for tutorial?
// TODO: What to do?
// TODO: And generateAccount needed changes, why?
import { generateAccount } from './generateAccount'

export async function createFullDid() {
  const api = await Kilt.connect(process.env.WSS_ADDRESS as string);
  const accountMnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string;
  const { account } = generateAccount(accountMnemonic);
  const { type, publicKey } = account;

  const txs = [
    api.tx.did.createFromAccount({ [type]: publicKey }),
    api.tx.did.setAttestationKey({ [type]: publicKey }),
  ];

  console.log("Creating DID from account…");
  await Kilt.Blockchain.signAndSubmitTx(api.tx.utility.batch(txs), account)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  const didUri = Kilt.Did.getFullDidUriFromKey(account);
  const encodedFullDid = await api.call.did.query(Kilt.Did.toChain(didUri));
  const { document } = Kilt.Did.linkedInfoFromChain(encodedFullDid);

  if (!document) {
    throw new Error("Full DID was not successfully created.");
  }

  console.log(document);
}

// Don't execute if this is imported by another file.
if (require.main === module) {
  ;(async () => {
    envConfig()

    try {
      await Kilt.connect(process.env.WSS_ADDRESS as string)

      // Load attester account
      const accountMnemonic = process.env.ATTESTER_ACCOUNT_MNEMONIC as string
      const { account } = generateAccount(accountMnemonic)
      const { mnemonic, fullDid } = await createFullDid(account)

      console.log('\nsave following to .env to continue\n')
      console.error(`ATTESTER_DID_MNEMONIC="${mnemonic}"\n`)
      console.error(`ATTESTER_DID_URI="${fullDid.uri}"\n`)
    } catch (e) {
      console.log('Error while creating attester DID')
      throw e
    }
  })()
}

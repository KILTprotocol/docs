import type {
  KiltAddress,
  SignerInterface,
  KeyringPair,
  MultibaseKeyPair,
  TransactionSigner,
  ICType,
  DidDocument,
} from "@kiltprotocol/types";
import { Keyring } from "@polkadot/keyring";
import { BN } from "@polkadot/util";
import * as Kilt from "@kiltprotocol/sdk-js";
import { Multikey } from "@kiltprotocol/utils";
import { Blockchain, BalanceUtils } from "@kiltprotocol/chain-helpers";
import { CType } from "@kiltprotocol/credentials";
  // ┏━━━━━━━━━━━━┓
  // ┃ create DID ┃
  // ┗━━━━━━━━━━━━┛
  //
  // Generate the DID-signed creation tx and submit it to the blockchain with the specified account.
  // The DID Document will have one Verification Key with an authentication relationship.
  //
  // Note the following parameters:
  // - `api`: The connected blockchain api.
  // - `signers`: The keys for verification materials inside the DID Document. For creating a DID,
  // only the key for the authentication verification method is required.
  // - `submitter`: The account used to submit the transaction to the blockchain. Note: the submitter account must have
  // enough funds to cover the required storage deposit.
  // - `fromPublicKey`: The public key that will feature as the DID's initial authentication method and will determine the DID identifier.

  // Much like current workshop, these two accoutns can be the same
  export async function createDid(  
    submitterAccount: MultibaseKeyPair, 
    authenticationKeyPair:MultibaseKeyPair) : 
      Promise<{
      fullDid: DidDocument
    }> {
      const api = Kilt.ConfigService.get('api')

    const transactionHandler = Kilt.DidHelpers.createDid({
    api,
    signers: [authenticationKeyPair],
    submitter: submitterAccount,
    fromPublicKey: authenticationKeyPair.publicKeyMultibase,
  });

  // The `createDid` function returns a transaction handler, which includes two methods:
  // - `submit`: Submits a transaction for inclusion in a block, resulting in its execution in the blockchain runtime.
  // - `getSubmittable`: Produces transaction that can be submitted to a blockchain node for inclusion, or signed and submitted by an external service.

  // Submit transaction.
  // Note: `submit()` by default, waits for the block to be finalized. This behaviour can be overwritten
  // in the function's optional parameters.
  const didDocumentTransactionResult = await transactionHandler.submit();

  // Once the transaction is submitted, the result should be checked.
  // For the sake of this example, we will only check if the transaction went through.
  if (didDocumentTransactionResult.status !== "confirmed") {
    console.log(didDocumentTransactionResult.status);
    throw new Error("create DID failed");
  }

  // Get the DID Document from the transaction result.
  let { didDocument, signers } = didDocumentTransactionResult.asConfirmed;

  console.log("Did created");
  // DID verify step currently
  return { fullDid: didDocument }
}
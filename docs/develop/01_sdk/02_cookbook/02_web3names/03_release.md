---
id: web3name-release
title: Release a web3name
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import Release from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/web3names/04_release.ts';
import ReclaimDeposit from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/web3names/05_reclaim_deposit.ts';

If a web3name is no longer needed, either the DID owner or the deposit payer can release it, with deposit being released and returned to the original payer.

## Releasing a Web3name by the DID Owner

In the case of the DID owner willing to release the web3name, the following snippet provides a reference implementation on how to achieve that.

<TsJsBlock>
  {Release}
</TsJsBlock>

In the code above, the releaseWeb3Name function takes the following parameters:

* **did**: The DID URI of the owner.
* **submitterAccount**: The keyring pair of the submitter.
* **signCallback**: The sign extrinsic callback function. This function is used to sign the extrinsic, read more that in [the SignCallback section](../07_signCallback.md).

The function `releaseWeb3Name` uses the KILT SDK to create a *web3name release transaction* using `api.tx.web3Names.releaseByOwner`.
It then authorizes the transaction using the `Kilt.Did.authorizeTx` method and submits the authorized transaction to the blockchain using `Kilt.Blockchain.signAndSubmitTx`.
This process ensures that the release transaction is signed by the DID owner.

If the web3name is being released by the deposit payer, the signature of the DID owner is not required; a regular signed extrinsic can be submitted to the KILT blockchain, as shown below.

## Reclaiming a Web3name Deposit by the Deposit Payer

<TsJsBlock>
  {ReclaimDeposit}
</TsJsBlock>

In the code above, the `reclaimWeb3NameDeposit` function takes the following parameters:

* **submitterAddress**: The keyring pair of the submitter.
* **web3Name**: The web3name for which the deposit is to be reclaimed.

The function creates a web3name deposit reclaim transaction using `api.tx.web3Names.reclaimDeposit` and submits the signed transaction to the blockchain using `Kilt.Blockchain.signAndSubmitTx`.
Since the web3name is being released by the deposit payer, the signature of the DID owner is not required.

By using these code examples, you can easily release or reclaim the deposit of a web3name, depending on the scenario and the role of the entity initiating the release.

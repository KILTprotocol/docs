---
id: 01-parity-signer
title: KILT & Parity Signer
---

For the more advanced users, it is possible to configure [Parity Signer](https://www.parity.io/technologies/signer/) to work as a cold or hot wallet with KILT and PolkadotJS Apps.
Please follow the installation instructions for iOS and Android from the official website.

## Configure Parity Signer to support KILT

To add KILT Spiritnet to Parity Signer, visit the [PolkadotJS Apps page for KILT Spiritnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com%2F#), then go to **KILT Spiritnet > Settings > Metadata** and scan the QRCode.
This will result in a new network, KILT Spiritnet, being added to the list of networks for which Parity Signer can create accounts and sign transactions.

![](/img/polkadotjs.png)

## Create a KILT account

Once the KILT blockchain has been added, you can proceed to create your KILT account.
To do this, when generating a new account, select the **KILT Spiritnet** network.
To verify that the right account has been generate, please check that it starts with the digit `4`, e.g., `4tFvFquHAZXFs3RiDUxAsHYjAvprLCBDMQZQqax8HqEK3qX2`.

## Add the account to PolkadotJS Apps

After the account has been created, return to PolkadotJS Apps, and in **Accounts > Accounts > My accounts** select **Add via Qr**.
In there, scan the QR that is shown by Parity Signer when clicking on the new KILT account.
Once added, the account type will be **external**, meaning that PolkadotJS Apps does not hold the private keys of the account.

![](/img/polkadotjs-new-qr.png)

## Sign transactions in PolkadotJS Apps

With the KILT account set up as external, it is now possible to sign transactions using Parity Signer.
To do this, prepare any transaction, e.g., a token transfer, and PolkadotJS apps will ask you to sign it with the external app managing the account.

![](/img/polkadotjs-tx.png)

At this point, scan the QR-encoded transaction with the Parity Signer, and then show the QR-encoded **signed** transaction back to PolkadotJS Apps.
This will submit the transaction tot he KILT blockchain.

![](/img/polkadotjs-signing.png)
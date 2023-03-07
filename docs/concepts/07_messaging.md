---
id: messaging
title: KILT Messaging
---
import CodeBlock from '@theme/CodeBlock';

<!-- Taken from https://github.com/webpack-contrib/raw-loader/issues/91#issuecomment-648830498 -->
import encryptedMessage from '@site/scripts/out/encrypted-message.json.raw!=!raw-loader!@site/scripts/out/encrypted-message.json';

Distributed trust on the internet only works if credentials and other information can be exchanged securely, and communicating parties can be confident that they are not being fooled or eavesdropped on by bad actors.
To help with that, KILT provides a **transport-agnostic messaging layer** that helps with securely exchanging data between the respective owners of two DIDs.

This messaging layer provides **authenticated end-to-end encryption** – the gold standard in secure communication – in a way that hides the security of the technologies used for transporting the message over the internet – be it sending the encrypted messages via email, or posting them to and fetching them from a centralized or decentralized messaging service.

:::info
The messaging layer enables secure communication between two digital identities – DIDs.
A necessary condition for secure communication with a given person or organization is to make sure that the DID on the other side of the communication channel is really controlled by the other party in order to avoid attacks such as *Man in the Middle* (MitM) attacks.

<!--TODO: point to a resource on how to solve that bootstrapping problem; could include well-known DID publishing, Credentials by a third party that's already trusted, and potentially web3names-->

:::

To be able to communicate, the two DIDs need to expose **key agreement public keys** for that purpose (a.k.a., an **encryption key**).
In order to send a message to the other party, a DID owner (let's call her **Alice**) looks up her peer's (let's call him **Bob**) encryption public key, which can be part of either a [full DID](./02_did.md#full-dids) or a [light DID](./02_did.md#light-dids).
Using this key in combination with her secret encryption key, **Alice** can now encrypt the message such that only she and **Bob** can decrypt it.

**Bob** can decrypt this message after looking up **Alice's** encryption key.
An additional _message authentication code_ (MAC) added during encryption and verified on decryption protects against manipulation of the encrypted data.
As long as both parties keep their secret keys well protected, the combination of these measures allows **Bob** to be confident that if the message decrypts successfully, it could have only been encrypted by **Alice** and has not been read or tampered with by some malicious third party while in transport.

While encrypted, the message travels in a compact and privacy-preserving envelope format that only exposes data that the recipient needs to be able to decrypt.

<CodeBlock className="language-json">
  {encryptedMessage}
</CodeBlock>

The encrypted message not only references the DIDs of sender and recipient, it also references the unique identifier of the keys that were used in encryption.
Therefore, this scheme still works if a DID should expose multiple encryption keys from which a message sender may choose.

:::caution
While no one can read or change what is inside an encrypted message even if they intercept it while traveling on the network, a sophisticated attacker may try to guess what is inside and trick either side of the channel by resubmitting a copy of that message later.
For a detailed developer-oriented guide about how to protect against *replay attacks*, see our [Replay Protection Cookbook section](../develop/01_sdk/02_cookbook/06_messaging/02_replay_protection.md).
:::

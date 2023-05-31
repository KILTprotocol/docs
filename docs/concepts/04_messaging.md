---
id: messaging
title: KILT Messaging
---

Distributed trust on the internet only works if you can exchange credentials and other information securely, and be confident that you are not being fooled or eavesdropped on by bad actors.
To help with that, KILT provides a **transport-agnostic messaging layer** that helps with securely exchanging data between the respective owners of two DIDs.

This messaging layer provides **authenticated end-to-end encryption** – the gold standard in secure communication – so that you do not need to worry about the security of the technologies you use for transporting the message over the internet – be it sending the encrypted message via email, or posting them to and fetching them from a centralized or decentralized messaging service.

:::info
The messaging layer enables secure communication between two digital identities – DIDs.
A necessary condition for secure communication with a given person or organisation is that you are sure that the DID you are exchanging messages with is really controlled by them.

<!--TODO: point to a resource on how to solve that bootstrapping problem; could include well-known DID publishing, credentials by a third party that's already trusted, and potentially web3names-->

:::

To be able to communicate, the two DIDs need to expose **key agreement public keys** for that purpose (a.k.a. an **encryption key**).
In order to send a message to the other party, a DID owner (let's call her **Alice**) looks up her peer's encryption public key, which can be part of either a [Full](./02_did.md#full-dids) or a [Light DID](./02_did.md#light-dids).
Using this key in combination with her secret encryption key, **Alice** can now encrypt the message such that only she and the owner of the secret key matching the peer's public key can decrypt it.

The receiving party to whom this message is addressed (say, **Bob**) can decrypt this message after looking up **Alice's** encryption key.
An additional _message authentication code_ (MAC) added during encryption and verified on decryption protects against manipulation of the encrypted data.
As long as both parties keep their secret keys well protected, the combination of these measures allows **Bob** to be confident that if the message decrypts successfully, it could have only been encrypted by **Alice** and has not been read or tampered with by some malicious third party while in transport.

While encrypted, the message travels in a compact and privacy-preserving envelope format that only exposes data that the recipient requires to be able to decrypt.

```ts
{
  receiverKeyUri: 'did:kilt:4qMx…66m4#0x4af3…cdcb' // indicates the key to be used when decrypting
  senderKeyUri: 'did:kilt:4qtP…m507#0x65ac…a282' // indicates the key used to encrypt
  ciphertext: '0xdeadbeef…' // message contents in unreadable, encrypted form
  nonce: '0x1234…' // random data required for decryption
}
```

Because we do not simply reference the DIDs of sender and recipient, but the unique identifier of the keys that were used in encryption, this scheme still works if a DID should expose multiple encryption keys from which a message sender may choose.

:::caution
While no one can read nor change what is inside an encrypted message even if they intercept it while traveling on the network, a sophisticated attacker may try to guess what is inside and trick you or others by resubmitting a copy of that message later.
You can learn how to protect against these _replay attacks_ in our [Advanced Concepts section](./05_Advanced%20Concepts/01_replay_protection.md).
:::

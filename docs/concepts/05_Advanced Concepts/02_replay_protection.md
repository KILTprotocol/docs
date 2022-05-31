---
id: replay_protection
title: Replay Protection
---

A sophisticated attacker may intercept and copy encrypted messages sent to you or by you in an attempt to impersonate the sender of the message later on.
This attack is limited, because the attacker cannot change or even read the data in the encrypted message, and will not be able to read or react to any data sent in response.
But in certain cases, simply resending the message can still be quite effective.

This concerns, for example, credential submissions traveling from claimers to verifiers, where an attacker may attempt to convince the verifier to accept a stolen credential submission again.
To give an example for illustration purposes, think of a paywall or a turnstile that allows passage only upon presentation of a valid access credential.
Copying a message that grants the sender access to the requested resource could help an attacker gain access without possessing access rights themselves.

To prevent these types of attacks, KILT offers two separate mechanisms.

Malicious actors can be prevented from stealing and reusing credential presentation submissions if verifiers require claimers to include a random and unique piece of data in their presentation, which the verifier has produced and added to their credential request.
More information on how this challenge-response mechanism is implemented in KILT can be found [here](<!--TODO: link to verification section-->).

In case you are using the KILT messaging for communication, you can also take effective measures against replay protection [based on the unique identifier and timestamp](../../develop/01_sdk/02_Cookbook/05_Messaging/04_replay_protection.md) that are part of every message.

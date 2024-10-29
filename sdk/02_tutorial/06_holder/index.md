---
id: holder
title: 👤 Holder
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section covers the steps undertaken by the <span className="label-role holder">Holder</span>.

Here's an overview:

1. [Create a DID](./01_did.md), which is the identity used to interact with <span className="label-role issuer">Issuers</span> and <span className="label-role verifier">Verifiers</span> and receive a verifiable credential from an Issuer.
2. Create a copy of received credential with relevant data for presenter.
3. Present the claim to a <span className="label-role verifier">Verifier</span>.

## What is a Holder?

Holders are a crucial part of the Self-Sovereign Identity system.

A Holder is an individual or institution that makes a claim or statement about their identity or abilities.
They can use their identity credentials to prove these claims, and third-party institutions verify them.

Anyone with an account can be a Holder.
You need a DID, to complete a CType, and create a claim.

They store their identity credentials in their digital wallets, so they decide which information to provide to which service.
They have full control over their data and decide which data to share, where, and how.
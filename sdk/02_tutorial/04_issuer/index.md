---
id: issuer
title: 🏢 Issuer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section of the workshop covers creating the <span className="label-role issuer">Issuer</span> code. The steps are the following:

1. [Create an account](./01_account.md) to pay for all transactions and storage deposits.
2. [Create a DID](./02_did.md), which is the identity used to create attestations.

  While you can always switch the KILT account and pay deposits and fees with any account you like, your DID stays the same and is the way Claimers identify and trust you.

1. Before you can attest claims, [you need a CType](./03_ctype.md) that describes and gives context to what you attest.
2. Once you have a way to pay fees and deposits, have an identity, and a CType, [you can create attestations](../06_attestation.md).
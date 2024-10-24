---
id: issuer
title: 🏢 Issuer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section of the workshop covers creating the <span className="label-role issuer">Issuer</span> code. The steps are the following:

1. [Create an account](./01_account.md) to pay for all transactions and storage deposits.
2. [Create a DID](./02_did.md), which is the identity used to create Credentials.

  :::tip

  While you can pay deposits and fees with any KILT account you like, your DID stays the same and is the way Holders identify and trust you.

  :::

3. Before you can issue a Credential, [you need a CType](./03_ctype.md) that describes and gives context to what you attest.
4. Once you have a way to pay fees and deposits, have an identity, and a CType, [you can create issue a Credential](../06_issue_credential.md).

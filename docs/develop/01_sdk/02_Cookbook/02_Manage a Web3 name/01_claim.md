---
id: web3name-claim
title: Claim a Web3 name
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!@site/code-examples/core_features/web3names/1_web3name.ts';

Web3 names are user-friendly aliases for a KILT DID.
They serve the same purpose that domain names do for IP addresses: who knows the IP address under the `kilt.io` domain name? 🤷🏽‍♀️

Each Web3 name is globally unique within the KILT space, and is composed of a sequence of a minimum of 3 to a maximum of 32 characters taken from a specific character set to enhance human redability and reduce the chances of "two Web3 names looking the same, despite being different".
The character set include only:
- *lowercase letters*, from `a` to `z`
- *digits* from `0` to `9`
- the symbols `-` and `_`

A regex that would match all and only the allowed Web3 names would be the following:

```
^[a-z0-9\_\-]{3,32}$
```

In the global URI space, Web3 names are prefixed with the `w3n:` URI namespace. 
For example, the full URI for the Web3 name `example-web3name` would be `w3n:example-web3name`.

A Web3 name can be claimed if it has currently no owner, using the following snippet as reference.

<CodeBlock className="language-js">
  {Example1}
</CodeBlock>

The claiming process requires the reservation of a deposit that is freed upon Web3 name release.

Once claimed, the Web3 name will start appearing whenever the DID of its owner is resolved, for instance via the [Universal Resolver](https://dev.uniresolver.io/#did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g). For more information about Web3 names and DIDs, please refer to the official [KILT DID Specification](https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md).
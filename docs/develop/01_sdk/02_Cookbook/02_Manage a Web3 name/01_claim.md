---
id: web3name-claim
title: Claim a Web3 name
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!@site/code-examples/core_features/web3names/1_web3name.ts';

A Web3 name can be claimed if it has currently no owner, using the following snippet as reference.

<CodeBlock className="language-js">
  {Example1}
</CodeBlock>

The claiming process requires the reservation of a deposit that is freed upon Web3 name release.

Once claimed, the Web3 name will start appearing whenever the DID of its owner is resolved, for instance via the [Universal Resolver](https://dev.uniresolver.io/#did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g). For more information about Web3 names and DIDs, please refer to the official [KILT DID Specification](https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md).
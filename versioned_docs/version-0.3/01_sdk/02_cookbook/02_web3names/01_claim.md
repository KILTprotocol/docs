---
id: web3name-claim
title: Claim a web3name
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import Claim from '!!raw-loader!@site/versioned_docs/0.3-sdk_examples/src/core_features/web3names/01_claim.ts';

A web3name can be claimed if it currently has no owner, using the following snippet as reference.

<TsJsBlock>
  {Claim}
</TsJsBlock>

The claiming process requires the reservation of a deposit that is freed upon web3name release.

Once claimed, the web3name will start appearing whenever the DID of its owner is resolved, for instance via the [Universal Resolver](https://dev.uniresolver.io/#did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g).
For more information about web3names and DIDs, see the official [KILT DID Specification](https://github.com/KILTprotocol/spec-kilt-did/blob/main/README.md).

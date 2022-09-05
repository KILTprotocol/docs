---
id: web3name-claim
title: Claim a web3name
---

import TsJsBlock from '@site/src/components/TsJsBlock';

import ClaimTs from '!!raw-loader!@site/code_examples/core_features/web3names/01_claim.ts';
import ClaimJs from '!!raw-loader!@site/code_examples/core_features/_js/web3names/01_claim.js';

A web3name can be claimed if it has currently no owner, using the following snippet as reference.

<TsJsBlock tsSnippet={ClaimTs} jsSnippet={ClaimJs} />

The claiming process requires the reservation of a deposit that is freed upon web3name release.

Once claimed, the web3name will start appearing whenever the DID of its owner is resolved, for instance via the [Universal Resolver](https://dev.uniresolver.io/#did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g).
For more information about web3names and DIDs, please refer to the official [KILT DID Specification](https://github.com/KILTprotocol/spec-kilt-did/blob/main/README.md).

---
id: web3names
title: Web3 names
---
import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/core_features/web3names/1_web3name.ts';
import Example2 from '!!raw-loader!../../../code-examples/core_features/web3names/2_web3name.ts';
import Example3 from '!!raw-loader!../../../code-examples/core_features/web3names/3_web3name.ts';

Web3 names are user-friendly aliases for a KILT DID.
They serve the same purpose that domain names do for IP addresses: who knows what are all the IP addresses under the `google.com` domain name? 🤷🏽‍♀️

Each Web3 name is globally unique, and is composed of a sequence of a minimum of 3 to a maximum of 32 characters taken from a specific character set to enhance human redability and reduce the changes of "two Web3 names looking the same, despite being different".
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

## Claiming a Web3 name

A Web3 name can be claimed if it has currently no owner, using the following snippet as reference.

<CodeBlock className="language-js">
  {Example1}
</CodeBlock>

The claiming process requires the reservation of a deposit that is freed upon Web3 name release.

Once claimed, the Web3 name will start appearing whenever the DID of its owner is resolved, for instance via the [Universal Resolver](https://dev.uniresolver.io/#did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g). For more information about Web3 names and DIDs, please refer to the official [KILT DID Specification](https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md).

## Releasing a Web3 name

Whenever the Web3 name is not needed anymore, either the DID owner or the deposit payer can release it, with the previously reserved deposit going back to the original payer.

In the case of the DID owner willing to release the Web3 name, the following snippet provides a reference implementation on how to achieve that.

<CodeBlock className="language-js">
  {Example2}
</CodeBlock>

On the other hand, releasing the Web3 name by the deposit payer does not require the signature of the DID owner, meaning that a regular signed extrinsic can be submitted to the KILT blockchain, as shown below.

<CodeBlock className="language-js">
  {Example3}
</CodeBlock>
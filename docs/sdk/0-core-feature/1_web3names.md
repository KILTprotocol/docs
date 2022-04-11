---
id: web3names
title: Web3 names
---
import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/core_features/web3names/1_web3name.ts';
import Example2 from '!!raw-loader!../../../code-examples/core_features/web3names/2_web3name.ts';
import Example3 from '!!raw-loader!../../../code-examples/core_features/web3names/3_web3name.ts';
import Example4 from '!!raw-loader!../../../code-examples/core_features/web3names/4_web3name.ts';

import Example5 from '!!raw-loader!../../../code-examples/core_features/linking/1_account_linking.ts';
import Example6 from '!!raw-loader!../../../code-examples/core_features/linking/2_account_linking.ts';
import Example7 from '!!raw-loader!../../../code-examples/core_features/linking/3_account_linking.ts';
import Example8 from '!!raw-loader!../../../code-examples/core_features/linking/4_account_linking.ts';
import Example9 from '!!raw-loader!../../../code-examples/core_features/linking/5_account_linking.ts';

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

## DIDs, Web3 names, and account linking

There is a one-to-one relationship between DIDs and Web3 names.
This means that a KILT DID can be linked to at most one Web3 name, and a Web3 name can be claimed only by one DID.

The KILT SDK provides easy-to-use querying functions to perform both operations as shown below.

<CodeBlock className="language-js">
  {Example4}
</CodeBlock>

### Link accounts to DIDs and Web3 names

Beyond linking a Web3 name, KILT allows DID owners to link multiple accounts under the same DID.
These accounts are not specific to the KILT blockchain but can reference any chain within the Kusama ecosystem.
Each account <-> DID link requires the payment of a small deposit, which is returned whenever the link is removed.

For DIDs that have also claimed a Web3 name, the linking feature opens up the way to a host of possibilities, e.g., showing the Web3 name of a collator's account on the [KILT stakeboard](https://stakeboard.kilt.io/).

An account can be linked to a DID in one of two ways:

1. The account to be linked generates a signature over the payload `<Bytes>(SubmitterDid, BlockNumberExpiration)</Bytes>`, which is the default encoding of the PolkadotJS extension:

<CodeBlock className="language-js">
  {Example5}
</CodeBlock>

2. The account submitting the linking transaction is linked to the DID authorizing such transaction:

<CodeBlock className="language-js">
  {Example6}
</CodeBlock>

### Query the Web3 name for an account

Once an account has been linked to a DID, its Web3 name can be retrieved via the SDK:

<CodeBlock className="language-js">
  {Example7}
</CodeBlock>

### Unlink an account from its DID and viceversa

Similarly to how a new account <-> DID link is created, removing a link can happen in one of two ways:

1. The DID owner submits a transaction indicating which account to unlink:

<CodeBlock className="language-js">
  {Example8}
</CodeBlock>

2. The linked account submits a transaction indicating that the link with the DID should be removed:

<CodeBlock className="language-js">
  {Example9}
</CodeBlock>
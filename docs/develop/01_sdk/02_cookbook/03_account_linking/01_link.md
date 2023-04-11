---
id: account-link
title: Link an Account to a KILT DID
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import SubAccLink from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/linking/01_sub_link.ts';
import EthAccLink from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/linking/01_eth_link.ts';
import EthWeb3AccLink from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/linking/01_eth_link_web3js.ts';
import EthMetamaskAccLink from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/linking/01_eth_link_metamask.ts';
import SenderLink from '!!raw-loader!@site/code_examples/sdk_examples/src/core_features/linking/02_sender_link.ts';

Sometimes there is the need to link a DID to an account publicly.
The link makes it possible to lookup a DID for an account.
The other directions is also possible.
With a DID you can lookup a list of linked account.

Linking accounts can be useful when your account should have an identity.
E.g. as a collator, you might want to provide some public information so that delegator can better decide who earned their stake.

An account can be linked to a DID in one of two ways.
Either the account that sends the transaction links itself to the DID, or the sender is unrelated to the DID and a third account is linked.
In the latter case, a challenge needs to be signed using the third account, to prove ownership.

The second option is useful in cases where the account that should be linked doesn't own KILT tokens and the transaction is paid for by a third party.
This option also allows to link account schemes that are not native to the Spiritnet Blockchain.
Right now the only other address scheme supported are ethereum accounts.

:::warning Don't use linked accounts for asset transfers

Don't use these linked accounts for asset transfers.
Since these accounts are not limited to KILT accounts, but can be used on any chain, the recipient might not be able to access the transferred asset on other chains.
When a link to an account on a different Polkadot chain is created, this account might only be usable on this specific chain.

If you want transfer assets to a DID have a look at [the asset transfer service endpoint](https://github.com/KILTprotocol/spec-KiltTransferAssetRecipientV1).

:::

## Linking the sender to a DID

Link the sender of the transaction to the DID.
The sender will provide the deposit and pay the fees.
They will also be linked to the DID.

<TsJsBlock>
  {SenderLink}
</TsJsBlock>

## Linking an account to a DID

Link another account to the DID.
The sender will provide the deposit and pay the fees, but will not be linked to the DID in any way.
The account that should be linked must sign a challenge to prove that the account agrees to be linked.

The proof contains the DID that the account will be linked to and an expiration date (in terms of blocks), to prevent replay attacks.
The proof will only be valid up until the blocknumber is reached.

With this option you can link addresses that are supported by the Spiritnet blockchain (Sr25519, Ed25519, Ecdsa), but also ethereum addresses.

<Tabs
  defaultValue="substrate-link"
>
    <TabItem value="substrate-link" label="Substrate">
        <TsJsBlock>
            {SubAccLink}
        </TsJsBlock>
    </TabItem>
    <TabItem value="eth-link" label="Ethereum (polkadot-js)">
        <TsJsBlock>
            {EthAccLink}
        </TsJsBlock>
    </TabItem>
    <TabItem value="eth-link-web3js" label="Ethereum (web3.js)">
        <TsJsBlock>
            {EthWeb3AccLink}
        </TsJsBlock>
    </TabItem>
    <TabItem value="eth-link-metamask" label="Ethereum (MetaMask)">
        Refer to the <a href="https://docs.metamask.io/guide/signing-data.html#personal-sign">Metamask documentation</a> for further information.
        <TsJsBlock>
            {EthMetamaskAccLink}
        </TsJsBlock>
    </TabItem>
</Tabs>

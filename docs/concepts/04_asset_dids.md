---
id: asset-dids
title: AssetDIDs
---

import ThemedImage from '@theme/ThemedImage';

KILT DIDs are suitable for use cases that involve "active" participants.
For example, entities that can act of their will (a person, an organization, a DAO).

There are classes of entities that represent "passive" participants.
That is, they can be "used" by active participants within a given use case.
KILT defines these class of participants as **assets**.
As with traditional KILT users, assets also need to be uniquely identified, with an *AssetDID*.

An example of a valid AssetDID is the following: `did:asset:eip155:1.erc721:0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb`.
This AssetDID refers to the [CryptoPunks NFT collection][cryptopunks-nft].

## AssetDID structure

An AssetDID is a *generative* identifier, meaning that it doesn't depend nor rely on any information stored anywhere.
Rather, given the asset to identify, it's **always** possible to generate its AssetDID.
The reverse is also true. Given an AssetDID, it's always possible to dereference it into its components, which, together, uniquely identify a given asset.

AssetDIDs always start with the `did:asset` prefix, and then contain a *chain* component (namespace + reference) and an *asset* component (namespace + reference + identifier).

### Chain namespace and reference
<!-- Why all the Ethereum chat? -->
Together, the namespace and reference identify the (blockchain) network on which the asset lives.

In the case of NFTs, this represents the blockchain on which the smart contract is deployed.
Different deployments of the same network have the same chain namespace but a different reference.
For instance, both the Ethereum mainnet and the Goerli testnet have a chain namespace of `eip155`, but the former is identified by the reference `1` (as the mainnet), while the Goerli testnet is identified by the reference `5`.

### Asset namespace, reference and identifier

Similar to their chain counterparts, you use asset *namespaces* to distinguish among different asset classes within the same environment.
In the case of NFTs, a smart contract could support both ERC20 (fungible) and ERC721 (non-fungible) tokens, hence the namespace distinguishes between the two token types.

Each asset namespace defines the semantics and the meaning of asset references and asset identifiers within that namespace.
In the example of Ethereum-based NFTs, the asset *reference* identifies the smart contract address that stores the NFT.

**The combination of asset namespace + asset reference is sufficient to identify an NFT collection on a given network.**

For some assets, for instance NFTs, it's possible to specify an asset *identifier*, used to refer to a single item within the collection.
In the example of the CryptoPunks collection, the AssetDID could be extended with an additional `:1005` to now refer to the [CryptoPunk piece #1005][cryptopunk-1005] rather than to the CryptoPunks collection as a whole.

![][cryptopunk-1005-image]

*Credits to OpenSea for the NFT image above.*

For a more technical explanation of AssetDIDs, please visit our [official specification][asset-did-spec].

[cryptopunks-nft]: https://opensea.io/collection/cryptopunks
[cryptopunk-1005]: https://opensea.io/assets/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1005
[cryptopunk-1005-image]: https://i.seadn.io/gae/qoR1cWuIZzjlrNVcSMAzhrwDvXNtMxaYuDbNqkc_J5WGGqMSrF0wzO7K2MnSCEBLG8G8pZyJPqV7eTGt4wGwret85sbXJBYoAkypdQ?auto=format&w=3840
[chainlist]: https://chainlist.org/
[asset-did-spec]: https://github.com/KILTprotocol/spec-asset-did
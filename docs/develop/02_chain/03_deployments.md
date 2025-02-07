---
id: deployments
title: Deployments and Services
---

KILT has two public deployments: a production one, called **Spiritnet**, and a test/dev one, called **Peregrine**.
To learn more about how to set up a node for either environment, please check our [fullnode set up guide](./04_fullnode.md).

**Spiritnet** is the production blockchain, and has been live since September 2021.

**Peregrine** is the public testnet, which can be used to build and test products that use the KILT blockchain, before switching to Spiritnet.

|     Service      |                                                                                               Spiritnet                                                                                                |                                                  Peregrine                                                   |
| :--------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
|      Faucet      |                                                                                                   -                                                                                                    |                                       [Peregrine Faucet][pere-faucet]                                        |
| Public Endpoints | [KILT Foundation: wss://spiritnet.kilt.io][spirit-wss-kilt]<br/>[OnFinality: wss://spiritnet.api.onfinality.io/public-ws][spirit-wss-onfinality]<br/>[Dwellir: wss://kilt-rpc.dwellir.com][spirit-wss-dwellir] |                              [KILT Foundation: wss://peregrine.kilt.io][pere-wss-kilt]                               |
|      Wallet      |                                                                                  [Sporran](https://www.sporran.org/)                                                                                   | [GitHub](https://github.com/KILT-Foundation/sporran-extension/releases) (manual loading into the browser) |
|    Staking UI    |                           Collators' performance (view only): [Stakekilt](https://stakekilt.com/)<br/>Delegation staking platform: [Stakeboard](https://stakeboard.kilt.io)                            |                                                      -                                                       |
|  Governance UI   |                                                                                  [Polkassembly][spirit-polkassembly]                                                                                   |                                                      -                                                       |
|  Chain Explorer  |                                                                                [Subscan](https://spiritnet.subscan.io)                                                                                 |                                                      -                                                       |
|   w3n Service    |                                                                                        [w3n.id](https://w3n.id)                                                                                        |                                                                           |
|  Link Accounts   |                                                                    [linking.trusted-entity.io](https://linking.trusted-entity.io/)                                                                     |                                     |
|     DIDsign      |                                                                                   [didsign.io](https://didsign.io/)                                                                                    |                                                                  |
|    SocialKYC     |                                                                                 [socialkyc.io](https://socialkyc.io/)                                                                                  |                               [test.socialkyc.io](https://test.socialkyc.io/)                                |

[spirit-polkassembly]: https://kilt.polkassembly.network
[spirit-wss-kilt]: https://polkadot.js.org/apps/?rpc=wss://spiritnet.kilt.io
[spirit-wss-onfinality]: https://polkadot.js.org/apps/?rpc=wss://spiritnet.api.onfinality.io/public-ws
[spirit-wss-dwellir]: https://polkadot.js.org/apps/?rpc=wss://kilt-rpc.dwellir.com
[pere-faucet]: https://faucet.peregrine.kilt.io
[pere-wss-kilt]: https://polkadot.js.org/apps/?rpc=wss://peregrine.kilt.io

---
id: deployments
title: Deployments and Services
---

KILT has two public deployments: a production one, called **Spiritnet**, and a test/dev one, called **Peregrine**.
To learn more about how to set up a node for either environment, please check our [fullnode set up guide](./04_fullnode.md).

**Spiritnet** is the production blockchain, and has been live since September 2021.

**Peregrine** is the public testnet, which can be used to build and test products that use the KILT blockchain, before switching to Spiritnet.

|     Service      |                                                                                               Spiritnet                                                                                                |                                              Peregrine                                              |
| :--------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
|      Faucet      |                                                                                                   -                                                                                                    |                                   [Peregrine Faucet][pere-faucet]                                   |
| Public Endpoints | [BOTLabs: wss://spiritnet.kilt.io][spirit-wss-kilt]<br/>[OnFinality: wss://spiritnet.api.onfinality.io/public-ws][spirit-wss-onfinality]<br/>[Dwellir: wss://kilt-rpc.dwellir.com][spirit-wss-dwellir] |                [BOTLabs: wss://peregrine.kilt.io/parachain-public-ws][pere-wss-kilt]                |
|      Wallet      |                                                                                  [Sporran](https://www.sporran.org/)                                                                                   | [GitHub](https://github.com/BTE-Trusted-Entity/sporran-extension) (manual loading into the browser) |
|    Staking UI    |                           Collators' performance (view only): [Stakekilt](https://stakekilt.com/)<br/>Delegation staking platform: [Stakeboard](https://stakeboard.kilt.io)                            |                                                  -                                                  |
|  Governance UI   |                                                                                  [Polkassembly][spirit-polkassembly]                                                                                   |                                                  -                                                  |
|  Chain Explorer  |                                                                                [Subscan](https://spiritnet.subscan.io)                                                                                 |                             [Subscan](https://kilt-testnet.subscan.io)                              |
|   w3n service    |                                                                                        [w3n.id](https://w3n.id)                                                                                        |       [https://main.dwo3t819w2m3x.amplifyapp.com](https://main.dwo3t819w2m3x.amplifyapp.com)        |
[spirit-polkassembly]: https://kilt.polkassembly.network
[spirit-wss-kilt]: https://polkadot.js.org/apps/?rpc=wss://spiritnet.kilt.io
[spirit-wss-onfinality]: https://polkadot.js.org/apps/?rpc=wss://spiritnet.api.onfinality.io/public-ws
[spirit-wss-dwellir]: https://polkadot.js.org/apps/?rpc=wss://kilt-rpc.dwellir.com
[pere-faucet]: https://faucet.peregrine.kilt.io
[pere-wss-kilt]: https://polkadot.js.org/apps/?rpc=wss://peregrine.kilt.io/parachain-public-ws

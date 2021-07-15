---
id: about-kilt
title: About KILT
---
import useBaseUrl from '@docusaurus/useBaseUrl';

**[KILT][website] is an open-source blockchain protocol for issuing self-sovereign verifiable, revocable, anonymous credentials and enabling trust market business models in the Web 3.0.**

## Explore

###  KILT Blockchain
<img width="40" src={useBaseUrl("img/chain.jpg")} />

See the currently running nodes on our [Telemetry][telemetry]. Dive into the transactions happening on the KILT Blockchain at this very moment on our [Blockchain Explorer][chain-explorer].

###  Faucet
<img width="34" src={useBaseUrl("img/faucet.jpg")} />

Request test money from the [Mash-Net Faucet][faucet].

###  Demo-client
<img width="40" src={useBaseUrl("img/demo.jpg")} />

Check out our the [Demo Client][demo], a sample application that showcases all the features of the KILT Protocol and connects to the KILT Blockchain.

## Learn

###  Tutorial/Workshop
<img width="30" src={useBaseUrl("img/workshop.jpg")} />

Hands-on: try out the [101 Tutorial/Workshop][workshop] to quickly ramp-up on KILT's core concepts and SDK.

###  Whitepaper
<img width="30" src={useBaseUrl("img/whitepaper.jpg")} />

Dive deeper into KILT concepts by taking a look at the [Whitepaper][whitepaper].

## Build!

Writing apps for blockchain is not just for blockchain developers anymore.

###  SDK
<img width="30" src={useBaseUrl("img/tools.jpg")} />

Use the [KILT SDK][sdk-js-repo] to easily build JavaScript- or TypeScript-based applications for credentials.

###  Mobile wallet
<img width="28" src={useBaseUrl("img/phone_hand.jpg")} />

**Build a demo in no time.**
Use our [Demo Mobile Wallet][demo-mobile-wallet-repo] aka Sporran. Easily customise the claim/credential type, branding and colors, to demo your own KILT-based use case.


# Software Overview

## Codebases and Dependencies

<p align="center">
  <img width="820" src={useBaseUrl("img/overview.png")} />
  <div align="center"><sub><sup>Codebases and Dependencies</sup></sub></div>
</p>

```
🐥 = DEV environment
🐓 = PROD environment, stable
```

## Infrastructure / CI

<p align="center">
<img width="620" src={useBaseUrl("img/infrastructure.jpg")} />
  <div align="center"><sub><sup>Infrastructure</sup></sub></div>
</p>

## Source code and deployed instances

|                    | WHERE THE CODE IS                             |  WHERE IT IS DEPLOYED (AWS): DEV ENVIRONMENT🐥  | WHERE IT IS DEPLOYED (AWS): PROD ENVIRONMENT🐓 |
| ------------------ | --------------------------------------------- | :--------------------------------------------: | :-------------------------------------------: |
| Blockchain         | [mashnet-node][mashnet-node-repo]             |           full-nodes.devnet.kilt.io            |              full-nodes.kilt.io               |
| SDK                | [sdk-js][sdk-js-repo]                         |                     (not)                      |                     (not)                     |
| Demo App           | [demo-client][demo-client-repo]               |           [demo.devnet][demo.devnet]           |                 [demo][demo]                  |
| Demo App           | [demo-mobile-wallet][demo-mobile-wallet-repo] |                     (not)                      |                     (not)                     |
| Demo App Companion | [prototype-services][prototype-services-repo] |            services.devnet.kilt.io             |               services.kilt.io                |
| Demo App Companion | [faucet][faucet-repo]                         |         [faucet-devnet][faucet-devnet]         |               [faucet][faucet]                |
| Bockchain Monitor  | [telemetry][telemetry-repo]                   |                     (not)                      |            [telemetry][telemetry]             |
| Low Level App      | [polkadot-apps][polkadot-apps-repo]           | [chain-explorer.devnet][chain-explorer-devnet] |       [chain-explorer][chain-explorer]        |

# Community

Join our [Community Chat on Discord][cmy-channel]!


[cmy-channel]: https://riot.im/app/#/room/#kilt-general:matrix.org
[website]: https://kilt.io
[mashnet-node-repo]: https://github.com/KILTprotocol/mashnet-node
[sdk-js-repo]: https://github.com/KILTprotocol/sdk-js
[demo-client-repo]: https://github.com/KILTprotocol/demo-client
[demo-mobile-wallet-repo]: https://github.com/KILTprotocol/demo-mobile-wallet
[prototype-services-repo]: https://github.com/KILTprotocol/prototype-services
[faucet-repo]: https://github.com/KILTprotocol/faucet
[telemetry-repo]: https://github.com/KILTprotocol/substrate-telemetry
[polkadot-apps-repo]: https://github.com/polkadot-js/apps
[demo.devnet]: https://demo.devnet.kilt.io
[demo]: https://demo.kilt.io
[faucet-devnet]: https://faucet-devnet.kilt.io
[faucet]: https://faucet.kilt.io
[telemetry]: http://telemetry.kilt.io/#/KILT%20Testnet
[chain-explorer]: https://chain-explorer.kilt.io
[chain-explorer-devnet]: https://chain-explorer.devnet.kilt.io
[workshop]: https://kiltprotocol.github.io/kilt-workshop-101
[whitepaper]: https://kilt.io/wp-content/uploads/2020/01/KILT-White-Paper-v2020-Jan-15.pdf
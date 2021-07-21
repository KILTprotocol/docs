---
id: about-kilt
title: About KILT
---
import useBaseUrl from '@docusaurus/useBaseUrl';

**[KILT][website] is an open-source blockchain protocol for issuing self-sovereign verifiable, revocable, anonymous credentials and enabling trust market business models in the Web 3.0.**

## Explore

### KILT Blockchain
<img width="40" src={useBaseUrl("img/chain.jpg")} />

See the currently running nodes on our [Telemetry][telemetry]. Dive into the transactions happening on the KILT Blockchain at this very moment on [subscan][subscan-pere].

### Faucet
<img width="34" src={useBaseUrl("img/faucet.jpg")} />

Request test money from the [Mash-Net Faucet][faucet].

### Demo-client
<img width="40" src={useBaseUrl("img/demo.jpg")} />

Check out our the [Demo Client][demo], a sample application that showcases all the features of the KILT Protocol and connects to the KILT Blockchain.

## Learn

### Tutorial/Workshop
<img width="40" src={useBaseUrl("img/catbox.svg")} />

Hands-on: try out the [101 Tutorial/Workshop][workshop] to quickly ramp-up on KILT's core concepts and SDK.

### Whitepaper
<img width="40" src={useBaseUrl("img/whitepaper.svg")} />

Dive deeper into KILT concepts by taking a look at the [Whitepaper][whitepaper].

## Build!

Writing apps for blockchain is not just for blockchain developers anymore.

### SDK
<img width="40" src={useBaseUrl("img/tools.svg")} />

Use the [KILT SDK][sdk-js-repo] to easily build JavaScript- or TypeScript-based applications for credentials.

### Mobile wallet
<img width="28" src={useBaseUrl("img/phone_hand.jpg")} />

**Build a demo in no time.**
Use our [Demo Mobile Wallet][demo-mobile-wallet-repo] aka Sporran. Easily customise the claim/credential type, branding and colors, to demo your own KILT-based use case.


# Software Overview

## Codebases and Dependencies

<div align="center">
  <object data={useBaseUrl("img/app-overview.svg")} type="image/svg+xml">
        <span>Your browser doesn't support SVG images</span>
    </object>
  <div align="center"><sub><sup>Codebases and Dependencies</sup></sub></div>
</div>

## Source code and deployed instances

|                    | WHERE THE CODE IS                             |       Mashnet Deployment🐓        | Peregrine               | Wilt |
| ------------------ | --------------------------------------------- | :------------------------------: | ----------------------- | ---- |
| Blockchain         | [mashnet-node][mashnet-node-repo]             |     wss:/full-nodes.kilt.io      | wss://peregrine.kilt.io |      |
| SDK                | [sdk-js][sdk-js-repo]                         |              (not)               |                         |      |
| Demo App           | [demo-client][demo-client-repo]               |           [demo][demo]           |                         |      |
| Demo App           | [demo-mobile-wallet][demo-mobile-wallet-repo] |              (not)               |                         |      |
| Demo App Companion | [prototype-services][prototype-services-repo] |     https://services.kilt.io     |                         |      |
| Demo App Companion | [faucet][faucet-repo]                         |         [faucet][faucet]         |                         |      |
| Bockchain Monitor  | [telemetry][telemetry-repo]                   |      [telemetry][telemetry]      | [telemetry][telemetry-pere] |      |
| Low Level App      | [polkadot-apps][polkadot-apps-repo]           | [polkadot-apps][polka-app] | [polkadot-apps][polka-app-pere] |      |

# Community

Join our [Community Chat on Discord][cmy-channel]!


[cmy-channel]: https://discord.gg/hX4pc8rdHS
[website]: https://kilt.io
[subscan-pere]: https://kilt-testnet.subscan.io/

[mashnet-node-repo]: https://github.com/KILTprotocol/mashnet-node
[sdk-js-repo]: https://github.com/KILTprotocol/sdk-js
[demo-client-repo]: https://github.com/KILTprotocol/demo-client
[demo-mobile-wallet-repo]: https://github.com/KILTprotocol/demo-mobile-wallet
[prototype-services-repo]: https://github.com/KILTprotocol/prototype-services
[faucet-repo]: https://github.com/KILTprotocol/faucet
[telemetry-repo]: https://github.com/KILTprotocol/substrate-telemetry
[polkadot-apps-repo]: https://github.com/polkadot-js/apps

[demo]: https://demo.kilt.io
[faucet]: https://faucet.kilt.io
[telemetry]: http://telemetry.kilt.io/#/KILT%20Testnet
[telemetry-pere]: https://telemetry.kilt.io/#list/KILT%20Peregrine
[polka-app]: https://chain-explorer.kilt.io
[polka-app-pere]: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io#/explorer
[workshop]: sdk/workshop/welcome
[whitepaper]: https://kilt.io/wp-content/uploads/2020/01/KILT-White-Paper-v2020-Jan-15.pdf
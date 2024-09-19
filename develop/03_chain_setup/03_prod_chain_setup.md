---
id: prod-chain-setup
title: Connect to Spiritnet
---

For production setups it is important to run your own full node.
Running your own full node has several advantages over relying on a public full node.

The most important advantage is security.
You rely on the full node to provide you with correct data.
When using a public full node, you rely on a third party: there is no 100% guarantee that the information returned is correct.

Another important aspect when hosting a full node is availability.
Public full nodes typically do not come with a Service Level Agreement (SLA) and might go down for maintenance or are simply too slow.
With your own full node infrastructure, you can ensure that there is always enough capacity to serve your needs and your customers.

In our [blockchain section](../02_chain/01_introduction.md), you can find a [tutorial on how to run your own full node](../02_chain/04_fullnode.md).

## Connect to the Network

Replace the WebSocket address of [your script](./index.md#set-up-your-project) or application with `wss://kilt-rpc.dwellir.com`.

You can either use your own frontend or the [Polkadot JS Apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com/explorer) to interact with the chain.
Moreover, you can use [Subscan](https://spiritnet.subscan.io/) as a chain explorer.
For a full list of deployments and services, see [here](../02_chain/03_deployments.md).

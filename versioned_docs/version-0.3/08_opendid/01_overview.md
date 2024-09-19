---
id: what-is-opendid
title: Overview
---

[OpenDID](https://github.com/KILTprotocol/opendid) is an OpenID Provider implementation capable of authenticating users through their [Decentralized Identifier (DID)](/concepts/did) and Verifiable Credentials.

It follows the [OpenID Connect 1.0 Specification](https://openid.net/specs/openid-connect-core-1_0.html#Introduction) and acts as a bridge between the decentralized identity world and the centralized authentication world supporting both the implicit and Authorization Code Flow.

A major use of OpenDID is Single Sign-On (SSO), which allows users to use the same DID and credentials to sign into multiple platforms and web services. For instance, by adding a "Sign in with KILT" button to a webpage.

Although integrating that functionality into a webpage is relatively simple, configuring and running OpenDID is more involved.

:::info

To learn more about the flow of OpenDID, see the [OpenDID Flow](./02_opendid_flow.md) documentation.

:::

## Project container structure

The project consist of multiple parts that supplement and interact with each other all shipped as Docker containers and released to Docker Hub.

### opendid-setup container

The OpenDID Service needs configuration to run, which you can apply using this
container.
For example, it requires a DID to establish a session with an identity wallet.
This container creates a DID and the necessary configuration by providing an account with enough funds.

Learn more in the [run setup container documentation](./03_opendid_service.md#run-setup-container).

### kiltprotocol/opendid container

This container [runs the OpenDID Service](./03_opendid_service.md#run-the-service), both the OpenDID front and back end.
This container requires the configuration file created from the `opendid-setup` container.

### kiltprotocol/opendid-demo

This container is a [web app demo](./05_demo_project.md), including front and back end services to demonstrate the use of OpenDID.
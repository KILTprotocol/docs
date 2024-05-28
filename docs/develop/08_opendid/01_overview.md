---
id: overview
title: Overview
---


[OpenDID](https://github.com/KILTprotocol/opendid) is an OpenID Provider implementation that is capable of authenticating users through their [Decentralized Identifier (DID)](/docs/concepts/02_did.md) and Verifiable Credentials.
It follows the [OpenID Connect 1.0 Specification](https://openid.net/specs/openid-connect-core-1_0.html#Introduction) and acts as a bridge between the decentralized identity world and the centralized authentication world supporting both the implicit and Authorization Code Flow.

A major use of OpenDID is SSO (Single Sign-On) where the same DID and credentials can be used to sign into multiple
platforms and webservices for instance by adding a `Sign in with Kilt` button to a webpage.

Although, integrating that functionality into a webpage is relatively simple, configuring and running the OpenDID is a little more involved.

## Project Structure
The project is composed of multiple parts that supplement and interact with each other all shipped as docker containers
released to docker hub:

### opendid-setup:
In order to run the OpenDID Service, some configurations are needed, these configurations can be conveniently created using this
container. For example, a DID is required to establish a session with the Identity Wallet. This container creates a DID
and the necessary configurations by providing an account with enough funds. Learn more at [Run Setup
Container](/docs/develop/opendid/opendid_service#run-setup-container).

### kiltprotocol/opendid
This container [runs the OpenDID Service](/docs/develop/opendid/opendid_service#run-the-service), both the OpenDID front and backend. This container requires the
configuration file created from the `opendid-setup` container.

### kiltprotocol/opendid-demo
A [WebApp demo](/docs/develop/opendid/demo_project) including simple front and backend services to demonstrate the use of OpenDID.


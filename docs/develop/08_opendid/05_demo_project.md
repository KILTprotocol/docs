---
id: demo_project
title: Demo Project
---

The example code at [demo-project](https://github.com/KILTprotocol/opendid/tree/main/demo-project) contains a minimal application that uses OpenDID.
It's an [express](https://expressjs.com) application that exposes three things:

- A login page that handles the dispatching of the user to the opendid.
- A callback page for the openid connect flow to accept the token.
- A protected resource that only authenticated users can access.

Run the pre-configured demo application with the following command:

```bash
docker run -d -it --rm \
    --name demo-frontend \
    -p 1606:1606 \
    docker.io/kiltprotocol/opendid-demo
```

The demo page will run on [http://localhost:1606](http://localhost:1606).

For this demo to work a running OpenDID Service is needed, an Identity Wallet (e.g. [Sporran](https://www.sporran.org/))
with a DID and Credential issued by the required attester specified in the `config.yaml` file (Default is SocialKYC).

:::note
The JWT secret can be set with the `TOKEN_SECRET` environment variable inside the docker container. It must match
the one specified in the `config.yaml` file to correctly verify the `id_token`. Default is `super-secret-jwt-secret`.
:::

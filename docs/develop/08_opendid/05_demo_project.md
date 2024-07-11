---
id: demo_project
title: Demo Project
---

The example code at [demo-project](https://github.com/KILTprotocol/opendid/tree/main/demo-project) contains a minimal application that uses OpenDID.
It's an [express](https://expressjs.com) application that exposes three things:

- A login page that handles the dispatching of the user to the OpenDID service.
- A callback page for one of the OpenID Connect flows supported to accept the token.
- A protected resource that only authenticated users can access.

For the demo application to work you need a running OpenDID Service and an identity wallet that follows [the Credential API spec](https://github.com/KILTprotocol/spec-ext-credential-api) (e.g. [Sporran](https://www.sporran.org/)) with a DID and Credential issued by the required attester specified in the `config.yaml` file (Default is SocialKYC).
If you follow the steps in this section in order, you have all the necessary components for the demo application to run.

Run the pre-configured demo application with the following command:

```bash
docker run -d -it --rm \
    --name demo-frontend \
    -p 1606:1606 \
    docker.io/kiltprotocol/opendid-demo
```

The demo page runs on _http://localhost:1606_. It pre-fills the Client ID value and offers login buttons to follow the implicit or authorization code flow.

:::note
You can set the JSON web token (JWT) secret can with the `TOKEN_SECRET` environment variable inside the docker container. It must match
the one specified in the `config.yaml` file to correctly verify the `id_token`. The default is `super-secret-jwt-secret`.
:::

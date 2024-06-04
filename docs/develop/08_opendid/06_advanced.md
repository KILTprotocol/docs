---
id: advanced
title: Advanced Usage
---

## Use dynamic client management

If you want to dynamically create or remove OpenID Connect clients, you can configure the service to get its configuration from an [etcd cluster](https://etcd.io).
To do so, configure the connection parameters for the etcd cluster in the `config.yaml` file.

```yaml
etcd:
  endpoints: ["localhost:2379"]
  user: etcd-user
  password: my-password
  tlsDomainName: my.etcd.cluster.example.com
  tlsCaCert: |
    -----BEGIN CERTIFICATE-----
    <ca certificate data>
    -----END CERTIFICATE-----
  tlsClientCert: |
    -----BEGIN CERTIFICATE-----
    <client certificate data>
    -----END CERTIFICATE-----
  tlsClientKey: |
    -----BEGIN RSA PRIVATE KEY-----
    <client key data>
    -----END RSA PRIVATE KEY-----
```

All fields except `endpoints` are optional and depending on your etcd setup you might not need them.
When everything is set up you can start putting client configurations into the etcd cluster.

```bash
CLIENT_SPEC=$(cat <<EOF
{
  "requirements": [{
    "cTypeHash":"0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac",
    "trustedAttesters": [
    "did:kilt:4pehddkhEanexVTTzWAtrrfo2R7xPnePpuiJLC7shQU894aY",
    "did:kilt:4pnfkRn5UurBJTW92d9TaVLR2CqJdY4z5HPjrEbpGyBykare"
    ],
    "requiredProperties": ["Email"]
  }],
  "redirectUrls": ["http://localhost:1606/callback.html"]
}
EOF
)
CLIENT_SPEC=$(echo $CLIENT_SPEC | jq -c)
etcdctl put /opendid/clients/new-client "${CLIENT_SPEC}"
```

If you want to try this out you can first generate a config using the setup image as described above, add the etcd configuration and then start the service using the example script in _./scripts/start-demo-etcd.sh_.

### Add advanced claim checks using RHAI scripts

To add custom checks that are executed on the claims of the Verifiable Credential, you can use [Rhai](https://rhai.rs) scripts.
To try it out you have to add a `checksDirectory` entry to the client configuration in the `config.yaml` file.

Example:

```yaml
---
clients:
  example-client:
    requirements:
      - cTypeHash: "0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac"
        trustedAttesters:
          [
            "did:kilt:4pehddkhEanexVTTzWAtrrfo2R7xPnePpuiJLC7shQU894aY",
            "did:kilt:4pnfkRn5UurBJTW92d9TaVLR2CqJdY4z5HPjrEbpGyBykare",
          ]
        requiredProperties: ["Email"]
    redirectUrls:
      - http://localhost:1606/callback.html
    checksDirectory: /app/checks
```

Now create a directory `checks` in the same directory as the `config.yaml` file and add a file `example-check.rhai` with the following content:

```rust
// This is a simple example of a login policy that allows only users with an email address ending with `kilt.io` to login.

let SUFFIX = "kilt.io";

// ID_TOKEN contains the id_token as to be send to the user from the OIDC provider
let token = parse_id_token(ID_TOKEN);

// We can inspect the token and especially the `pro` sub-object that contains the users claims
if token.pro.Email.ends_with(SUFFIX) {
  // The user is allowed to login
  return true;
}

// The user is not allowed to login
return false;
```

You can now start the service bind-mounting the script and try it out.

```bash
docker run -d --rm \
    -v $(pwd)/config.yaml:/app/config.yaml \
    -v $(pwd)/checks:/app/checks \
    -e RUNTIME=spiritnet \
    -p 3001:3001 \
    docker.io/kiltprotocol/opendid:latest
```

:::note
If you wish to execute the service on the Peregrine runtime, you must modify the environment variable RUNTIME to "peregrine".
:::

When you now log in with a user that has an email address ending with `kilt.io` the service allows you to log in.
If you use a different email address, the service denies you access.

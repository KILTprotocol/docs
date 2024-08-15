---
id: advanced
title: Advanced Usage
---

## Use dynamic client management with etcd

To dynamically create or remove OpenID Connect clients, configure the service to get its configuration from an [etcd cluster](https://etcd.io) by adding the connection parameters for the cluster in the `config.yaml` file.

```yaml
etcd:
    endpoints: ['localhost:2379']
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

All fields except `endpoints` are optional.
When everything is set up you can start adding client configurations into the etcd cluster.

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

If you want to try this out, first generate a configuration file using the setup image as described in [the OpenDID service step](./03_opendid_service.md).
Then add the etcd configuration and start the service using the example script in _./scripts/start-demo-etcd.sh_.

## Add advanced claim checks using RHAI scripts

To add custom checks executed on the claims of the Verifiable Credential, use [Rhai](https://rhai.rs) scripts.
To try it, add a `checksDirectory` entry to the client configuration in the `config.yaml` file.

**Example**:

```yaml
---
clients:
    example-client:
        requirements:
            - cTypeHash: '0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac'
              trustedAttesters:
                  [
                      'did:kilt:4pehddkhEanexVTTzWAtrrfo2R7xPnePpuiJLC7shQU894aY',
                      'did:kilt:4pnfkRn5UurBJTW92d9TaVLR2CqJdY4z5HPjrEbpGyBykare',
                  ]
              requiredProperties: ['Email']
        redirectUrls:
            - http://localhost:1606/callback.html
        checksDirectory: /app/checks
```

Create a `checks` directory in the same directory as the `config.yaml` file and add a `example-check.rhai` file with the following content:

```rust
// This is an example of a simple login policy that allows only users with an email address ending with `kilt.io` to login.

let SUFFIX = "kilt.io";

// ID_TOKEN contains the id_token to send to the user from the OpenID connect (OIDC) provider
let token = parse_id_token(ID_TOKEN);

// Inspect the token and the `pro` sub-object that contains the users claims
if token.pro.Email.ends_with(SUFFIX) {
  // The user is allowed to login
  return true;
}

// The user is not allowed to login
return false;
```

Start the service bind-mounting the script:

```bash
docker run -d --rm \
    -v $(pwd)/config.yaml:/app/config.yaml \
    -v $(pwd)/checks:/app/checks \
    -e RUNTIME=spiritnet \
    -p 3001:3001 \
    docker.io/kiltprotocol/opendid:latest
```

When you now log in with a user that has an email address ending with `kilt.io` as attested by the configured attester, the service allows you to log in.
If you use a different email address, the service denies you access.

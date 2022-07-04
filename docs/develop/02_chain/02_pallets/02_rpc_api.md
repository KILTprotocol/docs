---
id: custom-rpc
title: Custom RPC API
---

KILT blockchain nodes expose endpoints for executing Remote Procedure Calls (RPC).
Most of the RPCs can also be found in any other substrate based chain and don't derive from their default implementation.
For a [list of default RPCs refer to the official polkadot documentation](https://polkadot.js.org/docs/substrate/rpc/).

Besides the default set up RPCs, the KILT blockchain also supports a set of custom RPCs which will be described in this document.

## Query information linked to a DID

KILT DIDs own many different storage entries which cannot be queried in parallel and therefore would require multiple [round-trip times](https://en.wikipedia.org/wiki/Round-trip_delay) to assemble.
To shorten delays in user interfaces, three convenience RPCs are available on the KILT blockchain

### Query by did identifier

Look up linked information to this DID identifier.

#### Method Name

`did_query`

#### Parameter

* `DidIdentifier` - the DID that should be looked up without the `did:kilt:` prefix.


#### Request:

```
curl \
	-H "Content-Type: application/json" \
	-d '{
		"id":1,
		"jsonrpc":"2.0",
		"method": "did_query",
		"params":["4q9HbHkTszhd1Kp23Dbkuk1KNE8grgzF9S9Gr6areY21SB6c"]
	}' \
	https://kilt-rpc.dwellir.com
```

#### Response:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "accounts": [
      "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
    ],
    "details": {
      "attestation_key": null,
      "authentication_key": "0x15ba41bf8842ae185ae06110a63e6cc7ac36d8a8ea217746231bef46c1379ab1",
      "delegation_key": null,
      "deposit": {
        "amount": "2007900000000000",
        "owner": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
      },
      "key_agreement_keys": [],
      "last_tx_counter": 3,
      "public_keys": {
        "0x15ba41bf8842ae185ae06110a63e6cc7ac36d8a8ea217746231bef46c1379ab1": {
          "block_number": 120,
          "key": {
            "PublicVerificationKey": {
              "Sr25519": "5FKxrLQM24ZhLxcaQfJR3uMxMZh5gU6E4CP3yghPJLzCDnHN"
            }
          }
        }
      }
    },
    "identifier": "5FKxrLQM24ZhLxcaQfJR3uMxMZh5gU6E4CP3yghPJLzCDnHN",
    "service_endpoints": [
      {
        "id": "123",
        "service_types": [
          "twitter"
        ],
        "urls": [
          "example.com"
        ]
      }
    ],
    "w3n": "alice-0"
  },
  "id": 1
}
```

### Query by linked account

DIDs can be associated to multiple different blockchain accounts.
This RPC makes it possible to look up a DID using a blockchain account.

#### Method Name

`did_queryByAccount`

#### Parameter

* `AccountId` - The account id that should be linked to a DID.

#### Request:

```
curl \
	-H "Content-Type: application/json" \
	-d '{
		"id":1,
		"jsonrpc":"2.0",
		"method": "did_queryByAccount",
		"params":["4q9HbHkTszhd1Kp23Dbkuk1KNE8grgzF9S9Gr6areY21SB6c"]
	}' \
	https://kilt-rpc.dwellir.com
```

#### Response:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "accounts": [
      "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
    ],
    "details": {
      "attestation_key": null,
      "authentication_key": "0x15ba41bf8842ae185ae06110a63e6cc7ac36d8a8ea217746231bef46c1379ab1",
      "delegation_key": null,
      "deposit": {
        "amount": "2007900000000000",
        "owner": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
      },
      "key_agreement_keys": [],
      "last_tx_counter": 3,
      "public_keys": {
        "0x15ba41bf8842ae185ae06110a63e6cc7ac36d8a8ea217746231bef46c1379ab1": {
          "block_number": 120,
          "key": {
            "PublicVerificationKey": {
              "Sr25519": "5FKxrLQM24ZhLxcaQfJR3uMxMZh5gU6E4CP3yghPJLzCDnHN"
            }
          }
        }
      }
    },
    "identifier": "5FKxrLQM24ZhLxcaQfJR3uMxMZh5gU6E4CP3yghPJLzCDnHN",
    "service_endpoints": [
      {
        "id": "123",
        "service_types": [
          "twitter"
        ],
        "urls": [
          "example.com"
        ]
      }
    ],
    "w3n": "alice-0"
  },
  "id": 1
}
```

### Query by web3name

DIDs can be associated to multiple different blockchain accounts.
This RPC makes it possible to look up a DID using a blockchain account.

#### Method Name

`did_queryByWeb3Name`

#### Parameter

* `String` - The web3name

#### Request:

```
curl \
	-H "Content-Type: application/json" \
	-d '{
		"id":1,
		"jsonrpc":"2.0",
		"method": "did_queryByWeb3Name",
		"params":["botlabs_gmbh"]
	}' \
	https://kilt-rpc.dwellir.com
```

#### Response:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "accounts": [
      "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
    ],
    "details": {
      "attestation_key": null,
      "authentication_key": "0x15ba41bf8842ae185ae06110a63e6cc7ac36d8a8ea217746231bef46c1379ab1",
      "delegation_key": null,
      "deposit": {
        "amount": "2007900000000000",
        "owner": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
      },
      "key_agreement_keys": [],
      "last_tx_counter": 3,
      "public_keys": {
        "0x15ba41bf8842ae185ae06110a63e6cc7ac36d8a8ea217746231bef46c1379ab1": {
          "block_number": 120,
          "key": {
            "PublicVerificationKey": {
              "Sr25519": "5FKxrLQM24ZhLxcaQfJR3uMxMZh5gU6E4CP3yghPJLzCDnHN"
            }
          }
        }
      }
    },
    "identifier": "5FKxrLQM24ZhLxcaQfJR3uMxMZh5gU6E4CP3yghPJLzCDnHN",
    "service_endpoints": [
      {
        "id": "123",
        "service_types": [
          "twitter"
        ],
        "urls": [
          "example.com"
        ]
      }
    ],
    "w3n": "alice-0"
  },
  "id": 1
}
```

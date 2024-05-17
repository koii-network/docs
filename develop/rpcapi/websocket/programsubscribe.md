---
title: programSubscribe RPC Method
image: img/thumbnail.png
sidebar_label: programSubscribe
---
Subscribe to a program to receive notifications when the lamports or data for an account owned by the given program changes

### Parameters
`string` **required**
Pubkey of the `program_id`, as base-58 encoded string

`object` **optional**
Configuration object containing the following fields:
- filters `array` **optional**
filter results using various filter objects

:::info
The resultant account must meet **ALL** filter criteria to be included in the returned results
:::
- encoding `string` **optional**
  Encoding format for Account data
  Values: `base58``base64``base64+zstd``jsonParsed`
    - `base58` is slow.
    - `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data
    - If `jsonParsed` is requested but a parser cannot be found, the field falls back to binary encoding, detectable when the `data`field is type`string`.

### Result

`<integer>` - Subscription id (needed to unsubscribe)

### Code sample

```bash
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "programSubscribe",
  "params": [
    "11111111111111111111111111111111",
    {
      "encoding": "base64",
      "commitment": "finalized"
    }
  ]
}
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "programSubscribe",
  "params": [
    "11111111111111111111111111111111",
    {
      "encoding": "jsonParsed"
    }
  ]
}
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "programSubscribe",
  "params": [
    "11111111111111111111111111111111",
    {
      "encoding": "base64",
      "filters": [
        {
          "dataSize": 80
        }
      ]
    }
  ]
}
```


### Response

```json
{ "jsonrpc": "2.0", "result": 24040, "id": 1 }
```


#### Notification format

The notification format is a **single** program account object as seen in the [getProgramAccounts](/develop/rpcapi/intro/http/getprogramaccounts) RPC HTTP method.

Base58 encoding:

```
{
  "jsonrpc": "2.0",
  "method": "programNotification",
  "params": {
    "result": {
      "context": {
        "slot": 5208469
      },
      "value": {
        "pubkey": "H4vnBqifaSACnKa7acsxstsY1iV1bvJNxsCY7enrd1hq",
        "account": {
          "data": [
            "11116bv5nS2h3y12kD1yUKeMZvGcKLSjQgX6BeV7u1FrjeJcKfsHPXHRDEHrBesJhZyqnnq9qJeUuF7WHxiuLuL5twc38w2TXNLxnDbjmuR",
            "base58"
          ],
          "executable": false,
          "lamports": 33594,
          "owner": "11111111111111111111111111111111",
          "rentEpoch": 636,
          "space": 80
        }
      }
    },
    "subscription": 24040
  }
}
```


Parsed-JSON encoding:

```
{
  "jsonrpc": "2.0",
  "method": "programNotification",
  "params": {
    "result": {
      "context": {
        "slot": 5208469
      },
      "value": {
        "pubkey": "H4vnBqifaSACnKa7acsxstsY1iV1bvJNxsCY7enrd1hq",
        "account": {
          "data": {
            "program": "nonce",
            "parsed": {
              "type": "initialized",
              "info": {
                "authority": "Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX",
                "blockhash": "LUaQTmM7WbMRiATdMMHaRGakPtCkc2GHtH57STKXs6k",
                "feeCalculator": {
                  "lamportsPerSignature": 5000
                }
              }
            }
          },
          "executable": false,
          "lamports": 33594,
          "owner": "11111111111111111111111111111111",
          "rentEpoch": 636,
          "space": 80
        }
      }
    },
    "subscription": 24040
  }
}
```

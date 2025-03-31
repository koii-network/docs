---
title: getTokenAccountsByOwner RPC Method
image: img/thumbnail.png
sidebar_label: getTokenAccountsByOwner
---

Returns all KPL Token accounts by token owner.

### Parameters
`string` **required**
Pubkey of account delegate to query, as base-58 encoded string

`object` **optional**
A JSON object with one of the following fields:
- `mint: <string>` - Pubkey of the specific token Mint to limit accounts to, as base-58 encoded string; or
- `programId: <string>` - Pubkey of the Token program that owns the accounts, as base-58 encoded string
`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
- minContextSlot `number` **optional**
The minimum slot that the request can be evaluated at
- dataSlice `object` **optional**
  Request a slice of the account's data.

  - `length: <usize>` - number of bytes to return
  - `offset: <usize>` - byte offset from which to start reading

:::info
Data slicing is only available for `base58`, `base64`, or `base64+zstd` encodings.
:::

- encoding `string` **optional**
Encoding format for Account data
Values: `base58` `base64` `base64+zstd` `jsonParsed`
  - `base58` is slow and limited to less than 129 bytes of Account data.
  - `base64` will return base64 encoded data for Account data of any size.
  - `base64+zstd` compresses the Account data using [Zstandard](https://facebook.github.io/zstd/) and base64-encodes the result.
  - `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data.
  - If `jsonParsed` is requested but a parser cannot be found, the field falls back to `base64` encoding, detectable when the `data` field is type `string`.


### Result

The result will be an RpcResponse JSON object with `value` equal to an array of JSON objects, which will contain:

*   `pubkey: <string>` - the account Pubkey as base-58 encoded string
*   `account: <object>` - a JSON object, with the following sub fields:
    *   `lamports: <u64>` - number of lamports assigned to this account, as a u64
    *   `owner: <string>` - base-58 encoded Pubkey of the program this account has been assigned to
    *   `data: <object>` - Token state data associated with the account, either as encoded binary data or in JSON format `{<program>: <state>}`
    *   `executable: <bool>` - boolean indicating if the account contains a program (and is strictly read-only)
    *   `rentEpoch: <u64>` - the epoch at which this account will next owe rent, as u64
    *   `size: <u64>` - the data size of the account

When the data is requested with the `jsonParsed` encoding a format similar to that of the [Token Balances Structure](/develop/rpcapi/json-structures#token-balances) can be expected inside the structure, both for the `tokenAmount` and the `delegatedAmount` - with the latter being an optional object.

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getTokenAccountsByOwner",
    "params": [
      "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F",
      {
        "mint": "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"
      },
      {
        "encoding": "jsonParsed"
      }
    ]
  }
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 1114
    },
    "value": [
      {
        "account": {
          "data": {
            "program": "spl-token",
            "parsed": {
              "accountType": "account",
              "info": {
                "tokenAmount": {
                  "amount": "1",
                  "decimals": 1,
                  "uiAmount": 0.1,
                  "uiAmountString": "0.1"
                },
                "delegate": "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
                "delegatedAmount": {
                  "amount": "1",
                  "decimals": 1,
                  "uiAmount": 0.1,
                  "uiAmountString": "0.1"
                },
                "state": "initialized",
                "isNative": false,
                "mint": "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E",
                "owner": "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F"
              },
              "type": "account"
            },
            "space": 165
          },
          "executable": false,
          "lamports": 1726080,
          "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "rentEpoch": 4,
          "space": 165
        },
        "pubkey": "C2gJg6tKpQs41PRS1nC8aw3ZKNZK3HQQZGVrDFDup5nx"
      }
    ]
  },
  "id": 1
}
```

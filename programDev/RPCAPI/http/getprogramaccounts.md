---
title: getProgramAccounts RPC Method
image: img/thumbnail.png
sidebar_label: getProgramAccounts
---

Returns all accounts owned by the provided program Pubkey

### Parameters
`string` **required**
Pubkey of program, as base-58 encoded string
`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
  The minimum slot that the request can be evaluated at
- minContextSlot `number` **optional**
The minimum slot that the request can be evaluated at
- withContext `bool` **optional**
wrap the result in an RpcResponse JSON object
- encoding `string` **optional**
  Default: `json`
  encoding format for the returned Account data
  Values: `jsonParsed` `base58` `base64` `base64+zstd`

  - `base58` is slow and limited to less than 129 bytes of Account data.
  - `base64` will return base64 encoded data for Account data of any size.
  - `base64+zstd` compresses the Account data using [Zstandard](https://facebook.github.io/zstd/) and base64-encodes the result.
  - `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data.
  - If `jsonParsed` is requested but a parser cannot be found, the field falls back to `base64` encoding, detectable when the `data` field is type `<string>`.
- dataSlice `object` **optional**
  Request a slice of the account's data.
  - `length: <usize>` - number of bytes to return
  - `offset: <usize>` - byte offset from which to start reading
:::info
Data slicing is only available for `base58`, `base64`, or `base64+zstd` encodings.
:::

- filters `array` **optional**
filter results using up to 4 filter objects

:::info
The resultant account(s) must meet **ALL** filter criteria to be included in the returned results
:::

### Result

By default, the result field will be an array of JSON objects.

:::info
If the `withContext` flag is set, the array will be wrapped in an `RpcResponse` JSON object.
:::
The resultant response array will contain:

*   `pubkey: <string>` - the account Pubkey as base-58 encoded string
*   `account: <object>` - a JSON object, with the following sub fields:
    *   `lamports: <u64>` - number of lamports assigned to this account, as a u64
    *   `owner: <string>` - base-58 encoded Pubkey of the program this account has been assigned to
    *   `data: <[string,encoding]|object>` - data associated with the account, either as encoded binary data or JSON format `{<program>: <state>}` - depending on encoding parameter
    *   `executable: <bool>` - boolean indicating if the account contains a program (and is strictly read-only)
    *   `rentEpoch: <u64>` - the epoch at which this account will next owe rent, as u64
    *   `size: <u64>` - the data size of the account

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getProgramAccounts",
    "params": [
      "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
      {
        "filters": [
          {
            "dataSize": 17
          },
          {
            "memcmp": {
              "offset": 4,
              "bytes": "3Mc6vR"
            }
          }
        ]
      }
    ]
  }
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "account": {
        "data": "2R9jLfiAQ9bgdcw6h8s44439",
        "executable": false,
        "lamports": 15298080,
        "owner": "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
        "rentEpoch": 28,
        "space": 42
      },
      "pubkey": "CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY"
    }
  ],
  "id": 1
}
```

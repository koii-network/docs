---
title: getAccountInfo RPC Method
image: img/thumbnail.png
sidebar_label: getAccountInfo
---

Returns all information associated with the account of provided Pubkey

### Parameters
`string` (required):

Pubkey of account to query, as base-58 encoded string

`object` (optional):

Configuration object containing the following fields:

- commitment string` **optional**
- `encoding`(string, optional): Encoding format for Account data
  - `Values`: `base58` `base64` `base64+zstd` `jsonParsed`
      *   `base58` is slow and limited to less than 129 bytes of Account data.
      *   `base64` will return base64 encoded data for Account data of any size.
      *   `base64+zstd` compresses the Account data using [Zstandard](https://facebook.github.io/zstd/) and base64-encodes the result.
      *   `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data.
      *   If `jsonParsed` is requested but a parser cannot be found, the field falls back to `base64` encoding, detectable when the `data` field is type `string`.
- dataSlice `object` **optional**
  Request a slice of the account's data.
    *   `length: <usize>` - number of bytes to return
    *   `offset: <usize>` - byte offset from which to start reading

:::info
Data slicing is only available for `base58`, `base64`, or `base64+zstd` encodings.
:::
- minContextSlot `number` **optional**
The minimum slot that the request can be evaluated at

### Result

The result will be an RpcResponse JSON object with `value` equal to:

*   `<null>` - if the requested account doesn't exist
*   `<object>` - otherwise, a JSON object containing:
    *   `lamports: <u64>` - number of lamports assigned to this account, as a u64
    *   `owner: <string>` - base-58 encoded Pubkey of the program this account has been assigned to
    *   `data: <[string, encoding]|object>` - data associated with the account, either as encoded binary data or JSON format `{<program>: <state>}` - depending on encoding parameter
    *   `executable: <bool>` - boolean indicating if the account contains a program (and is strictly read-only)
    *   `rentEpoch: <u64>` - the epoch at which this account will next owe rent, as u64
    *   `size: <u64>` - the data size of the account

### Code sample

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
      "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
      {
        "encoding": "base58"
      }
    ]
  }
'
```


### Response

```
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 1
    },
    "value": {
      "data": [
        "11116bv5nS2h3y12kD1yUKeMZvGcKLSjQgX6BeV7u1FrjeJcKfsHRTPuR3oZ1EioKtYGiYxpxMG5vpbZLsbcBYBEmZZcMKaSoGx9JZeAuWf",
        "base58"
      ],
      "executable": false,
      "lamports": 1000000000,
      "owner": "11111111111111111111111111111111",
      "rentEpoch": 2,
      "space": 80
    }
  },
  "id": 1
}
```

---
title: getMultipleAccounts RPC Method
image: img/thumbnail.png
sidebar_label: getMultipleAccounts
---

Returns the account information for a list of Pubkeys.

### Parameters
`array` **required**
An array of Pubkeys to query, as base-58 encoded strings (up to a maximum of 100)

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
    Default: `base64`
    encoding format for the returned Account data
    Values: `jsonParsed` `base58` `base64` `base64+zstd`

      - `base58` is slow and limited to less than 129 bytes of Account data.
      - `base64` will return base64 encoded data for Account data of any size.
      - `base64+zstd` compresses the Account data using [Zstandard](https://facebook.github.io/zstd/) and base64-encodes the result.
      - `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data.
      - If `jsonParsed` is requested but a parser cannot be found, the field falls back to `base64` encoding, detectable when the `data` field is type `<string>`.

### Result

The result will be a JSON object with `value` equal to an array of:

*   `<null>` - if the account at that Pubkey doesn't exist, or
*   `<object>` - a JSON object containing:
    *   `lamports: <u64>` - number of lamports assigned to this account, as a u64
    *   `owner: <string>` - base-58 encoded Pubkey of the program this account has been assigned to
    *   `data: <[string, encoding]|object>` - data associated with the account, either as encoded binary data or JSON format `{<program>: <state>}` - depending on encoding parameter
    *   `executable: <bool>` - boolean indicating if the account contains a program (and is strictly read-only)
    *   `rentEpoch: <u64>` - the epoch at which this account will next owe rent, as u64
    *   `space: <u64>` - the data size of the account

### Code sample

```bash
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getMultipleAccounts",
    "params": [
      [
        "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
        "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"
      ],
      {
        "encoding": "base58"
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
      "slot": 1
    },
    "value": [
      {
        "data": ["", "base64"],
        "executable": false,
        "lamports": 1000000000,
        "owner": "11111111111111111111111111111111",
        "rentEpoch": 2,
        "space": 16
      },
      {
        "data": ["", "base64"],
        "executable": false,
        "lamports": 5000000000,
        "owner": "11111111111111111111111111111111",
        "rentEpoch": 2,
        "space": 0
      }
    ]
  },
  "id": 1
}
```

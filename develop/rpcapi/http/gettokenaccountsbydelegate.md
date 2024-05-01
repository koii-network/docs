# getTokenAccountsByDelegate RPC Method | Solana
Returns all SPL Token accounts by approved Delegate.

### Parameters #

Pubkey of account delegate to query, as base-58 encoded string

A JSON object with one of the following fields:

*   `mint: <string>` - Pubkey of the specific token Mint to limit accounts to, as base-58 encoded string; or
*   `programId: <string>` - Pubkey of the Token program that owns the accounts, as base-58 encoded string

Configuration object containing the following fields:

The minimum slot that the request can be evaluated at

Request a slice of the account's data.

*   `length: <usize>` - number of bytes to return
*   `offset: <usize>` - byte offset from which to start reading

Info

Data slicing is only available for `base58`, `base64`, or `base64+zstd` encodings.

Encoding format for Account data

Values: `base58``base64``base64+zstd``jsonParsed`

*   `base58` is slow and limited to less than 129 bytes of Account data.
*   `base64` will return base64 encoded data for Account data of any size.
*   `base64+zstd` compresses the Account data using Zstandard and base64-encodes the result.
*   `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data.
*   If `jsonParsed` is requested but a parser cannot be found, the field falls back to `base64` encoding, detectable when the `data` field is type `string`.

### Result #

The result will be an RpcResponse JSON object with `value` equal to an array of JSON objects, which will contain:

*   `pubkey: <string>` - the account Pubkey as base-58 encoded string
*   `account: <object>` - a JSON object, with the following sub fields:
    *   `lamports: <u64>` - number of lamports assigned to this account, as a u64
    *   `owner: <string>` - base-58 encoded Pubkey of the program this account has been assigned to
    *   `data: <object>` - Token state data associated with the account, either as encoded binary data or in JSON format `{<program>: <state>}`
    *   `executable: <bool>` - boolean indicating if the account contains a program (and is strictly read-only)
    *   `rentEpoch: <u64>` - the epoch at which this account will next owe rent, as u64
    *   `size: <u64>` - the data size of the account

When the data is requested with the `jsonParsed` encoding a format similar to that of the Token Balances Structure can be expected inside the structure, both for the `tokenAmount` and the `delegatedAmount` - with the latter being an optional object.

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getTokenAccountsByDelegate",
    "params": [
      "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
      {
        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
      },
      {
        "encoding": "jsonParsed"
      }
    ]
  }
'
```


### Response #

```
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
                "owner": "CnPoSPKXu7wJqxe59Fs72tkBeALovhsCxYeFwPCQH9TD"
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
        "pubkey": "28YTZEwqtMHWrhWcvv34se7pjS7wctgqzCPB3gReCFKp"
      }
    ]
  },
  "id": 1
}
```

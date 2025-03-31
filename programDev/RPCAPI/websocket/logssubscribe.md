---
title: logsSubscribe RPC Method
image: img/thumbnail.png
sidebar_label: logsSubscribe
---
Subscribe to transaction logging

### Parameters
filter `string | object` **required**
filter criteria for the logs to receive results by account type. The following filters types are currently supported:
`string`
A string with one of the following values:
  - `all` - subscribe to all transactions except for simple vote transactions
  - `allWithVotes` - subscribe to all transactions, including simple vote transactions
`object`
An object with the following field:
- `mentions: [ <string> ]` - array containing a single Pubkey (as base-58 encoded string); if present, subscribe to only transactions mentioning this address
:::warning
The `mentions` field currently only supports one Pubkey string per method call. Listing additional addresses will result in an error.
:::
object optional
Configuration object containing the following fields:

### Result

`<integer>` - Subscription id (needed to unsubscribe)

### Code sample

```sh
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "logsSubscribe",
  "params": [
    {
      "mentions": [ "11111111111111111111111111111111" ]
    },
    {
      "commitment": "finalized"
    }
  ]
}
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "logsSubscribe",
  "params": [ "all" ]
}
```


### Response

```json
{ "jsonrpc": "2.0", "result": 24040, "id": 1 }
```


#### Notification Format:

The notification will be an RpcResponse JSON object with value equal to:

*   `signature: <string>` - The transaction signature base58 encoded.
*   `err: <object|null>` - Error if transaction failed, null if transaction succeeded.
*   `logs: <array|null>` - Array of log messages the transaction instructions output during execution, null if simulation failed before the transaction was able to execute (for example due to an invalid blockhash or signature verification failure)

Example:

```
{
  "jsonrpc": "2.0",
  "method": "logsNotification",
  "params": {
    "result": {
      "context": {
        "slot": 5208469
      },
      "value": {
        "signature": "5h6xBEauJ3PK6SWCZ1PGjBvj8vDdWG3KpwATGy1ARAXFSDwt8GFXM7W5Ncn16wmqokgpiKRLuS83KUxyZyv2sUYv",
        "err": null,
        "logs": [
          "SBF program 83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri success"
        ]
      }
    },
    "subscription": 24040
  }
}
```

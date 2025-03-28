---
title: getSignaturesForAddress RPC Method
image: img/thumbnail.png
sidebar_label: getSignaturesForAddress
---

Returns signatures for confirmed transactions that include the given address in their `accountKeys` list. Returns signatures backwards in time from the provided signature or most recent confirmed block

### Parameters
`string` **required**
Account address as base-58 encoded string

`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
- minContextSlot `number` **optional**
The minimum slot that the request can be evaluated at
- limit `number` **optional**
  Default: `1000`
  maximum transaction signatures to return (between 1 and 1,000).
- before `string` **optional**
  start searching backwards from this transaction signature. If not provided the search starts from the top of the highest max confirmed block.
- until `string` **optional**
search until this transaction signature, if found before limit reached

### Result

An array of `<object>`, ordered from **newest** to **oldest** transaction, containing transaction signature information with the following fields:

*   `signature: <string>` - transaction signature as base-58 encoded string
*   `slot: <u64>` - The slot that contains the block with the transaction
*   `err: <object|null>` - Error if transaction failed, null if transaction succeeded. See TransactionError definitions for more info.
*   `memo: <string|null>` - Memo associated with the transaction, null if no memo is present
*   `blockTime: <i64|null>` - estimated production time, as Unix timestamp (seconds since the Unix epoch) of when transaction was processed. null if not available.
*   `confirmationStatus: <string|null>` - The transaction's cluster confirmation status; Either `processed`, `confirmed`, or `finalized`. See [Commitment](/develop/rpcapi/intro#configuring-state-commitment) for more on optimistic confirmation.

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getSignaturesForAddress",
    "params": [
      "Vote111111111111111111111111111111111111111",
      {
        "limit": 1
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
      "err": null,
      "memo": null,
      "signature": "5h6xBEauJ3PK6SWCZ1PGjBvj8vDdWG3KpwATGy1ARAXFSDwt8GFXM7W5Ncn16wmqokgpiKRLuS83KUxyZyv2sUYv",
      "slot": 114,
      "blockTime": null
    }
  ],
  "id": 1
}
```

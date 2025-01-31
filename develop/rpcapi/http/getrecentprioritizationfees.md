---
title: getRecentPrioritizationFees RPC Method
image: img/thumbnail.png
sidebar_label: getRecentPrioritizationFees
---

Returns a list of prioritization fees from recent blocks.

:::info
Currently, a node's prioritization-fee cache stores data from up to 150 blocks.
:::
### Parameters
`array` **optional**
An array of Account addresses (up to a maximum of 128 addresses), as base-58 encoded strings

:::info
If this parameter is provided, the response will reflect a fee to land a transaction locking all of the provided accounts as writable.
:::
### Result

An array of `RpcPrioritizationFee<object>` with the following fields:

*   `slot: <u64>` - slot in which the fee was observed
*   `prioritizationFee: <u64>` - the per-compute-unit fee paid by at least one successfully landed transaction, specified in increments of micro-lamports (0.000001 lamports)

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc":"2.0", "id":1,
    "method": "getRecentPrioritizationFees",
    "params": [
      ["CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY"]
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
      "slot": 348125,
      "prioritizationFee": 0
    },
    {
      "slot": 348126,
      "prioritizationFee": 1000
    },
    {
      "slot": 348127,
      "prioritizationFee": 500
    },
    {
      "slot": 348128,
      "prioritizationFee": 0
    },
    {
      "slot": 348129,
      "prioritizationFee": 1234
    }
  ],
  "id": 1
}
```

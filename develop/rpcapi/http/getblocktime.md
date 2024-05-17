---
title: getBlockTime RPC Method
image: img/thumbnail.png
sidebar_label: getBlockTime
---

Returns the estimated production time of a block.


:::info
Each validator reports their UTC time to the ledger on a regular interval by intermittently adding a timestamp to a Vote for a particular block. A requested block's time is calculated from the stake-weighted mean of the Vote timestamps in a set of recent blocks recorded on the ledger.
:::
### Parameters
`u64` **required**
block number, identified by Slot

### Result

*   `<i64>` - estimated production time, as Unix timestamp (seconds since the Unix epoch)

### Code sample

```bash
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc":"2.0", "id":1,
    "method": "getBlockTime",
    "params":[5]
  }
'
```


### Response

When a block time is available:

```
{
  "jsonrpc": "2.0",
  "result": 1574721591,
  "id": 1
}
```


When a block time is not available:

```
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32004,
    "message": "Block not available for slot 150"
  },
  "id": 1
}
```

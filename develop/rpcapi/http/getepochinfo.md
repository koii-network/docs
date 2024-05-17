---
title: getEpochInfo RPC Method
image: img/thumbnail.png
sidebar_label: getEpochInfo
---
Returns information about the current epoch

### Parameters
`object` **optional**
Configuration object containing the following fields:
  - [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
  - minContextSlot `number` **optional**
    The minimum slot that the request can be evaluated at

### Result

The result field will be an object with the following fields:

*   `absoluteSlot: <u64>` - the current slot
*   `blockHeight: <u64>` - the current block height
*   `epoch: <u64>` - the current epoch
*   `slotIndex: <u64>` - the current slot relative to the start of the current epoch
*   `slotsInEpoch: <u64>` - the number of slots in this epoch
*   `transactionCount: <u64|null>` - total number of transactions processed without error since genesis

### Code sample

```bash
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getEpochInfo"}
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "absoluteSlot": 166598,
    "blockHeight": 166500,
    "epoch": 27,
    "slotIndex": 2790,
    "slotsInEpoch": 8192,
    "transactionCount": 22661093
  },
  "id": 1
}
```

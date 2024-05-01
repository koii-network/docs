# getEpochInfo RPC Method | Solana
Returns information about the current epoch

### Parameters #

Configuration object containing the following fields:

The minimum slot that the request can be evaluated at

### Result #

The result field will be an object with the following fields:

*   `absoluteSlot: <u64>` - the current slot
*   `blockHeight: <u64>` - the current block height
*   `epoch: <u64>` - the current epoch
*   `slotIndex: <u64>` - the current slot relative to the start of the current epoch
*   `slotsInEpoch: <u64>` - the number of slots in this epoch
*   `transactionCount: <u64|null>` - total number of transactions processed without error since genesis

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getEpochInfo"}
'
```


### Response #

```
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

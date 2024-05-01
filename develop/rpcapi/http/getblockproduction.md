# getBlockProduction RPC Method | Solana
Returns recent block production information from the current or previous epoch.

### Parameters #

Configuration object containing the following fields:

Only return results for this validator identity (base-58 encoded)

Slot range to return block production for. If parameter not provided, defaults to current epoch.

*   `firstSlot: <u64>` - first slot to return block production information for (inclusive)
*   (optional) `lastSlot: <u64>` - last slot to return block production information for (inclusive). If parameter not provided, defaults to the highest slot

### Result #

The result will be an RpcResponse JSON object with `value` equal to:

*   `<object>`
    *   `byIdentity: <object>` - a dictionary of validator identities, as base-58 encoded strings. Value is a two element array containing the number of leader slots and the number of blocks produced.
    *   `range: <object>` - Block production slot range
        *   `firstSlot: <u64>` - first slot of the block production information (inclusive)
        *   `lastSlot: <u64>` - last slot of block production information (inclusive)

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getBlockProduction"}
'
```


### Response #

```
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 9887
    },
    "value": {
      "byIdentity": {
        "85iYT5RuzRTDgjyRa3cP8SYhM2j21fj7NhfJ3peu1DPr": [9888, 9886]
      },
      "range": {
        "firstSlot": 0,
        "lastSlot": 9887
      }
    }
  },
  "id": 1
}
```

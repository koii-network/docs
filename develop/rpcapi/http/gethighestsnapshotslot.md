# getHighestSnapshotSlot RPC Method 
Returns the highest slot information that the node has snapshots for.

This will find the highest full snapshot slot, and the highest incremental snapshot slot _based on_ the full snapshot slot, if there is one.

### Parameters [#](#parameters)

**None**

### Result [#](#result)

When the node has a snapshot, this returns a JSON object with the following fields:

*   `full: <u64>` - Highest full snapshot slot
*   `incremental: <u64|null>` - Highest incremental snapshot slot _based on_ `full`

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1,"method":"getHighestSnapshotSlot"}
'
```


### Response [#](#response)

Result when the node has a snapshot:

```
{
  "jsonrpc": "2.0",
  "result": {
    "full": 100,
    "incremental": 110
  },
  "id": 1
}
```


Result when the node has no snapshot:

```
{
  "jsonrpc": "2.0",
  "error": { "code": -32008, "message": "No snapshot" },
  "id": 1
}
```

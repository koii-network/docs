# minimumLedgerSlot RPC Method 
Returns the lowest slot that the node has information about in its ledger.

Info

This value may increase over time if the node is configured to purge older ledger data

### Parameters [#](#parameters)

**None**

### Result [#](#result)

`u64` - Minimum ledger slot number

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"minimumLedgerSlot"}
'
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": 1234, "id": 1 }
```

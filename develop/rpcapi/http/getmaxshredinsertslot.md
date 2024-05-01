# getMaxShredInsertSlot RPC Method | Solana
Get the max slot seen from after shred insert.

### Parameters #

**None**

### Result #

`<u64>` - Slot number

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getMaxShredInsertSlot"}
'
```


### Response #

```
{ "jsonrpc": "2.0", "result": 1234, "id": 1 }
```

# getFirstAvailableBlock RPC Method | Solana
Returns the slot of the lowest confirmed block that has not been purged from the ledger

### Parameters #

**None**

### Result #

*   `<u64>` - Slot

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc":"2.0","id":1,
    "method":"getFirstAvailableBlock"
  }
'
```


### Response #

```
{ "jsonrpc": "2.0", "result": 250000, "id": 1 }
```

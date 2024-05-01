# getSlot RPC Method | Solana
Returns the slot that has reached the given or default commitment level

### Parameters #

`object` optional

Configuration object containing the following fields:

commitment `string` optional

minContextSlot `number` optional

The minimum slot that the request can be evaluated at

### Result #

`<u64>` - Current slot

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getSlot"}
'
```


### Response #

```
{ "jsonrpc": "2.0", "result": 1234, "id": 1 }
```

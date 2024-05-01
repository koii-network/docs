# getTransactionCount RPC Method | Solana
![Solana](https://solana.com/)

Returns the current Transaction count from the ledger

### Parameters #

`object` optional

Configuration object containing the following fields:

commitment `string` optional

minContextSlot `number` optional

The minimum slot that the request can be evaluated at

### Result #

`<u64>` - the current Transaction count from the ledger

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getTransactionCount"}
'
```


### Response #

```
{ "jsonrpc": "2.0", "result": 268, "id": 1 }
```

# getTransactionCount RPC Method 
[

Returns the current Transaction count from the ledger

### Parameters [#](#parameters)

`object` optional

Configuration object containing the following fields:

[commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` optional

minContextSlot `number` optional

The minimum slot that the request can be evaluated at

### Result [#](#result)

`<u64>` - the current Transaction count from the ledger

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getTransactionCount"}
'
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": 268, "id": 1 }
```

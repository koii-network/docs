# getSlot RPC Method 
Returns the slot that has reached the [given or default commitment level](https://solana.com/docs/rpc#configuring-state-commitment)

### Parameters [#](#parameters)

`object` optional

Configuration object containing the following fields:

[commitment](https://solana.com/docs/rpc#configuring-state-commitment) `string` optional

minContextSlot `number` optional

The minimum slot that the request can be evaluated at

### Result [#](#result)

`<u64>` - Current slot

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getSlot"}
'
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": 1234, "id": 1 }
```

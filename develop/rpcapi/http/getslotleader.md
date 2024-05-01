# getSlotLeader RPC Method 
[

Returns the current slot leader

### Parameters [#](#parameters)

`object` optional

Configuration object containing the following fields:

[commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` optional

minContextSlot `number` optional

The minimum slot that the request can be evaluated at

### Result [#](#result)

`<string>` - Node identity Pubkey as base-58 encoded string

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getSlotLeader"}
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": "ENvAW7JScgYq6o4zKZwewtkzzJgDzuJAFxYasvmEQdpS",
  "id": 1
}
```

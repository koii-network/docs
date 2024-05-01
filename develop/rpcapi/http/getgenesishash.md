# getGenesisHash RPC Method 
Returns the genesis hash

### Parameters [#](#parameters)

**None**

### Result [#](#result)

*   `<string>` - a Hash as base-58 encoded string

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getGenesisHash"}
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": "GH7ome3EiwEr7tu9JuTh2dpYWBJK3z69Xm1ZE3MEE6JC",
  "id": 1
}
```

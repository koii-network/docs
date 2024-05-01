# getStakeMinimumDelegation RPC Method 
Returns the stake minimum delegation, in lamports.

### Parameters [#](#parameters)

Configuration object containing the following fields:

### Result [#](#result)

The result will be an RpcResponse JSON object with `value` equal to:

*   `<u64>` - The stake minimum delegation, in lamports

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc":"2.0", "id":1,
    "method": "getStakeMinimumDelegation"
  }
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 501
    },
    "value": 1000000000
  },
  "id": 1
}
```

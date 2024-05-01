# getLatestBlockhash RPC Method | Solana
Returns the latest blockhash

Version Restriction

This method is only available in `solana-core` v1.9 or newer. Please use getRecentBlockhash for `solana-core` v1.8 and below.

### Parameters #

Configuration object containing the following fields:

The minimum slot that the request can be evaluated at

### Result #

`RpcResponse<object>` - RpcResponse JSON object with `value` field set to a JSON object including:

*   `blockhash: <string>` - a Hash as base-58 encoded string
*   `lastValidBlockHeight: <u64>` - last block height at which the blockhash will be valid

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "id":1,
    "jsonrpc":"2.0",
    "method":"getLatestBlockhash",
    "params":[
      {
        "commitment":"processed"
      }
    ]
  }
'
```


### Response #

```
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 2792
    },
    "value": {
      "blockhash": "EkSnNWid2cvwEVnVx9aBqawnmiCNiDgp3gUdkDPTKN1N",
      "lastValidBlockHeight": 3090
    }
  },
  "id": 1
}
```

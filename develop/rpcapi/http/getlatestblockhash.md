---
title: getLatestBlockhash RPC Method
image: img/thumbnail.png
sidebar_label: getLatestBlockhash RPC Method
---

Returns the latest blockhash

Version Restriction


### Parameters
`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
- minContextSlot `number` **optional**
  The minimum slot that the request can be evaluated at

### Result

`RpcResponse<object>` - RpcResponse JSON object with `value` field set to a JSON object including:

*   `blockhash: <string>` - a Hash as base-58 encoded string
*   `lastValidBlockHeight: <u64>` - last block height at which the blockhash will be valid

### Code sample

```bash
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


### Response

```json
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

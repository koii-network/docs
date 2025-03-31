---
title: getStakeMinimumDelegation RPC Method
image: img/thumbnail.png
sidebar_label: getStakeMinimumDelegation
---

Returns the stake minimum delegation, in lamports.

### Parameters
`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**

### Result

The result will be an RpcResponse JSON object with `value` equal to:

*   `<u64>` - The stake minimum delegation, in lamports

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc":"2.0", "id":1,
    "method": "getStakeMinimumDelegation"
  }
'
```


### Response

```json
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

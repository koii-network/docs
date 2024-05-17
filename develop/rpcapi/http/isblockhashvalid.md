---
title: isBlockhashValid RPC Method
image: img/thumbnail.png
sidebar_label: isBlockhashValid
---

Returns whether a blockhash is still valid or not



### Parameters
`string` **required**
the blockhash of the block to evaluate, as base-58 encoded string

`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
- minContextSlot `number` **optional**
The minimum slot that the request can be evaluated at

### Result

`<bool>` - `true` if the blockhash is still valid

### Code sample

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "id":45,
    "jsonrpc":"2.0",
    "method":"isBlockhashValid",
    "params":[
      "J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW",
      {"commitment":"processed"}
    ]
  }
'
```


### Response

```
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 2483
    },
    "value": false
  },
  "id": 1
}
```

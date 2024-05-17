---
title: getBlockHeight RPC Method
image: img/thumbnail.png
sidebar_label: getBlockHeight
---


Returns the current block height of the node

### Parameters

`object` **optional**
Configuration object containing the following fields:

- commitment`string` **optional**

- minContextSlot `number` **optional**
    The minimum slot that the request can be evaluated at

### Result

*   `<u64>` - Current block height

### Code sample

```bash
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc":"2.0","id":1,
    "method":"getBlockHeight"
  }
'
```


Result:

### Response

```json
{
  "jsonrpc": "2.0",
  "result": 1233,
  "id": 1
}
```

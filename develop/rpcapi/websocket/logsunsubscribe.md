---
title: logsUnsubscribe RPC Method
image: img/thumbnail.png
sidebar_label: logsUnsubscribe
---
Unsubscribe from transaction logging

### Parameters

`integer` required

subscription id to cancel

### Result

`<bool>` - unsubscribe success message

### Code sample

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "logsUnsubscribe",
  "params": [0]
}
```


### Response

```
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

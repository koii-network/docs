---
title: rootUnsubscribe RPC Method
image: img/thumbnail.png
sidebar_label: rootUnsubscribe
---
Unsubscribe from root notifications

### Parameters

`number` required

subscription id to cancel

### Result

`<bool>` - unsubscribe success message

### Code sample

```bash
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "rootUnsubscribe",
  "params": [0]
}
```


### Response

```json
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

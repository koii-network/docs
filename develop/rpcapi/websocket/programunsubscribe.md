---
title: programUnsubscribe RPC Method
image: img/thumbnail.png
sidebar_label: programUnsubscribe
---
Unsubscribe from program-owned account change notifications

### Parameters

`number` **required**

id of account Subscription to cancel

### Result

`<bool>` - unsubscribe success message

### Code sample

```bash
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "programUnsubscribe",
  "params": [0]
}
```


### Response

```json
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

---
title: slotUnsubscribe RPC Method
image: img/thumbnail.png
sidebar_label: slotUnsubscribe
---
Unsubscribe from slot notifications

### Parameters

`integer` required

subscription id to cancel

### Result

`<bool>` - unsubscribe success message

### Code sample

```bash
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "slotUnsubscribe",
  "params": [0]
}
```


### Response

```json
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

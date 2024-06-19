---
title: slotsUpdatesUnsubscribe RPC Method
image: img/thumbnail.png
sidebar_label: slotsUpdatesUnsubscribe
---
Unsubscribe from slot-update notifications

### Parameters

`number` required

subscription id to cancel

### Result

`<bool>` - unsubscribe success message

### Code sample

```sh
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "slotsUpdatesUnsubscribe",
  "params": [0]
}
```


### Response

```json
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

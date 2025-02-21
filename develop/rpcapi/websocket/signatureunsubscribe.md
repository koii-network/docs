---
title: signatureUnsubscribe RPC Method
image: img/thumbnail.png
sidebar_label: signatureUnsubscribe
---
Unsubscribe from signature confirmation notification

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
  "method": "signatureUnsubscribe",
  "params": [0]
}
```


### Response

```json
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

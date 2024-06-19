---
title: accountUnsubscribe RPC Method
image: img/thumbnail.png
sidebar_label: accountUnsubscribe
---
Unsubscribe from account change notifications

### Parameters

`number` required
id of the account Subscription to cancel

### Result

`<bool>` - unsubscribe success message

### Code sample

```sh
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "accountUnsubscribe",
  "params": [0]
}
```


### Response

```json
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

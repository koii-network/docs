---
title: rootSubscribe RPC Method
image: img/thumbnail.png
sidebar_label: rootSubscribe
---
Subscribe to receive notification anytime a new root is set by the validator.

### Parameters

**None**

### Result

`integer` - subscription id (needed to unsubscribe)

### Code sample

```sh
{ "jsonrpc": "2.0", "id": 1, "method": "rootSubscribe" }
```


### Response

```json
{ "jsonrpc": "2.0", "result": 0, "id": 1 }
```


#### Notification Format:

The result is the latest root slot number.

```
{
  "jsonrpc": "2.0",
  "method": "rootNotification",
  "params": {
    "result": 42,
    "subscription": 0
  }
}
```

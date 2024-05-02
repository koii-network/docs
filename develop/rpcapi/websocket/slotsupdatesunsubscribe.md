--- 
title: slotsUpdatesUnsubscribe RPC Method 
image: img/thumbnail.png 
sidebar_label: slotsUpdatesUnsubscribe
--- 
Unsubscribe from slot-update notifications

### Parameters [#](#parameters)

`number` required

subscription id to cancel

### Result [#](#result)

`<bool>` - unsubscribe success message

### Code sample [#](#code-sample)

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "slotsUpdatesUnsubscribe",
  "params": [0]
}
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

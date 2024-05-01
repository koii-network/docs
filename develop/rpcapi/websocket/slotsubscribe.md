# slotSubscribe RPC Method 
Subscribe to receive notification anytime a slot is processed by the validator

### Parameters [#](#parameters)

**None**

### Result [#](#result)

`<integer>` - Subscription id (needed to unsubscribe)

### Code sample [#](#code-sample)

```
{ "jsonrpc": "2.0", "id": 1, "method": "slotSubscribe" }
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": 0, "id": 1 }
```


#### Notification Format: [#](#notification-format)

The notification will be an object with the following fields:

*   `parent: <u64>` - The parent slot
*   `root: <u64>` - The current root slot
*   `slot: <u64>` - The newly set slot value

Example:

```
{
  "jsonrpc": "2.0",
  "method": "slotNotification",
  "params": {
    "result": {
      "parent": 75,
      "root": 44,
      "slot": 76
    },
    "subscription": 0
  }
}
```

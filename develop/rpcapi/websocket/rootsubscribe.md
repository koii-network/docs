# rootSubscribe RPC Method 
Subscribe to receive notification anytime a new root is set by the validator.

### Parameters [#](#parameters)

**None**

### Result [#](#result)

`integer` - subscription id (needed to unsubscribe)

### Code sample [#](#code-sample)

```
{ "jsonrpc": "2.0", "id": 1, "method": "rootSubscribe" }
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": 0, "id": 1 }
```


#### Notification Format: [#](#notification-format)

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

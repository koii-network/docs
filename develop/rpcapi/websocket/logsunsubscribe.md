# logsUnsubscribe RPC Method 
Unsubscribe from transaction logging

### Parameters [#](#parameters)

`integer` required

subscription id to cancel

### Result [#](#result)

`<bool>` - unsubscribe success message

### Code sample [#](#code-sample)

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "logsUnsubscribe",
  "params": [0]
}
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

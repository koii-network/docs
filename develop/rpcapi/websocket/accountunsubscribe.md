# accountUnsubscribe RPC Method 
Unsubscribe from account change notifications

### Parameters [#](#parameters)

`number` required

id of the account Subscription to cancel

### Result [#](#result)

`<bool>` - unsubscribe success message

### Code sample [#](#code-sample)

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "accountUnsubscribe",
  "params": [0]
}
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```

# getMaxRetransmitSlot RPC Method 
Get the max slot seen from retransmit stage.

### Parameters [#](#parameters)

**None**

### Result [#](#result)

`<u64>` - Slot number

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getMaxRetransmitSlot"}
'
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": 1234, "id": 1 }
```

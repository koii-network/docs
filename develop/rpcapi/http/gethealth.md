--- 
title: getHealth RPC Method
image: img/thumbnail.png 
sidebar_label: getHealth 
---  
 
Returns the current health of the node. A healthy node is one that is within `HEALTH_CHECK_SLOT_DISTANCE` slots of the latest cluster confirmed slot.

### Parameters [#](#parameters)

**None**

### Result [#](#result)

If the node is healthy: "ok"

If the node is unhealthy, a JSON RPC error response is returned. The specifics of the error response are **UNSTABLE** and may change in the future

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getHealth"}
'
```


### Response [#](#response)

Healthy Result:

```
{ "jsonrpc": "2.0", "result": "ok", "id": 1 }
```


Unhealthy Result (generic):

```
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32005,
    "message": "Node is unhealthy",
    "data": {}
  },
  "id": 1
}
```


Unhealthy Result (if additional information is available)

```
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32005,
    "message": "Node is behind by 42 slots",
    "data": {
      "numSlotsBehind": 42
    }
  },
  "id": 1
}
```

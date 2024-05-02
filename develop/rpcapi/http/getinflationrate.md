--- 
title: getInflationRate RPC Method 
image: img/thumbnail.png 
sidebar_label: getInflationRate
---  

Returns the specific inflation values for the current epoch

### Parameters [#](#parameters)

**None**

### Result [#](#result)

The result field will be a JSON object with the following fields:

*   `total: <f64>` - total inflation
*   `validator: <f64>` -inflation allocated to validators
*   `foundation: <f64>` - inflation allocated to the foundation
*   `epoch: <u64>` - epoch for which these values are valid

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getInflationRate"}
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": {
    "epoch": 100,
    "foundation": 0.001,
    "total": 0.149,
    "validator": 0.148
  },
  "id": 1
}
```

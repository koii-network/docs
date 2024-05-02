---
title: getEpochSchedule RPC Method 
image: img/thumbnail.png
sidebar_label: getEpochSchedule
---  
Returns the epoch schedule information from this cluster's genesis config

### Parameters [#](#parameters)

**None**

### Result [#](#result)

The result field will be an object with the following fields:

*   `slotsPerEpoch: <u64>` - the maximum number of slots in each epoch
*   `leaderScheduleSlotOffset: <u64>` - the number of slots before beginning of an epoch to calculate a leader schedule for that epoch
*   `warmup: <bool>` - whether epochs start short and grow
*   `firstNormalEpoch: <u64>` - first normal-length epoch, log2(slotsPerEpoch) - log2(MINIMUM\_SLOTS\_PER\_EPOCH)
*   `firstNormalSlot: <u64>` - MINIMUM\_SLOTS\_PER\_EPOCH \* (2.pow(firstNormalEpoch) - 1)

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc":"2.0","id":1,
    "method":"getEpochSchedule"
  }
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": {
    "firstNormalEpoch": 8,
    "firstNormalSlot": 8160,
    "leaderScheduleSlotOffset": 8192,
    "slotsPerEpoch": 8192,
    "warmup": true
  },
  "id": 1
}
```

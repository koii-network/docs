---
title: getLeaderSchedule RPC Method
image: img/thumbnail.png
sidebar_label: getLeaderSchedule RPC Method
---

Returns the leader schedule for an epoch

### Parameters
`u64` **optional**
Fetch the leader schedule for the epoch that corresponds to the provided slot.

:::info
If unspecified, the leader schedule for the current epoch is fetched
:::
`object` optional
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
Only return results for this validator identity (base-58 encoded)

### Result

Returns a result with one of the two following values:

*   `<null>` - if requested epoch is not found, or
*   `<object>` - the result field will be a dictionary of validator identities, as base-58 encoded strings, and their corresponding leader slot indices as values (indices are relative to the first slot in the requested epoch)

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getLeaderSchedule",
    "params": [
      null,
      {
        "identity": "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F"
      }
    ]
  }
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F": [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63
    ]
  },
  "id": 1
}
```

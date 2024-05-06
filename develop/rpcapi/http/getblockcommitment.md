---
title: getBlockCommitment RPC Method
image: img/thumbnail.png
sidebar_label: getBlockCommitment
---

Returns commitment for particular block

### Parameters
`u64` **required**
block number, identified by Slot

### Result

The result field will be a JSON object containing:

*   `commitment` - commitment, comprising either:
    *   `<null>` - Unknown block
    *   `<array>` - commitment, array of u64 integers logging the amount of cluster stake in roe that has voted on the block at each depth from 0 to `MAX_LOCKOUT_HISTORY` + 1
*   `totalStake` - total active stake, in roe, of the current epoch

### Code sample

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "getBlockCommitment",
    "params":[5]
  }
'
```


### Response

```
{
  "jsonrpc": "2.0",
  "result": {
    "commitment": [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 10, 32
    ],
    "totalStake": 42
  },
  "id": 1
}
```

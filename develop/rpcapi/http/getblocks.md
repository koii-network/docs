---
title: getBlocks RPC Method
image: img/thumbnail.png
sidebar_label: getBlocks
---

Returns a list of confirmed blocks between two slots

### Parameters
`u64` **required**
start\_slot, as `u64` integer

`u64` **optional**
end\_slot, as `u64` integer (must be no more than 500,000 blocks higher than the `start_slot`)

`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
    Default: `finalized`
      - "processed" is not supported

### Result

The result field will be an array of u64 integers listing confirmed blocks between `start_slot` and either `end_slot` - if provided, or latest confirmed block, inclusive. Max range allowed is 500,000 slots.

### Code sample

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "getBlocks",
    "params": [
      5, 10
    ]
  }
'
```


### Response

```
{
  "jsonrpc": "2.0",
  "result": [5, 6, 7, 8, 9, 10],
  "id": 1
}
```

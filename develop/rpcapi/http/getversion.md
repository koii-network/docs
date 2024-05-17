---
title: getVersion RPC Method
image: img/thumbnail.png
sidebar_label: getVersion
---

Returns the current Koii version running on the node

### Parameters

**None**

### Result

The result field will be a JSON object with the following fields:

*   `solana-core` - software version of solana-core as a `string`
*   `feature-set` - unique identifier of the current software's feature set as a `u32`

### Code sample

```bash
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getVersion"}
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": { "feature-set": 2891131721, "solana-core": "1.16.7" },
  "id": 1
}
```

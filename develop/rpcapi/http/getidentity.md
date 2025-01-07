---
title: getIdentity RPC Method
image: img/thumbnail.png
sidebar_label: getGenesisHash
---

Returns the identity pubkey for the current node

### Parameters

**None**

### Result

The result field will be a JSON object with the following fields:

*   `identity` - the identity pubkey of the current node (as a base-58 encoded string)

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getIdentity"}
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "identity": "2r1F4iWqVcb8M1DbAjQuFpebkQHY9hcVU4WuW2DJBppN"
  },
  "id": 1
}
```

---
title: getGenesisHash RPC Method
image: img/thumbnail.png
sidebar_label: getGenesisHash
---
Returns the genesis hash

### Parameters

**None**

### Result

*   `<string>` - a Hash as base-58 encoded string

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getGenesisHash"}
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": "GH7ome3EiwEr7tu9JuTh2dpYWBJK3z69Xm1ZE3MEE6JC",
  "id": 1
}
```

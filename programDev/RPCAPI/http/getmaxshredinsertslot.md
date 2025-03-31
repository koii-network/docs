---
title: getMaxShredInsertSlot RPC Method
image: img/thumbnail.png
sidebar_label: getMaxShredInsertSlot
---

Get the max slot seen from after shred insert.

### Parameters

**None**

### Result

`<u64>` - Slot number

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getMaxShredInsertSlot"}
'
```


### Response

```json
{ "jsonrpc": "2.0", "result": 1234, "id": 1 }
```

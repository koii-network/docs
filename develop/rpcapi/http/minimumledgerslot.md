---
title: minimumLedgerSlot RPC Method
image: img/thumbnail.png
sidebar_label: minimumLedgerSlot
---

Returns the lowest slot that the node has information about in its ledger.

:::info
This value may increase over time if the node is configured to purge older ledger data
:::

### Parameters

**None**

### Result

`u64` - Minimum ledger slot number

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"minimumLedgerSlot"}
'
```


### Response

```json
{ "jsonrpc": "2.0", "result": 1234, "id": 1 }
```

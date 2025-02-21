---
title: getSlot RPC Method
image: img/thumbnail.png
sidebar_label: getSlot
---

Returns the slot that has reached the [given or default commitment level](/develop/rpcapi/intro#configuring-state-commitment)

### Parameters

`object` optional

Configuration object containing the following fields:

- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` optional

- minContextSlot `number` optional
The minimum slot that the request can be evaluated at

### Result

`<u64>` - Current slot

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getSlot"}
'
```


### Response

```json
{ "jsonrpc": "2.0", "result": 1234, "id": 1 }
```

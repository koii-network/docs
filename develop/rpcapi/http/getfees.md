---
title: getFees RPC Method
image: img/thumbnail.png
sidebar_label: getFees
---
Returns a recent block hash from the ledger, a fee schedule that can be used to compute the cost of submitting a transaction using it, and the last slot in which the blockhash will be valid.

### Parameters

`string` **required**

Pubkey of account to query, as base-58 encoded string

`object` **optional**

Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**

### Result

The result will be an RpcResponse JSON object with `value` set to a JSON object with the following fields:

- `blockhash: <string>` - a Hash as base-58 encoded string
- `feeCalculator: <object>` - FeeCalculator object, the fee schedule for this block hash
- `lastValidSlot: <u64>` - DEPRECATED - this value is inaccurate and should not be relied upon
- `lastValidBlockHeight: <u64>` - last block height at which the blockhash will be valid

### Code sample

```bashbash
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  { "jsonrpc":"2.0", "id": 1, "method":"getFees"}
'
```


### Response

```jsonjson
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 1
    },
    "value": {
      "blockhash": "CSymwgTNX1j3E4qhKfJAUE41nBWEwXufoYryPbkde5RR",
      "feeCalculator": {
        "lamportsPerSignature": 5000
      },
      "lastValidSlot": 297,
      "lastValidBlockHeight": 296
    }
  },
  "id": 1
}
```

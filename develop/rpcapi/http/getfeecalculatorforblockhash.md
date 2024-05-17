---
title: getFeeCalculatorForBlockhash RPC Method
image: img/thumbnail.png
sidebar_label: getFeeCalculatorForBlockhash
---

Returns the fee calculator associated with the query blockhash, or `null` if the blockhash has expired

### Parameters

`string` **required**

Pubkey of account to query, as base-58 encoded string

`object` **optional**

Configuration object containing the following fields:

- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
- minContextSlot `number` **optional**

  The minimum slot that the request can be evaluated at

### Result

The result will be an RpcResponse JSON object with `value` set to a JSON object with the following fields:

- `<null>` - if the query blockhash has expired; or
- `<object>` - otherwise, a JSON object containing:
  - `feeCalculator: <object>` - FeeCalculator object describing the cluster fee rate at the queried blockhash

### Code sample

```bashbash
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getFeeCalculatorForBlockhash",
    "params": [
      "GJxqhuxcgfn5Tcj6y3f8X4FeCDd2RQ6SnEMo1AAxrPRZ"
    ]
  }
'
```


### Response

```jsonjson
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 221
    },
    "value": {
      "feeCalculator": {
        "lamportsPerSignature": 5000
      }
    }
  },
  "id": 1
}
```

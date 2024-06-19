---
title: getTokenSupply RPC Method
image: img/thumbnail.png
sidebar_label: getTokenSupply
---

Returns the total supply of an KPL Token type.

### Parameters
`string` **required**
Pubkey of account delegate to query, as base-58 encoded string

`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**

### Result

The result will be an RpcResponse JSON object with `value` equal to a JSON object containing:

*   `amount: <string>` - the raw total token supply without decimals, a string representation of u64
*   `decimals: <u8>` - number of base 10 digits to the right of the decimal place
*   `uiAmount: <number|null>` - the total token supply, using mint-prescribed decimals **DEPRECATED**
*   `uiAmountString: <string>` - the total token supply as a string, using mint-prescribed decimals

### Code sample

```sh
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "getTokenSupply",
    "params": [
      "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"
    ]
  }
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 1114
    },
    "value": {
      "amount": "100000",
      "decimals": 2,
      "uiAmount": 1000,
      "uiAmountString": "1000"
    }
  },
  "id": 1
}
```

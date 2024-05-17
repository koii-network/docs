---
title: getTokenLargestAccounts RPC Method
image: img/thumbnail.png
sidebar_label: getTokenLargestAccounts
---

Returns the 20 largest accounts of a particular KPL Token type.

### Parameters
`string` **required**
Pubkey of account delegate to query, as base-58 encoded string

`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**

### Result

The result will be an RpcResponse JSON object with `value` equal to an array of JSON objects containing:

*   `address: <string>` - the address of the token account
*   `amount: <string>` - the raw token account balance without decimals, a string representation of u64
*   `decimals: <u8>` - number of base 10 digits to the right of the decimal place
*   `uiAmount: <number|null>` - the token account balance, using mint-prescribed decimals **DEPRECATED**
*   `uiAmountString: <string>` - the token account balance as a string, using mint-prescribed decimals

### Code sample

```bash
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "getTokenLargestAccounts",
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
    "value": [
      {
        "address": "FYjHNoFtSQ5uijKrZFyYAxvEr87hsKXkXcxkcmkBAf4r",
        "amount": "771",
        "decimals": 2,
        "uiAmount": 7.71,
        "uiAmountString": "7.71"
      },
      {
        "address": "BnsywxTcaYeNUtzrPxQUvzAWxfzZe3ZLUJ4wMMuLESnu",
        "amount": "229",
        "decimals": 2,
        "uiAmount": 2.29,
        "uiAmountString": "2.29"
      }
    ]
  },
  "id": 1
}
```

---
title: requestAirdrop RPC Method
image: img/thumbnail.png
sidebar_label: requestAirdrop
---


Requests an airdrop of roe to a Pubkey

:::warning
This function only works for local test validator.
:::

### Parameters [#](#parameters)
`string` **required**
Pubkey of account to receive roe, as a base-58 encoded string

`integer` **required**
roe to airdrop, as a "u64"

`object` **optional**
Configuration object containing the following fields:
- commitment `string` **optional**

### Result [#](#result)

`<string>` - Transaction Signature of the airdrop, as a base-58 encoded string

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "requestAirdrop",
    "params": [
      "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
      1000000000
    ]
  }
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW",
  "id": 1
}
```

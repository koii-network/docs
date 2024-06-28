---
title: requestAirdrop RPC Method
image: img/thumbnail.png
sidebar_label: requestAirdrop
---


Requests an airdrop of lamports to a Pubkey

:::warning
This function only works for local test validator.
:::

### Parameters
`string` **required**
Pubkey of account to receive lamports, as a base-58 encoded string

`integer` **required**
lamports to airdrop, as a "u64"

`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**

### Result

`<string>` - Transaction Signature of the airdrop, as a base-58 encoded string

### Code sample

```sh
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


### Response

```json
{
  "jsonrpc": "2.0",
  "result": "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW",
  "id": 1
}
```

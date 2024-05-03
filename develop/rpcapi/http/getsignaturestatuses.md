--- 
title: getSignatureStatuses RPC Method 
image: img/thumbnail.png 
sidebar_label: getSignatureStatuses
---  

Returns the statuses of a list of signatures. Each signature must be a txid, the first signature of a transaction.

:::info
Unless the `searchTransactionHistory` configuration parameter is included, this method only searches the recent status cache of signatures, which retains statuses for all active slots plus `MAX_RECENT_BLOCKHASHES` rooted slots.
:::
### Parameters [#](#parameters)
`array` **required**  
An array of transaction signatures to confirm, as base-58 encoded strings (up to a maximum of 256)  

`object` **optional**  
Configuration object containing the following fields:  
- searchTransactionHistory `bool` **optional**  
- if `true` - a Koii Validator node will search its ledger cache for any signatures not found in the recent status cache

### Result [#](#result)

An array of `RpcResponse<object>` consisting of either:

*   `<null>` - Unknown transaction, or
*   `<object>`
    *   `slot: <u64>` - The slot the transaction was processed
    *   `confirmations: <usize|null>` - Number of blocks since signature confirmation, null if rooted, as well as finalized by a supermajority of the cluster
    *   `err: <object|null>` - Error if transaction failed, null if transaction succeeded. 
    *   `confirmationStatus: <string|null>` - The transaction's cluster confirmation status; Either `processed`, `confirmed`, or `finalized`. 
    *   DEPRECATED: `status: <object>` - Transaction status
        *   `"Ok": <null>` - Transaction was successful
        *   `"Err": <ERR>` - Transaction failed with TransactionError

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getSignatureStatuses",
    "params": [
      [
        "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW"
      ],
      {
        "searchTransactionHistory": true
      }
    ]
  }
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 82
    },
    "value": [
      {
        "slot": 48,
        "confirmations": null,
        "err": null,
        "status": {
          "Ok": null
        },
        "confirmationStatus": "finalized"
      },
      null
    ]
  },
  "id": 1
}
```

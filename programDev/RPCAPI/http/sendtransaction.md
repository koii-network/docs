---
title: sendTransaction RPC Method
image: img/thumbnail.png
sidebar_label: sendTransaction
---

Submits a signed transaction to the cluster for processing.

This method does not alter the transaction in any way; it relays the transaction created by clients to the node as-is.

If the node's rpc service receives the transaction, this method immediately succeeds, without waiting for any confirmations. A successful response from this method does not guarantee the transaction is processed or confirmed by the cluster.

While the rpc service will reasonably retry to submit it, the transaction could be rejected if transaction's `recent_blockhash` expires before it lands.

Use [`getSignatureStatuses`](/develop/rpcapi/http/getsignaturestatuses) to ensure a transaction is processed and confirmed.

Before submitting, the following preflight checks are performed:

1.  The transaction signatures are verified
2.  The transaction is simulated against the bank slot specified by the preflight commitment. On failure an error will be returned. Preflight checks may be disabled if desired. It is recommended to specify the same commitment and preflight commitment to avoid confusing behavior.

The returned signature is the first signature in the transaction, which is used to identify the transaction (transaction id). This identifier can be easily extracted from the transaction data before submission.

### Parameters

`string` **required**
Fully-signed Transaction, as encoded string.

`object` **optional**
Configuration object containing the following optional fields:
- `encoding` **string**
Default: `base58`
Encoding used for the transaction data.
Values: `base58` (_slow_, **DEPRECATED**), or `base64`.
- `skipPreflight` **bool**
Default: `false`
when `true`, skip the preflight transaction checks
- `preflightCommitment` **string**
Default: `finalized`
Commitment level to use for preflight.
- `maxRetries` **usize**
Maximum number of times for the RPC node to retry sending the transaction to the leader. If this parameter not provided, the RPC node will retry the transaction until it is finalized or until the blockhash expires.
- `minContextSlot` **number**
set the minimum slot at which to perform preflight transaction checks

### Result

`<string>` - First Transaction Signature embedded in the transaction, as base-58 encoded string (transaction id)

### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "sendTransaction",
    "params": [
      "4hXTCkRzt9WyecNzV1XPgCDfGAZzQKNxLXgynz5QDuWWPSAZBZSHptvWRL3BjCvzUXRdKvHL2b7yGrRQcWyaqsaBCncVG7BFggS8w9snUts67BSh3EqKpXLUm5UMHfD7ZBe9GhARjbNQMLJ1QD3Spr6oMTBU6EhdB4RD8CP2xUxr2u3d6fos36PD98XS6oX8TQjLpsMwncs5DAMiD4nNnR8NBfyghGCWvCVifVwvA8B8TJxE1aiyiv2L429BCWfyzAme5sZW8rDb14NeCQHhZbtNqfXhcp2tAnaAT"
    ]
  }
'
```

### Response

```json
{
  "jsonrpc": "2.0",
  "result": "2id3YC2jK9G5Wo2phDx4gJVAew8DcY5NAojnVuao8rkxwPYPe8cSwE5GzhEgJA2y8fVjDEo6iR6ykBvDxrTQrtpb",
  "id": 1
}
```

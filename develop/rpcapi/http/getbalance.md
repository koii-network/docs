# getBalance RPC Method | Solana
Returns the lamport balance of the account of provided Pubkey

### Parameters #

Pubkey of account to query, as base-58 encoded string

Configuration object containing the following fields:

The minimum slot that the request can be evaluated at

### Result #

`RpcResponse<u64>` - RpcResponse JSON object with `value` field set to the balance

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "getBalance",
    "params": [
      "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri"
    ]
  }
'
```


### Response #

```
{
  "jsonrpc": "2.0",
  "result": { "context": { "slot": 1 }, "value": 0 },
  "id": 1
}
```

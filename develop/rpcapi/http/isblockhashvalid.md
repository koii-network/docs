# isBlockhashValid RPC Method | Solana
Returns whether a blockhash is still valid or not

Version Restriction

This method is only available in `solana-core` v1.9 or newer. Please use getFeeCalculatorForBlockhash for `solana-core` v1.8 and below.

### Parameters #

the blockhash of the block to evaluate, as base-58 encoded string

Configuration object containing the following fields:

The minimum slot that the request can be evaluated at

### Result #

`<bool>` - `true` if the blockhash is still valid

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "id":45,
    "jsonrpc":"2.0",
    "method":"isBlockhashValid",
    "params":[
      "J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW",
      {"commitment":"processed"}
    ]
  }
'
```


### Response #

```
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 2483
    },
    "value": false
  },
  "id": 1
}
```

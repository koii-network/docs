# isBlockhashValid RPC Method 
Returns whether a blockhash is still valid or not



### Parameters [#](#parameters)
`string` **required**  
the blockhash of the block to evaluate, as base-58 encoded string  

`object` **optional**  
Configuration object containing the following fields:
- commitment `string` **optional** 
- minContextSlot `number` **optional**  
The minimum slot that the request can be evaluated at  

### Result [#](#result)

`<bool>` - `true` if the blockhash is still valid

### Code sample [#](#code-sample)

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


### Response [#](#response)

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

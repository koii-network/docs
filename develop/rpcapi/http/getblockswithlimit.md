# getBlocksWithLimit RPC Method 
Returns a list of confirmed blocks starting at the given slot

### Parameters [#](#parameters)
`u64` **required**  
start\_slot, as `u64` integer 

`u64` **required**  
limit, as `u64` integer (must be no more than 500,000 blocks higher than the `start_slot`)
   
`object` **optional** 
Configuration object containing the following field:
  - commitment `string` **optional**  
      Default: `finalized`
      - "processed" is not supported

### Result [#](#result)

The result field will be an array of u64 integers listing confirmed blocks starting at `start_slot` for up to `limit` blocks, inclusive.

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id":1,
    "method":"getBlocksWithLimit",
    "params":[5, 3]
  }
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": [5, 6, 7],
  "id": 1
}
```

# getFeeForMessage RPC Method | Solana
Get the fee the network will charge for a particular Message

Version Restriction

This method is only available in `solana-core` v1.9 or newer. Please use getFees for `solana-core` v1.8 and below.

### Parameters #

Base-64 encoded Message

Configuration object containing the following fields:

The minimum slot that the request can be evaluated at

### Result #

*   `<u64|null>` - Fee corresponding to the message at the specified blockhash

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
{
  "id":1,
  "jsonrpc":"2.0",
  "method":"getFeeForMessage",
  "params":[
    "AQABAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAA",
    {
      "commitment":"processed"
    }
  ]
}
'
```


### Response #

```
{
  "jsonrpc": "2.0",
  "result": { "context": { "slot": 5068 }, "value": 5000 },
  "id": 1
}
```

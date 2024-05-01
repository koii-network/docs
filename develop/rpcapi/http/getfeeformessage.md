# getFeeForMessage RPC Method 
Get the fee the network will charge for a particular Message

Version Restriction


### Parameters [#](#parameters)

Base-64 encoded Message

Configuration object containing the following fields:

The minimum slot that the request can be evaluated at

### Result [#](#result)

*   `<u64|null>` - Fee corresponding to the message at the specified blockhash

### Code sample [#](#code-sample)

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


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": { "context": { "slot": 5068 }, "value": 5000 },
  "id": 1
}
```

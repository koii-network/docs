# getMinimumBalanceForRentExemption RPC Method 

Returns minimum balance required to make account rent exempt.

### Parameters [#](#parameters)

`usize` optional

the Account's data length

`object` optional

Configuration object containing the following fields:

[commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` optional

### Result [#](#result)

`<u64>` - minimum lamports required in the Account to remain rent free

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "getMinimumBalanceForRentExemption",
    "params": [50]
  }
'
```


### Response [#](#response)

```
{ "jsonrpc": "2.0", "result": 500, "id": 1 }
```

--- 
title: getGenesisHash RPC Method  
image: img/thumbnail.png 
sidebar_label: getGenesisHash 
---  
getSupply RPC Method 
Returns information about the current supply.

### Parameters [#](#parameters)  
`object` **optional**  
Configuration object containing the following fields:  
- commitment `string` **optional**  
- excludeNonCirculatingAccountsList `bool` **optional**  
exclude non circulating accounts list from response

### Result [#](#result)

The result will be an RpcResponse JSON object with `value` equal to a JSON object containing:

*   `total: <u64>` - Total supply in lamports
*   `circulating: <u64>` - Circulating supply in lamports
*   `nonCirculating: <u64>` - Non-circulating supply in lamports
*   `nonCirculatingAccounts: <array>` - an array of account addresses of non-circulating accounts, as strings. If `excludeNonCirculatingAccountsList` is enabled, the returned array will be empty.

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0", "id":1, "method":"getSupply"}
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "slot": 1114
    },
    "value": {
      "circulating": 16000,
      "nonCirculating": 1000000,
      "nonCirculatingAccounts": [
        "FEy8pTbP5fEoqMV1GdTz83byuA8EKByqYat1PKDgVAq5",
        "9huDUZfxoJ7wGMTffUE7vh1xePqef7gyrLJu9NApncqA",
        "3mi1GmwEE3zo2jmfDuzvjSX9ovRXsDUKHvsntpkhuLJ9",
        "BYxEJTDerkaRWBem3XgnVcdhppktBXa2HbkHPKj2Ui4Z"
      ],
      "total": 1016000
    }
  },
  "id": 1
}
```

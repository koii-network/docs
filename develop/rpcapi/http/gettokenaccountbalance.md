# getTokenAccountBalance RPC Method 
Returns the token balance of an SPL Token account.

### Parameters [#](#parameters)
`string` **required**    
Pubkey of Token account to query, as base-58 encoded string  
`object` **optional**  
Configuration object containing the following fields:  
- commitment `string` **optional**  
### Result [#](#result)

The result will be an RpcResponse JSON object with `value` equal to a JSON object containing:

*   `amount: <string>` - the raw balance without decimals, a string representation of u64
*   `decimals: <u8>` - number of base 10 digits to the right of the decimal place
*   `uiAmount: <number|null>` - the balance, using mint-prescribed decimals **DEPRECATED**
*   `uiAmountString: <string>` - the balance as a string, using mint-prescribed decimals

For more details on returned data, the [Token Balances Structure](/develop/rpcapi/json-structures#token-balances) response from [getBlock](/develop/rpcapi/intro/http/getblock) follows a similar structure.

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0", "id": 1,
    "method": "getTokenAccountBalance",
    "params": [
      "7fUAJdStEuGbc3sM84cKRL6yYaaSstyLSU4ve5oovLS7"
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
      "slot": 1114
    },
    "value": {
      "amount": "9864",
      "decimals": 2,
      "uiAmount": 98.64,
      "uiAmountString": "98.64"
    },
    "id": 1
  }
}
```

# getStakeActivation RPC Method | Solana
Returns epoch activation information for a stake account

### Parameters #

Pubkey of stake Account to query, as base-58 encoded string

Configuration object containing the following fields:

The minimum slot that the request can be evaluated at

epoch for which to calculate activation details. If parameter not provided, defaults to current epoch. **DEPRECATED**, inputs other than the current epoch return an error.

### Result #

The result will be a JSON object with the following fields:

*   `state: <string>` - the stake account's activation state, either: `active`, `inactive`, `activating`, or `deactivating`
*   `active: <u64>` - stake active during the epoch
*   `inactive: <u64>` - stake inactive during the epoch

### Code sample #

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getStakeActivation",
    "params": [
      "CYRJWqiSjLitBAcRxPvWpgX3s5TvmN2SuRY3eEYypFvT",
      {
        "epoch": 4
      }
    ]
  }
'
```


### Response #

```
{
  "jsonrpc": "2.0",
  "result": {
    "active": 124429280,
    "inactive": 73287840,
    "state": "activating"
  },
  "id": 1
}
```

# getInflationReward RPC Method 
Returns the inflation / staking reward for a list of addresses for an epoch

### Parameters [#](#parameters)

An array of addresses to query, as base-58 encoded strings

Configuration object containing the following fields:

An epoch for which the reward occurs. If omitted, the previous epoch will be used

The minimum slot that the request can be evaluated at

### Result [#](#result)

The result field will be a JSON array with the following fields:

*   `epoch: <u64>` - epoch for which reward occured
*   `effectiveSlot: <u64>` - the slot in which the rewards are effective
*   `amount: <u64>` - reward amount in lamports
*   `postBalance: <u64>` - post balance of the account in lamports
*   `commission: <u8|undefined>` - vote account commission when the reward was credited

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getInflationReward",
    "params": [
      [
        "6dmNQ5jwLeLk5REvio1JcMshcbvkYMwy26sJ8pbkvStu",
        "BGsqMegLpV6n6Ve146sSX2dTjUMj3M92HnU8BbNRMhF2"
      ],
      {"epoch": 2}
    ]
  }
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": [
    {
      "amount": 2500,
      "effectiveSlot": 224,
      "epoch": 2,
      "postBalance": 499999442500
    },
    null
  ],
  "id": 1
}
```

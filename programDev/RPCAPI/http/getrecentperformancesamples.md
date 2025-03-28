---
title: getRecentPerformanceSamples RPC Method
image: img/thumbnail.png
sidebar_label: getRecentPerformanceSamples
---

Returns a list of recent performance samples, in reverse slot order. Performance samples are taken every 60 seconds and include the number of transactions and slots that occur in a given time window.

### Parameters
limit `usize` **optional**
number of samples to return (maximum 720)

### Result

An array of `RpcPerfSample<object>` with the following fields:

*   `slot: <u64>` - Slot in which sample was taken at
*   `numTransactions: <u64>` - Number of transactions processed during the sample period
*   `numSlots: <u64>` - Number of slots completed during the sample period
*   `samplePeriodSecs: <u16>` - Number of seconds in a sample window
*   `numNonVoteTransaction: <u64>` - Number of non-vote transactions processed during the sample period.

:::info
`numNonVoteTransaction` is present starting with v1.15. To get a number of voting transactions compute:
`numTransactions - numNonVoteTransaction`
:::
### Code sample

```sh
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc":"2.0", "id":1,
    "method": "getRecentPerformanceSamples",
    "params": [4]}
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "numSlots": 126,
      "numTransactions": 126,
      "numNonVoteTransaction": 1,
      "samplePeriodSecs": 60,
      "slot": 348125
    },
    {
      "numSlots": 126,
      "numTransactions": 126,
      "numNonVoteTransaction": 1,
      "samplePeriodSecs": 60,
      "slot": 347999
    },
    {
      "numSlots": 125,
      "numTransactions": 125,
      "numNonVoteTransaction": 0,
      "samplePeriodSecs": 60,
      "slot": 347873
    },
    {
      "numSlots": 125,
      "numTransactions": 125,
      "numNonVoteTransaction": 0,
      "samplePeriodSecs": 60,
      "slot": 347748
    }
  ],
  "id": 1
}
```

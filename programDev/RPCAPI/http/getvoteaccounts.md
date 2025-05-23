---
title: getVoteAccounts RPC Method
image: img/thumbnail.png
sidebar_label: getVoteAccounts
---

Returns the account info and associated stake for all the voting accounts in the current bank.

### Parameters
`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
- votePubkey `string` **optional**
Only return results for this validator vote address (base-58 encoded)
- keepUnstakedDelinquents `bool` **optional**
Do not filter out delinquent validators with no stake
- delinquentSlotDistance `u64` **optional**
Specify the number of slots behind the tip that a validator must fall to be considered delinquent. **NOTE:** For the sake of consistency between ecosystem products, _it is **not** recommended that this argument be specified._

### Result

The result field will be a JSON object of `current` and `delinquent` accounts, each containing an array of JSON objects with the following sub fields:

*   `votePubkey: <string>` - Vote account address, as base-58 encoded string
*   `nodePubkey: <string>` - Validator identity, as base-58 encoded string
*   `activatedStake: <u64>` - the stake, in lamports, delegated to this vote account and active in this epoch
*   `epochVoteAccount: <bool>` - bool, whether the vote account is staked for this epoch
*   `commission: <number>` - percentage (0-100) of rewards payout owed to the vote account
*   `lastVote: <u64>` - Most recent slot voted on by this vote account
*   `epochCredits: <array>` - Latest history of earned credits for up to five epochs, as an array of arrays containing: `[epoch, credits, previousCredits]`.
*   `rootSlot: <u64>` - Current root slot for this vote account

### Code sample

Restrict results to a single validator vote account:

```
curl https://mainnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getVoteAccounts",
    "params": [
      {
        "votePubkey": "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw"
      }
    ]
  }
'
```


### Response

```json
{
  "jsonrpc": "2.0",
  "result": {
    "current": [
      {
        "commission": 0,
        "epochVoteAccount": true,
        "epochCredits": [
          [1, 64, 0],
          [2, 192, 64]
        ],
        "nodePubkey": "B97CCUW3AEZFGy6uUg6zUdnNYvnVq5VG8PUtb2HayTDD",
        "lastVote": 147,
        "activatedStake": 42,
        "votePubkey": "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw"
      }
    ],
    "delinquent": []
  },
  "id": 1
}
```

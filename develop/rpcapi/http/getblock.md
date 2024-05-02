# getBlock RPC Method 
Returns identity and transaction information about a confirmed block in the ledger

### Parameters [#](#parameters)
u64 **required**  
slot number, as `u64` integer

object **optional**  
Configuration object containing the following fields:  
  - commitment `string` **optional**
      - Default: `finalized`  
        - `processed` is not supported.
  - encoding `string` **optional**
      - Default: `json`  
        encoding format for each returned ransaction
      - `json``jsonParsed``base58``base64`

          *   `jsonParsed` attempts to use program-specific instruction parsers to return more human-readable and explicit data in the `transaction.message.instructions` list.
          *   If `jsonParsed` is requested but a parser cannot be found, the instruction falls back to regular JSON encoding (`accounts`, `data`, and `programIdIndex` fields).
  - transactionDetails `string` **optional**  
    Default: `full`  
    level of transaction detail to return  
    Values: `full` `accounts` `signatures` `none`

      *   If `accounts` are requested, transaction details only include signatures and an annotated list of accounts in each transaction.
      *   Transaction metadata is limited to only: fee, err, pre\_balances, post\_balances, pre\_token\_balances, and post\_token\_balances.
  - maxSupportedTransactionVersion `number` **optional**  
    the max transaction version to return in responses.
      *   If the requested block contains a transaction with a higher version, an error will be returned.
      *   If this parameter is omitted, only legacy transactions will be returned, and a block containing any versioned transaction will prompt the error.
  - rewards `bool` **optional** 
      whether to populate the `rewards` array. If parameter not provided, the default includes rewards.

### Result [#](#result)

The result field will be an object with the following fields:

*   `<null>` - if specified block is not confirmed
*   `<object>` - if block is confirmed, an object with the following fields:
    *   `blockhash: <string>` - the blockhash of this block, as base-58 encoded string
    *   `previousBlockhash: <string>` - the blockhash of this block's parent, as base-58 encoded string; if the parent block is not available due to ledger cleanup, this field will return "11111111111111111111111111111111"
    *   `parentSlot: <u64>` - the slot index of this block's parent
    *   `transactions: <array>` - present if "full" transaction details are requested; an array of JSON objects containing:
        *   `transaction: <object|[string,encoding]>` - [Transaction](/develop/rpcapi/json-structures#transactions) object, either in JSON format or encoded binary data, depending on encoding parameter
        *   `meta: <object>` - transaction status metadata object, containing `null` or:
            *   `err: <object|null>` - Error if transaction failed, null if transaction succeeded. 
            *   `fee: <u64>` - fee this transaction was charged, as u64 integer
            *   `preBalances: <array>` - array of u64 account balances from before the transaction was processed
            *   `postBalances: <array>` - array of u64 account balances after the transaction was processed
            *   `innerInstructions: <array|null>` - List of [inner instructions](/develop/rpcapi/json-structures#inner-instructions) or `null` if inner instruction recording was not enabled during this transaction
            *   `preTokenBalances: <array|undefined>` - List of [token balances](/develop/rpcapi/json-structures#token-balances) from before the transaction was processed or omitted if token balance recording was not yet enabled during this transaction
            *   `postTokenBalances: <array|undefined>` - List of [token balances](/develop/rpcapi/json-structures#token-balances) from after the transaction was processed or omitted if token balance recording was not yet enabled during this transaction
            *   `logMessages: <array|null>` - array of string log messages or `null` if log message recording was not enabled during this transaction
            *   `rewards: <array|null>` - transaction-level rewards, populated if rewards are requested; an array of JSON objects containing:
                *   `pubkey: <string>` - The public key, as base-58 encoded string, of the account that received the reward
                *   `lamports: <i64>`\- number of reward lamports credited or debited by the account, as a i64
                *   `postBalance: <u64>` - account balance in lamports after the reward was applied
                *   `rewardType: <string|undefined>` - type of reward: "fee", "rent", "voting", "staking"
                *   `commission: <u8|undefined>` - vote account commission when the reward was credited, only present for voting and staking rewards
            *   DEPRECATED: `status: <object>` - Transaction status
                *   `"Ok": <null>` - Transaction was successful
                *   `"Err": <ERR>` - Transaction failed with TransactionError
            *   `loadedAddresses: <object|undefined>` - Transaction addresses loaded from address lookup tables. Undefined if `maxSupportedTransactionVersion` is not set in request params, or if `jsonParsed` encoding is set in request params.
                *   `writable: <array[string]>` - Ordered list of base-58 encoded addresses for writable loaded accounts
                *   `readonly: <array[string]>` - Ordered list of base-58 encoded addresses for readonly loaded accounts
            *   `returnData: <object|undefined>` - the most-recent return data generated by an instruction in the transaction, with the following fields:
                *   `programId: <string>` - the program that generated the return data, as base-58 encoded Pubkey
                *   `data: <[string, encoding]>` - the return data itself, as base-64 encoded binary data
            *   `computeUnitsConsumed: <u64|undefined>` - number of compute units consumed by the transaction
        *   `version: <"legacy"|number|undefined>` - Transaction version. Undefined if `maxSupportedTransactionVersion` is not set in request params.
    *   `signatures: <array>` - present if "signatures" are requested for transaction details; an array of signatures strings, corresponding to the transaction order in the block
    *   `rewards: <array|undefined>` - block-level rewards, present if rewards are requested; an array of JSON objects containing:
        *   `pubkey: <string>` - The public key, as base-58 encoded string, of the account that received the reward
        *   `lamports: <i64>`\- number of reward lamports credited or debited by the account, as a i64
        *   `postBalance: <u64>` - account balance in lamports after the reward was applied
        *   `rewardType: <string|undefined>` - type of reward: "fee", "rent", "voting", "staking"
        *   `commission: <u8|undefined>` - vote account commission when the reward was credited, only present for voting and staking rewards
    *   `blockTime: <i64|null>` - estimated production time, as Unix timestamp (seconds since the Unix epoch). null if not available
    *   `blockHeight: <u64|null>` - the number of blocks beneath this block

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0","id":1,
    "method":"getBlock",
    "params": [
      430,
      {
        "encoding": "json",
        "maxSupportedTransactionVersion":0,
        "transactionDetails":"full",
        "rewards":false
      }
    ]
  }
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": {
    "blockHeight": 428,
    "blockTime": null,
    "blockhash": "3Eq21vXNB5s86c62bVuUfTeaMif1N2kUqRPBmGRJhyTA",
    "parentSlot": 429,
    "previousBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B",
    "transactions": [
      {
        "meta": {
          "err": null,
          "fee": 5000,
          "innerInstructions": [],
          "logMessages": [],
          "postBalances": [499998932500, 26858640, 1, 1, 1],
          "postTokenBalances": [],
          "preBalances": [499998937500, 26858640, 1, 1, 1],
          "preTokenBalances": [],
          "rewards": null,
          "status": {
            "Ok": null
          }
        },
        "transaction": {
          "message": {
            "accountKeys": [
              "3UVYmECPPMZSCqWKfENfuoTv51fTDTWicX9xmBD2euKe",
              "AjozzgE83A3x1sHNUR64hfH7zaEBWeMaFuAN9kQgujrc",
              "SysvarS1otHashes111111111111111111111111111",
              "SysvarC1ock11111111111111111111111111111111",
              "Vote111111111111111111111111111111111111111"
            ],
            "header": {
              "numReadonlySignedAccounts": 0,
              "numReadonlyUnsignedAccounts": 3,
              "numRequiredSignatures": 1
            },
            "instructions": [
              {
                "accounts": [1, 2, 3, 0],
                "data": "37u9WtQpcm6ULa3WRQHmj49EPs4if7o9f1jSRVZpm2dvihR9C8jY4NqEwXUbLwx15HBSNcP1",
                "programIdIndex": 4
              }
            ],
            "recentBlockhash": "mfcyqEXB3DnHXki6KjjmZck6YjmZLvpAByy2fj4nh6B"
          },
          "signatures": [
            "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv"
          ]
        }
      }
    ]
  },
  "id": 1
}
```

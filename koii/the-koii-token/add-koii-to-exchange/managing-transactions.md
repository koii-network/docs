---
title: Managing Transactions
description: Learn how to manage deposits and withdrawals of KOII on a cryptocurrency exchange.
image: img/thumbnail.png
sidebar_label: Managing Transactions
---

## Deposit Accounts

A Koii account exists as soon as it has a balance, so setting up a deposit account is as simple as generating a keypair using our [wallet tools](/develop/command-line-tool/koii-cli/create-wallet).

:::info
We recommend using a unique deposit account for each of your users.
:::

Direct users to the appropriate deposit address when they want to deposit KOII into your exchange.

Deposit accounts must be rent-exempt. This is done by making sure their balance is at least 2 years worth of [rent](/concepts/settlement-layer/rent) in KOII.

To find the minimum rent-exempt amount you need for your deposit accounts, query [`getMinimumBalanceForRentExemption`](/develop/rpcapi/http/getminimumbalanceforrentexemption) or use the `koii rent 0` command via the CLI.

### Request

```bash
    curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '{
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getMinimumBalanceForRentExemption",
      "params": [0]
    }'
```

### Response

```json
    { "jsonrpc": "2.0", "result": 890880, "id": 1 }
```

<!-- TODO: WE REALLY SHOULD HAVE SOMETHING ON OFFLINE ACCOUNTS  -->
<!-- ## Offline Accounts

You may wish to keep the keys for one or more collection accounts offline for greater security. If so, you will need to move KOII to hot accounts using our [offline methods](https://docs.solanalabs.com/cli/examples/offline-signing). -->


<!-- NOTE: This is the unwritten content on versioned transactions from Solana. At the time of writing, we aren't supporting versioned transactions, so I'm leaving this here for future reference. -->
<!-- ## Versioned Transaction Migration

When the Mainnet Beta network starts processing versioned transactions, exchanges **MUST** make changes. If no changes are made, deposit detection will no longer work properly because fetching a versioned transaction or a block containing versioned transactions will return an error.

-`{"maxSupportedTransactionVersion": 0}` The `maxSupportedTransactionVersion` parameter must be added to `getBlock` and `getTransaction` requests to avoid disruption to deposit detection. The latest transaction version is `0` and should be specified as the max supported transaction version value.

It's important to understand that versioned transactions allow users to create transactions that use another set of account keys loaded from on-chain address lookup tables.

-`{"encoding": "jsonParsed"}` When fetching blocks and transactions, it's now recommended to use the `"jsonParsed"` encoding because it includes all transaction account keys (including those from lookup tables) in the message `"accountKeys"` list. This makes it straightforward to resolve balance changes detailed in `preBalances` / `postBalances` and `preTokenBalances` / `postTokenBalances`. If the `"json"` encoding is used instead, entries in `preBalances` / `postBalances` and `preTokenBalances` / `postTokenBalances` may refer to account keys that are **NOT** in the `"accountKeys"` list and need to be resolved using `"loadedAddresses"` entries in the transaction metadata. -->

## Polling for Blocks

In order to track deposit accounts, you should poll for each confirmed block and inspect it for the necessary addresses. This can be done by sending a [`getBlocks`](/develop/rpcapi/http/getblocks) request to the RPC API, setting the `start-slot` parameter to the last block you processed.

### Request

```bash
    curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '{
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getBlocks",
      "params": [160017005, 160017015]
    }'
```

### Response

```json
    {
      "jsonrpc": "2.0",
      "result": [
        160017005, 160017006, 160017007, 160017012, 160017013, 160017014, 160017015
      ],
      "id": 1
    }
```

:::info
Gaps in the sequence of integers are expected; not every slot creates a block.
:::

Once you have the blocks to be processed, you can request each block's contents with a [`getBlock`](/develop/rpcapi/http/getblock) request.

### Request

```bash
    curl https://testnet.koii.network -X POST -H 'Content-Type: application/json' -d '{
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getBlock",
      "params": [
        166974442,
        {
          "encoding": "jsonParsed",
          "maxSupportedTransactionVersion": 0,
          "transactionDetails": "accounts",
          "rewards": false
        }
      ]
    }'
```

### Response

```json
    {
      "jsonrpc": "2.0",
      "result": {
        "blockHeight": 157201607,
        "blockTime": 1665070281,
        "blockhash": "HKhao674uvFc4wMK1Cm3UyuuGbKExdgPFjXQ5xtvsG3o",
        "parentSlot": 166974441,
        "previousBlockhash": "98CNLU4rsYa2HDUyp7PubU4DhwYJJhSX9v6pvE7SWsAo",
        "transactions": [
          ... (omitted)
          {
            "meta": {
              "err": null,
              "fee": 5000,
              "postBalances": [
                1110663066,
                1,
                1040000000
              ],
              "postTokenBalances": [],
              "preBalances": [
                1120668066,
                1,
                1030000000
              ],
              "preTokenBalances": [],
              "status": {
                "Ok": null
              }
            },
            "transaction": {
              "accountKeys": [
                {
                  "pubkey": "9aE476sH92Vz7DMPyq5WLPkrKWivxeuTKEFKd2sZZcde",
                  "signer": true,
                  "source": "transaction",
                  "writable": true
                },
                {
                  "pubkey": "11111111111111111111111111111111",
                  "signer": false,
                  "source": "transaction",
                  "writable": false
                },
                {
                  "pubkey": "G1wZ113tiUHdSpQEBcid8n1x8BAvcWZoZgxPKxgE5B7o",
                  "signer": false,
                  "source": "lookupTable",
                  "writable": true
                }
              ],
              "signatures": [
                "2CxNRsyRT7y88GBwvAB3hRg8wijMSZh3VNYXAdUesGSyvbRJbRR2q9G1KSEpQENmXHmmMLHiXumw4dp8CvzQMjrM"
              ]
            },
            "version": 0
          },
          ... (omitted)
        ]
      },
      "id": 1
    }
```

We provide the `preBalances` and `postBalances` fields so that the balance changes can be tracked without the need for parsing the entire transaction. The starting and ending balances are listed in Roe. The index position of the balances and the `accountKeys` entries will match. For example, if you want to obtain the information for the first account listed in `accountKeys` (index position 0), you can find the information at `prebalances[0]` and `postBalances[0]`.

If you need additional information about transactions that's unavailable through this endpoint, you can fetch the block in binary format and parse it with the [Javascript SDK](https://github.com/koii-network/k2-web3.js).

:::info

- If you don't need information about the validator fees on each block, you can disable this information with `{"rewards": false}`.

- If you're just tracking balances and don't need metadata or detailed transaction information, you can disable it by setting `{"transactionDetails": "accounts"}`. This will speed up block fetching.

:::

## Fetching Address History

:::warning
Querying the transaction history of a specific address can be useful for inspecting individual accounts for a period of time, but it should not be used for tracking all deposit addresses over all slots.
:::

To query an address:

1. Send a [`getSignaturesForAddress`](/develop/rpcapi/http/getsignaturesforaddress) request to the RPC node.

### Request

```bash
    curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '{
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getSignaturesForAddress",
      "params": [
        "3M2b3tLji7rvscqrLAHMukYxDK2nB96Q9hwfV6QkdzBN",
        {
          "limit": 3
        }
      ]
    }'
```

### Response

```json
    {
      "jsonrpc": "2.0",
      "result": [
        {
          "blockTime": 1662064640,
          "confirmationStatus": "finalized",
          "err": null,
          "memo": null,
          "signature": "3EDRvnD5TbbMS2mCusop6oyHLD8CgnjncaYQd5RXpgnjYUXRCYwiNPmXb6ZG5KdTK4zAaygEhfdLoP7TDzwKBVQp",
          "slot": 148697216
        },
        {
          "blockTime": 1662064434,
          "confirmationStatus": "finalized",
          "err": null,
          "memo": null,
          "signature": "4rPQ5wthgSP1kLdLqcRgQnkYkPAZqjv5vm59LijrQDSKuL2HLmZHoHjdSLDXXWFwWdaKXUuryRBGwEvSxn3TQckY",
          "slot": 148696843
        },
        {
          "blockTime": 1662064341,
          "confirmationStatus": "finalized",
          "err": null,
          "memo": null,
          "signature": "36Q383JMiqiobuPV9qBqy41xjMsVnQBm9rdZSdpbrLTGhSQDTGZJnocM4TQTVfUGfV2vEX9ZB3sex6wUBUWzjEvs",
          "slot": 148696677
        }
      ],
      "id": 1
    }
```

2. For each signature returned, get the transaction details by sending a [`getTransaction`](/develop/rpcapi/http/gettransaction) request.

### Request

```bash
    curl https://testnet.koii.network -X POST -H 'Content-Type: application/json' -d '{
      "jsonrpc":"2.0",
      "id":1,
      "method":"getTransaction",
      "params":[
        "2CxNRsyRT7y88GBwvAB3hRg8wijMSZh3VNYXAdUesGSyvbRJbRR2q9G1KSEpQENmXHmmMLHiXumw4dp8CvzQMjrM",
        {
          "encoding":"jsonParsed",
          "maxSupportedTransactionVersion":0
        }
      ]
    }'
```

### Response

```json
    {
      "jsonrpc": "2.0",
      "result": {
        "blockTime": 1665070281,
        "meta": {
          "err": null,
          "fee": 5000,
          "innerInstructions": [],
          "logMessages": [
            "Program 11111111111111111111111111111111 invoke [1]",
            "Program 11111111111111111111111111111111 success"
          ],
          "postBalances": [1110663066, 1, 1040000000],
          "postTokenBalances": [],
          "preBalances": [1120668066, 1, 1030000000],
          "preTokenBalances": [],
          "rewards": [],
          "status": {
            "Ok": null
          }
        },
        "slot": 166974442,
        "transaction": {
          "message": {
            "accountKeys": [
              {
                "pubkey": "9aE476sH92Vz7DMPyq5WLPkrKWivxeuTKEFKd2sZZcde",
                "signer": true,
                "source": "transaction",
                "writable": true
              },
              {
                "pubkey": "11111111111111111111111111111111",
                "signer": false,
                "source": "transaction",
                "writable": false
              },
              {
                "pubkey": "G1wZ113tiUHdSpQEBcid8n1x8BAvcWZoZgxPKxgE5B7o",
                "signer": false,
                "source": "lookupTable",
                "writable": true
              }
            ],
            "addressTableLookups": [
              {
                "accountKey": "4syr5pBaboZy4cZyF6sys82uGD7jEvoAP2ZMaoich4fZ",
                "readonlyIndexes": [],
                "writableIndexes": [3]
              }
            ],
            "instructions": [
              {
                "parsed": {
                  "info": {
                    "destination": "G1wZ113tiUHdSpQEBcid8n1x8BAvcWZoZgxPKxgE5B7o",
                    "lamports": 10000000,
                    "source": "9aE476sH92Vz7DMPyq5WLPkrKWivxeuTKEFKd2sZZcde"
                  },
                  "type": "transfer"
                },
                "program": "system",
                "programId": "11111111111111111111111111111111"
              }
            ],
            "recentBlockhash": "BhhivDNgoy4L5tLtHb1s3TP19uUXqKiy4FfUR34d93eT"
          },
          "signatures": [
            "2CxNRsyRT7y88GBwvAB3hRg8wijMSZh3VNYXAdUesGSyvbRJbRR2q9G1KSEpQENmXHmmMLHiXumw4dp8CvzQMjrM"
          ]
        },
        "version": 0
      },
      "id": 1
    }
```

## Handling Withdrawals

When a user wishes to withdraw KOII, generate a Koii transfer transaction and send it to your RPC node for forwarding to the cluster.

### Synchronous Withdrawals

You can easily ensure that a transfer is successful by sending a synchronous transfer to the Koii cluster.

The Koii CLI tool offers the command `koii transfer`, which allows you manage and confirm transfer transactions. This method is synchronous, so it continue to track progress until the transfer has been finalized. It will also report any errors in the event the transfer fails.

```bash
    koii transfer <USER_ADDRESS> <AMOUNT> --allow-unfunded-recipient --keypair <KEYPAIR> --url http://localhost:10899
```

You can also accomplish this with the [Koii Javascript SDK](https://github.com/koii-network/k2-web3.js). You can build a transaction with `SystemProgram` and submit it with `sendAndConfirmTransaction`.

### Asynchronous Withdrawals

:::warning
If you wish to submit withdrawals asynchronously, it is your responsibility to ensure the transactions succeeded and was finalized.
:::

To ensure you do not double spend, it is *vital* that you do not retry a withdrawal until the transaction's recent blockhash has expired, even if it does not appear to be confirmed or finalized. Blockhash expiration is explained in more detail [below](/koii/the-koii-token/add-koii-to-exchange/managing-transactions#checking-blockhash-expiration).

To get the recent blockhash, send a request to [`getFees`](/develop/rpcapi/http/getfees).

```bash
    koii fees --url http://localhost:10899
```

To send a transaction asynchronously, pass the `--no-wait` flag in the Koii CLI tool and include the recent blockhash with the `--blockhash` argument.

```bash
    koii transfer <USER_ADDRESS> <AMOUNT> --no-wait --allow-unfunded-recipient --blockhash <RECENT_BLOCKHASH> --keypair <KEYPAIR> --url http://localhost:10899
```

Alternatively, you can build, sign, and serialize the transfer manually, then sent it to the cluster using the [`sendTransaction`](/develop/rpcapi/http/sendtransaction) endpoint.

## Checking Transaction Status

You can use the [`getSignatureStatuses`](/develop/rpcapi/http/getsignaturestatuses) JSON-RPC endpoint to get the status of a batch of transactions. You can check the number of confirmed blocks that have elapsed since the transaction was processed by checking the `confirmations` field. If `confirmations` is `null`, the transaction has been finalized.

### Request

```bash
    curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '{
      "jsonrpc":"2.0",
      "id":1,
      "method":"getSignatureStatuses",
      "params":[
        [
          "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW",
          "5j7s6NiJS3JAkvgkoc18WVAsiSaci2pxB2A6ueCJP4tprA2TFg9wSyTLeYouxPBJEMzJinENTkpA52YStRW5Dia7"
        ]
      ]
    }'
```

### Result

```json
    {
      "jsonrpc": "2.0",
      "result": {
        "context": {
          "slot": 82
        },
        "value": [
          {
            "slot": 72,
            "confirmations": 10,
            "err": null,
            "status": {
              "Ok": null
            }
          },
          {
            "slot": 48,
            "confirmations": null,
            "err": null,
            "status": {
              "Ok": null
            }
          }
        ]
      },
      "id": 1
    }
```

### Checking Blockhash Expiration

By passing a blockhash to the [`getFeeCalculatorForBlockhash`](/develop/rpcapi/http/getfeecalculatorforblockhash) endpoint with the `blockhash` parameter, you can check whether a given blockhash has expired. The blockhash is expired when the response is `null`, and you can safely retry a failed withdrawal transaction.

:::warning
Withdrawals are irreversible. To avoid accidental loss of a user's funds, we recommend validating all user-supplied account addresses.
:::

## Validating User-Supplied Account Addresses

### Address Verification

:::warning
There is no checksum on Koii addresses. It is highly recommended to decode the string and confirm that the length of the byte array is 32. However, it is possible for a mistyped address to decode to 32 bytes, so we also recommend checking the balance of each withdrawal address and asking the user to confirm their intentions when the balance is greater than zero.
:::

Koii addresses are generated as 32-byte arrays, encoded with the bitcoin base58 alphabet. The following regex describes the ASCII text string that is generated:

```regex
    [1-9A-HJ-NP-Za-km-z]{32,44}
```

### Validating Public Keys

:::info
A normal Koii account address is a 256-bit ed25519 public key, encoded as a base-58 string. It is recommended to confirm that user-supplied account addresses are valid ed25519 public keys.
:::

Here is a Java example of validating a user-supplied address as a valid ed25519 public key:

The following code sample assumes you're using the Maven.

`pom.xml`:

```xml
    <repositories>
      ...
      <repository>
        <id>spring</id>
        <url>https://repo.spring.io/libs-release/</url>
      </repository>
    </repositories>

    ...

    <dependencies>
      ...
      <dependency>
          <groupId>io.github.novacrypto</groupId>
          <artifactId>Base58</artifactId>
          <version>0.1.3</version>
      </dependency>
      <dependency>
          <groupId>cafe.cryptography</groupId>
          <artifactId>curve25519-elisabeth</artifactId>
          <version>0.1.0</version>
      </dependency>
    <dependencies>

    import io.github.novacrypto.base58.Base58;
    import cafe.cryptography.curve25519.CompressedEdwardsY;

    public class PubkeyValidator
    {
        public static boolean verifyPubkey(String userProvidedPubkey)
        {
            try {
                return _verifyPubkeyInternal(userProvidedPubkey);
            } catch (Exception e) {
                return false;
            }
        }

        public static boolean _verifyPubkeyInternal(String maybePubkey) throws Exception
        {
            byte[] bytes = Base58.base58Decode(maybePubkey);
            return !(new CompressedEdwardsY(bytes)).decompress().isSmallOrder();
        }
    }
```

## Minimum Transaction Amounts

Deposit and withdrawal transactions must be at least equal to the minimum rent-exempt balance for a KOII account holding no data. You can check this via the CLI using `koii rent 0`.

Similarly, every deposit account must contain at least this balance.

### Request

```bash
    curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '{
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getMinimumBalanceForRentExemption",
      "params": [0]
    }'
```

### Response

```json
    { "jsonrpc": "2.0", "result": 890880, "id": 1 }
```

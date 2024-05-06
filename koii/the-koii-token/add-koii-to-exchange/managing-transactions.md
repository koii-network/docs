---
title: Managing Transactions
description: WRITE THIS
image: img/thumbnail.png
sidebar_label: Managing Transactions
---
<!-- TODO: write description -->

## Setting up Deposit Accounts

Solana accounts do not require any on-chain initialization; once they contain some SOL, they exist. To set up a deposit account for your exchange, simply generate a Solana keypair using any of our [wallet tools](/develop/command-line-tool/koii-cli/create-wallet).

We recommend using a unique deposit account for each of your users.

Solana accounts must be made rent-exempt by containing 2-years worth of [rent](/concepts/settlement-layer/rent) in SOL. In order to find the minimum rent-exempt balance for your deposit accounts, query the [`getMinimumBalanceForRentExemption` endpoint](/develop/rpcapi/http/getminimumbalanceforrentexemption)

### Request

```console
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

## Offline Accounts

<!-- TODO: NO DOCS ON OFFLINE SIGNING  -->
You may wish to keep the keys for one or more collection accounts offline for greater security. If so, you will need to move SOL to hot accounts using our [offline methods](https://docs.solanalabs.com/cli/examples/offline-signing).

## Listening for Deposits

When a user wants to deposit SOL into your exchange, instruct them to send a transfer to the appropriate deposit address.

## Versioned Transaction Migration

When the Mainnet Beta network starts processing versioned transactions, exchanges **MUST** make changes. If no changes are made, deposit detection will no longer work properly because fetching a versioned transaction or a block containing versioned transactions will return an error.

-`{"maxSupportedTransactionVersion": 0}` The `maxSupportedTransactionVersion` parameter must be added to `getBlock` and `getTransaction` requests to avoid disruption to deposit detection. The latest transaction version is `0` and should be specified as the max supported transaction version value.

It's important to understand that versioned transactions allow users to create transactions that use another set of account keys loaded from on-chain address lookup tables.

-`{"encoding": "jsonParsed"}` When fetching blocks and transactions, it's now recommended to use the `"jsonParsed"` encoding because it includes all transaction account keys (including those from lookup tables) in the message `"accountKeys"` list. This makes it straightforward to resolve balance changes detailed in `preBalances` / `postBalances` and `preTokenBalances` / `postTokenBalances`. If the `"json"` encoding is used instead, entries in `preBalances` / `postBalances` and `preTokenBalances` / `postTokenBalances` may refer to account keys that are **NOT** in the `"accountKeys"` list and need to be resolved using `"loadedAddresses"` entries in the transaction metadata.

## Poll for Blocks

To track all the deposit accounts for your exchange, poll for each confirmed block and inspect for addresses of interest, using the JSON-RPC service of your Solana API node.

-To identify which blocks are available, send a [`getBlocks`](/develop/rpcapi/http/getblocks) request, passing the last block you have already processed as the start-slot parameter.

### Request

```console
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

Not every slot produces a block, so there may be gaps in the sequence of integers.

For each block, request its contents with a [`getBlock`](/develop/rpcapi/http/getblock) request.

### Request

```console
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
<!-- TODO: ADD ROE TO GLOSSARY -->
The `preBalances` and `postBalances` fields allow you to track the balance changes in every account without having to parse the entire transaction. They list the starting and ending balances of each account in [lamports](/docs/terminology#lamport), indexed to the `accountKeys` list. For example, if the deposit address of interest is `G1wZ113tiUHdSpQEBcid8n1x8BAvcWZoZgxPKxgE5B7o`, this transaction represents a transfer of 1040000000 - 1030000000 = 10,000,000 lamports = 0.01 SOL

If you need more information about the transaction type or other specifics, you can request the block from RPC in binary format, and parse it using either our [Rust SDK](https://github.com/solana-labs/solana) or [Javascript SDK](https://github.com/solana-labs/solana-web3.js).

## Block Fetching Tips

- `{"rewards": false}` By default, fetched blocks will return information about validator fees on each block and staking rewards on epoch boundaries. If you don't need this information, disable it with the "rewards" parameter.

- `{"transactionDetails": "accounts"}` By default, fetched blocks will return a lot of transaction info and metadata that isn't necessary for tracking account balances. Set the "transactionDetails" parameter to speed up block fetching.

## Address History

You can also query the transaction history of a specific address. This is generally _not_ a viable method for tracking all your deposit addresses over all slots, but may be useful for examining a few accounts for a specific period of time.

- Send a [`getSignaturesForAddress`](/develop/rpcapi/http/getsignaturesforaddress) request to the api node.

### Request

```console
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

- For each signature returned, get the transaction details by sending a [`getTransaction`](/develop/rpcapi/http/gettransaction) request.

### Request

```console
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

## Sending Withdrawals

To accommodate a user's request to withdraw SOL, you must generate a Solana transfer transaction, and send it to the api node to be forwarded to your cluster.

### Synchronous

Sending a synchronous transfer to the Solana cluster allows you to easily ensure that a transfer is successful and finalized by the cluster.

Solana's command-line tool offers a simple command, `solana transfer`, to generate, submit, and confirm transfer transactions. By default, this method will wait and track progress on stderr until the transaction has been finalized by the cluster. If the transaction fails, it will report any transaction errors.

```console
    koii transfer <USER_ADDRESS> <AMOUNT> --allow-unfunded-recipient --keypair <KEYPAIR> --url http://localhost:8899
```

<!-- TODO: GET CORRECT LINK FOR KOII JAVASCRIPT SDK -->
The [Koii Javascript SDK](https://github.com/solana-labs/solana-web3.js) offers a similar approach for the JS ecosystem. Use the `SystemProgram` to build a transfer transaction, and submit it using the `sendAndConfirmTransaction` method.

### Asynchronous

For greater flexibility, you can submit withdrawal transfers asynchronously. In these cases, it is your responsibility to verify that the transaction succeeded and was finalized by the cluster.

<!-- TODO: DON'T SEE ANYTHING AOBUT RECENT BLOCKHAS. WE DON'T SEEM TO HAVE AN EQUIVALENT TO SOLANA'S TRANSACTIONS PAGE -->
**Note:** Each transaction contains a [recent blockhash](/docs/core/transactions#recent-blockhash) to indicate its liveness. It is **critical** to wait until this blockhash expires before retrying a withdrawal transfer that does not appear to have been confirmed or finalized by the cluster. Otherwise, you risk a double spend. See more on [blockhash expiration](/docs/more/exchange#blockhash-expiration) below.

<!-- TODO: THE SOLANA DOCS ARE MAKING REFERENCE TO A DEPRECATED FUNCTION (IT APPEARS TO BE DEPRECATED IN KOII TOO), DOES IT NEED TO BE UPDATED TO SOMETHING NEW? -->
First, get a recent blockhash using the [`getFees`](/docs/rpc/deprecated/getfees) endpoint or the CLI command:

```console
    koii fees --url http://localhost:8899
```

In the command-line tool, pass the `--no-wait` argument to send a transfer asynchronously, and include your recent blockhash with the `--blockhash` argument:

```console
    koii transfer <USER_ADDRESS> <AMOUNT> --no-wait --allow-unfunded-recipient --blockhash <RECENT_BLOCKHASH> --keypair <KEYPAIR> --url http://localhost:8899
```

You can also build, sign, and serialize the transaction manually, and fire it off to the cluster using the JSON-RPC [`sendTransaction`](/develop/rpcapi/http/sendtransaction) endpoint.

## Transaction Confirmations & Finality

<!-- TODO: WE DON'T HAVE DEFINITIONS FOR A LOT OF THE TERMINOLOGY IN THE SOLANA DOCS. WOULD BE A GOOD USE OF THE DOCUSAURUS TERMINOLOGY PLUGIN -->
Get the status of a batch of transactions using the [`getSignatureStatuses`](/develop/rpcapi/http/getsignaturestatuses) JSON-RPC endpoint. The `confirmations` field reports how many [confirmed blocks](/docs/terminology#confirmed-block) have elapsed since the transaction was processed. If `confirmations: null`, it is [finalized](/docs/terminology#finality).

### Request

```console
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

### Blockhash Expiration
<!-- TODO: ANOTHER DEPRECATED FUNCTION -->
You can check whether a particular blockhash is still valid by sending a [`getFeeCalculatorForBlockhash`](/docs/rpc/deprecated/getfeecalculatorforblockhash) request with the blockhash as a parameter. If the response value is `null`, the blockhash is expired, and the withdrawal transaction using that blockhash should never succeed.

## Validating User-supplied Account Addresses for Withdrawals

As withdrawals are irreversible, it may be a good practice to validate a user-supplied account address before authorizing a withdrawal in order to prevent accidental loss of user funds.

### Basic verification

Solana addresses a 32-byte array, encoded with the bitcoin base58 alphabet. This results in an ASCII text string matching the following regular expression:

```regex
    [1-9A-HJ-NP-Za-km-z]{32,44}
```
<!-- TODO: WHY AREN'T THEY CHECKSUMMED? -->
This check is insufficient on its own as Solana addresses are not checksummed, so typos cannot be detected. To further validate the user's input, the string can be decoded and the resulting byte array's length confirmed to be 32. However, there are some addresses that can decode to 32 bytes despite a typo such as a single missing character, reversed characters and ignored case.

### Advanced verification

Due to the vulnerability to typos described above, it is recommended that the balance be queried for candidate withdraw addresses and the user prompted to confirm their intentions if a non-zero balance is discovered.

#### Valid ed25519 pubkey check

The address of a normal account in Solana is a Base58-encoded string of a 256-bit ed25519 public key. Not all bit patterns are valid public keys for the ed25519 curve, so it is possible to ensure user-supplied account addresses are at least correct ed25519 public keys.

#### Java

<!-- TODO: WHY IS THIS JAVA? -->
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

## Minimum Deposit & Withdrawal Amounts

Every deposit and withdrawal of SOL must be greater or equal to the minimum rent-exempt balance for the account at the wallet address (a basic SOL account holding no data), currently: 0.000890880 SOL

Similarly, every deposit account must contain at least this balance.

### Request

```console
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

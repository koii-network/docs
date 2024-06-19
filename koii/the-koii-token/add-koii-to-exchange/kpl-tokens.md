---
title: Supporting the KPL Token Standard
description: Instructions for supporting the KPL token standard on a cryptocurrency exchange.
image: img/thumbnail.png
sidebar_label: KPL Tokens
---

The K2 blockchain uses the KPL token standard for creating and exchanging synthetic tokens. There are some difference between the workflow for KOII tokens and KPL tokens.

## Token Mints

An KPL token is declared by first creating a mint account, storing metadata about the token. Each mint account is associated with only one KPL token.

## Installing the `spl-token` CLI Tool

The [`spl-token` cli tool](https://crates.io/crates/spl-token) is distributed with the Rust `cargo` tool. You can get instructions on installing `cargo` from [rustup.rs](https://rustup.rs). You can install `spl-token` with:

```sh
    cargo install spl-token-cli
```

And check the version with:

```sh
    spl-token --version
```

Result:

```sh
    spl-token-cli 2.0.1
```

## Account Creation

Unlike Koii accounts, KPL token accounts must be created before tokens are deposited. This can be done either with

```sh
spl-token create-account
```

or (implicitly)

```sh
spl-token transfer --fund-recipient ...
```

Additionally, KPL token accounts must be kept rent-exempt by depositing a small amount of KOII when the account is created. This amount can be checked by running:

```sh
koii rent 165
```

### Command Line

To create an KPL token account associated with the correct mint and owned by the keypair of the funding account, you can run the following command:

```sh
    spl-token create-account <TOKEN_MINT_ADDRESS>
```

### Example

```sh
    spl-token create-account AkUFCWTXb3w9nY2n6SFJvBV6VwvFUCe4KBMCcgLsa2ir
```

### Output

```sh
    Creating account 6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
    Signature: 4JsqZEPra2eDTHtHpB4FMWSfk3UgcCVmkKkP7zESZeMrKmFFkDkNd91pKP3vPVVZZPiu5XxyJwS73Vi5WsZL88D7
```

If you need to create an account with a specific keypair:

### Example

```sh
    koii-keygen new -o token-account.json

    spl-token create-account AkUFCWTXb3w9nY2n6SFJvBV6VwvFUCe4KBMCcgLsa2ir token-account.json
```

### Output

```sh
    Creating account 6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
    Signature: 4JsqZEPra2eDTHtHpB4FMWSfk3UgcCVmkKkP7zESZeMrKmFFkDkNd91pKP3vPVVZZPiu5XxyJwS73Vi5WsZL88D7
```

## Checking an Account's Balance

### Command Line

```sh
    spl-token balance <TOKEN_ACCOUNT_ADDRESS>
```

### Example

```sh
    spl-token balance 6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
```

### Output

```sh
    0
```

## Token Transfers

When transferring tokens, the source account must be the actual token account containing the amount to be transferred, but the recipient account can be a normal wallet account. If the wallet doesn't yet have an associated token account, it can be created automatically by the transfer by passing the `fund-recipient` flag.


### Command Line

```sh
    spl-token transfer <SENDER_ACCOUNT_ADDRESS> <AMOUNT> <RECIPIENT_WALLET_ADDRESS> --fund-recipient
```

### Example

```sh
    spl-token transfer 6B199xxzw3PkAm25hGJpjj3Wj3WNYNHzDAnt1tEqg5BN 1
```

### Output

```sh
    6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
    Transfer 1 tokens
      Sender: 6B199xxzw3PkAm25hGJpjj3Wj3WNYNHzDAnt1tEqg5BN
      Recipient: 6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
    Signature: 3R6tsog17QM8KfzbcbdP4aoMfwgo6hBggJDVy7dZPVmH2xbCWjEj31JKD53NzMrf25ChFjY7Uv2dfCDq4mGFFyAj
```

## Depositing

:::info
It is recommended to derive the accounts associated with each `wallet,mint` pair from KOII deposit accounts using associated token accounts and only accept deposits from ATA addresses.
:::

To monitor for deposit transactions, you can use the same [block polling](/koii/the-koii-token/add-koii-to-exchange/managing-transactions#polling-for-blocks) method described for KOII deposits, scanning for transactions referencing the token-account derived addresses. The `preTokenBalance` and `postTokenBalance` fields from the transaction metadata will provide information on the token mint and the main wallet address to which the token account belongs.

:::info
Because token accounts can be created during a transaction, it is possible that a transaction will not have a `preTokenBalance` entry. In this case, you can assume the starting balance will be zero.
:::

## Withdrawing

When a user wishes to withdraw tokens, they should provide the address of their KOII wallet. The exchange should check the address [as described here](/koii/the-koii-token/add-koii-to-exchange/managing-transactions#validating-user-supplied-account-addresses) before executing the withdrawal. The account must be owned by the System Program and have no account data. Reject addresses that do not meet these conditions.

If the address supplied has no KOII balance, obtain the user's confirmation before initiating the withdrawal.

The associated token account for the mint is derived from the withdrawal address, then the transfer is issued with a [TransferChecked](https://github.com/solana-labs/solana-program-library/blob/fc0d6a2db79bd6499f04b9be7ead0c400283845e/token/program/src/instruction.rs#L268) instruction. If the ATA is created during the transfer, the exchange should fund it on the user's behalf. For KPL tokens, the required funding is 0.00203928 KOII (2,039,280 Roe).

Template `spl-token transfer` command for a withdrawal:

```sh
    spl-token transfer --fund-recipient <exchange token account> <withdrawal amount> <withdrawal address>
```

## Other Considerations

### Freeze Authority

It may be necessary, for regulatory compliance, for an KPL token issuer to hold freeze authority over accounts associated with its mint, allowing them to freeze assets in any of these accounts. Assets in a frozen account cannot be used until the account is thawed. The freeze authority's public key will be registered in the KPL token's mint account.

## Basic Support for the KPL Token-2022 (Token-Extensions) Standard

KPL Token-2022, aka Token Extensions, is the most recent standard for creating synthetic tokens and adds many new optional features. If you already support KPL tokens, adding support for token extensions is relatively easy. The CLI tool will work for both, the `preTokenBalances` and `postTokenBalances` fields include Token-2022 balances, and associated token accounts work the same way.

Two changes you should note:

1. Querying RPCs for Token-2022 accounts must be done separately using the `TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb` program ID.
2. Normal KPL token accounts require 165 bytes, however extensions can increase this amount. As an example, the immutable owner extension would add an additional 5 bytes. This extension is always added to the ATA program, so Token-2022 account will have a minimum size of 170 bytes.

## Extension-Specific Considerations

Because extensions modify how tokens work, you may need to change how you handle tokens with certain extensions enabled.

To see all extensions on a mint or token account:

```sh
    spl-token display <account address>
```

### Transfer Fee

It is possible to set a transfer fee for tokens, withholding a percentage of the transferred tokens at the destination, to be collected later.

:::info
Keep in mind that if you are processing transfers with these tokens, the withheld amount will reduce the total token amount received at the destination.

We recommend specifying the expected fee during the transfer:

```sh
    spl-token transfer --expected-fee <fee amount> --fund-recipient <exchange token account> <withdrawal amount> <withdrawal address>
```

:::

### Mint Close Authority

The mint close authority extensions simply allows a token creator to close their mint, but only when the supply of tokens is zero. Closing a mint can lead to empty token accounts that are not associated with any mint. These accounts can be safely closed.

To close these token accounts:

```sh
    spl-token close --address <account address>
```

### Confidential Transfer

A mint can be configured to support confidential transfers, encrypting the amount of tokens sent in a transfer. The account owners will still be public.

Exchanges may choose to support confidential transfers but it is not required; you may also opt to force all transfers to be non-confidential.

To enable confidential transfers, first configure the account for it:

```sh
    spl-token configure-confidential-transfer-account --address <account address>
```

And then transfer:

```sh
    spl-token transfer --confidential <exchange token account> <withdrawal amount> <withdrawal address>
```

Because token amounts are encrypted, the `preTokenBalance` and `postTokenBalance` fields cannot be used. Instead, you must decrypt the new balance:

```sh
    spl-token apply-pending-balance --address <account address>
    spl-token withdraw-confidential-tokens --address <account address> <amount or ALL>
```

### Default Account State

A mint can be configured with a default account state of frozen when token creators want users to go through a verification process before granting access to the account.

### Non-Transferable

Non-transferable tokens can be burned and their accounts can be closed.

### Permanent Delegate

Stablecoins in certain jurisdictions may have a legal requirement to set a permanent delegate. This delegate has full control to transfer or burn tokens from any account. While it may be a legal requirement in some cases, it can also be abused to steal funds.

:::warning
If a token has as permanent delegate, tokens may be transferred without your knowledge.
:::

### Transfer Hook

Tokens may have a hook: an additional program called during transfer. Because this hook will add an additional account, and all accounts must be specified during a transfer, you will need to make some modifications to the transfer instructions for these tokens.

The CLI and instruction creators such as `createTransferCheckedWithTransferHookInstruction` add the extra accounts automatically, but the additional accounts may also be specified explicitly:

```sh
    spl-token transfer --transfer-hook-account <pubkey:role> --transfer-hook-account <pubkey:role> ...
```

### Required Memo on Transfer

Individual users have the option to require a memo on token transfer. This requires prepending a memo instruction to the transfer.

Exchanges have the option of either prepending the instruction themselves before transferring tokens to the users, or requiring users to prepend the instruction before sending to the exchange.

```sh
    spl-token transfer --with-memo <memo text> <exchange token account> <withdrawal amount> <withdrawal address>
```

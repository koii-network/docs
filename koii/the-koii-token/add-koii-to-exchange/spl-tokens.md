---
title: Supporting the SPL Token Standard
description: WRITE THIS
image: img/thumbnail.png
sidebar_label: SPL Tokens
---
<!-- TODO: write description -->

<!-- TODO: WE DO NOT APPEAR TO HAVE DOCS ON SPL TOKENS -->

<!-- TODO: SPL STANDS FOR 'SOLANA TOKEN LIBRARY' - ARE WE CHANGING THE NAME? -->

[SPL Token](https://spl.solana.com/token) is the standard for wrapped/synthetic token creation and exchange on the Solana blockchain.

The SPL Token workflow is similar to that of native KOII tokens, but there are a few differences which will be discussed in this section.

## Token Mints

Each _type_ of SPL Token is declared by creating a _mint_ account. This account stores metadata describing token features like the supply, number of decimals, and various authorities with control over the mint. Each SPL Token account references its associated mint and may only interact with SPL Tokens of that type.

## Installing the `spl-token` CLI Tool

<!-- TODO: DO WE HAVE A CLI TOOL FOR SPL TOKENS? -->
SPL Token accounts are queried and modified using the `spl-token` command line utility. The examples provided in this section depend upon having it installed on the local system.

`spl-token` is distributed from Rust [crates.io](https://crates.io/crates/spl-token) via the Rust `cargo` command line utility. The latest version of `cargo` can be installed using a handy one-liner for your platform at [rustup.rs](https://rustup.rs). Once `cargo` is installed, `spl-token` can be obtained with the following command:

```bash
    cargo install spl-token-cli
```

You can then check the installed version to verify.

```bash
    spl-token --version
```

Which should result in something like

```bash
    spl-token-cli 2.0.1
```

## Account Creation

SPL Token accounts carry additional requirements that native System Program accounts do not:

<!-- TODO: WHAT IS THE RENT EXEMPT REQUIREMENT FOR SPL TOKENS? -->
1. SPL Token accounts must be created before an amount of tokens can be deposited. Token accounts can be created explicitly with the `spl-token create-account` command, or implicitly by the `spl-token transfer --fund-recipient ...` command.
2. SPL Token accounts must remain [rent-exempt](/concepts/glossary#rent-exemption) for the duration of their existence and therefore require a small amount of native KOII tokens be deposited at account creation. For SPL Token accounts, this amount is 0.00203928 KOII (2,039,280 Roe).

### Command Line

To create an SPL Token account with the following properties:

1. Associated with the given mint
2. Owned by the funding account's keypair

```bash
    spl-token create-account <TOKEN_MINT_ADDRESS>
```

### Example

```bash
    spl-token create-account AkUFCWTXb3w9nY2n6SFJvBV6VwvFUCe4KBMCcgLsa2ir
```

Giving an output similar to:

```bash
    Creating account 6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
    Signature: 4JsqZEPra2eDTHtHpB4FMWSfk3UgcCVmkKkP7zESZeMrKmFFkDkNd91pKP3vPVVZZPiu5XxyJwS73Vi5WsZL88D7
```

Or to create an SPL Token account with a specific keypair:

```conosle
    solana-keygen new -o token-account.json
```

```bash
    spl-token create-account AkUFCWTXb3w9nY2n6SFJvBV6VwvFUCe4KBMCcgLsa2ir token-account.json
```

Giving an output similar to:

```bash
    Creating account 6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
    Signature: 4JsqZEPra2eDTHtHpB4FMWSfk3UgcCVmkKkP7zESZeMrKmFFkDkNd91pKP3vPVVZZPiu5XxyJwS73Vi5WsZL88D7
```

## Checking an Account's Balance

### Command Line

```bash
    spl-token balance <TOKEN_ACCOUNT_ADDRESS>
```

### Example

```bash
    spl-token balance 6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
```

Giving an output similar to:

```bash
    0
```

## Token Transfers

The source account for a transfer is the actual token account that contains the amount.

The recipient address however can be a normal wallet account. If an associated token account for the given mint does not yet exist for that wallet, the transfer will create it provided that the `--fund-recipient` argument as provided.

### Command Line

```bash
    spl-token transfer <SENDER_ACCOUNT_ADDRESS> <AMOUNT> <RECIPIENT_WALLET_ADDRESS> --fund-recipient
```

### Example

```bash
    spl-token transfer 6B199xxzw3PkAm25hGJpjj3Wj3WNYNHzDAnt1tEqg5BN 1
```

Giving an output similar to:

```bash
    6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
    Transfer 1 tokens
      Sender: 6B199xxzw3PkAm25hGJpjj3Wj3WNYNHzDAnt1tEqg5BN
      Recipient: 6VzWGL51jLebvnDifvcuEDec17sK6Wupi4gYhm5RzfkV
    Signature: 3R6tsog17QM8KfzbcbdP4aoMfwgo6hBggJDVy7dZPVmH2xbCWjEj31JKD53NzMrf25ChFjY7Uv2dfCDq4mGFFyAj
```

## Depositing

<!-- TODO: NO DOCS ON ASSOCIATED TOKEN ACCOUNT -->
<!-- TODO: REPLACE ALL INTERNAL LINKS TO /docs/more/exchange -->
Since each `(wallet, mint)` pair requires a separate account on chain. It is recommended that the addresses for these accounts be derived from KOII deposit wallets using the [Associated Token Account](https://spl.solana.com/associated-token-account) (ATA) scheme and that _only_ deposits from ATA addresses be accepted.

Monitoring for deposit transactions should follow the [block polling](/docs/more/exchange#poll-for-blocks) method described above. Each new block should be scanned for successful transactions referencing user token-account derived addresses. The `preTokenBalance` and `postTokenBalance` fields from the transaction's metadata must then be used to determine the effective balance change. These fields will identify the token mint and account owner (main wallet address) of the affected account.

Note that if a receiving account is created during the transaction, it will have no `preTokenBalance` entry as there is no existing account state. In this case, the initial balance can be assumed to be zero.

## Withdrawing

The withdrawal address a user provides must be that of their KOII wallet.

Before executing a withdrawal [transfer](/docs/more/exchange#token-transfers), the exchange should check the address as [described above](/docs/more/exchange#validating-user-supplied-account-addresses-for-withdrawals). Additionally this address must be owned by the System Program and have no account data. If the address has no KOII balance, user confirmation should be obtained before proceeding with the withdrawal. All other withdrawal addresses must be rejected.

From the withdrawal address, the [Associated Token Account](https://spl.solana.com/associated-token-account) (ATA) for the correct mint is derived and the transfer issued to that account via a [TransferChecked](https://github.com/solana-labs/solana-program-library/blob/fc0d6a2db79bd6499f04b9be7ead0c400283845e/token/program/src/instruction.rs#L268) instruction. Note that it is possible that the ATA address does not yet exist, at which point the exchange should fund the account on behalf of the user. For SPL Token accounts, funding the withdrawal account will require 0.00203928 KOII (2,039,280 Roe).

Template `spl-token transfer` command for a withdrawal:

```bash
    spl-token transfer --fund-recipient <exchange token account> <withdrawal amount> <withdrawal address>
```

## Other Considerations

### Freeze Authority

<!-- TODO: NO DOCS ON FREEZING ACCOUNTS -->
For regulatory compliance reasons, an SPL Token issuing entity may optionally choose to hold "Freeze Authority" over all accounts created in association with its mint. This allows them to [freeze](https://spl.solana.com/token#freezing-accounts) the assets in a given account at will, rendering the account unusable until thawed. If this feature is in use, the freeze authority's pubkey will be registered in the SPL Token's mint account.

## Basic Support for the SPL Token-2022 (Token-Extensions) Standard

<!-- TODO: NO DOCS ON TOKEN-2022 -->
[SPL Token-2022](https://spl.solana.com/token-2022) is the newest standard for wrapped/synthetic token creation and exchange on the Solana blockchain.

Also known as "Token Extensions", the standard contains many new features that token creators and account holders may optionally enable. These features include confidential transfers, fees on transfer, closing mints, metadata, permanent delegates, immutable ownership, and much more. Please see the [extension guide](https://spl.solana.com/token-2022/extensions) for more information.

If your exchange supports SPL Token, there isn't a lot more work required to support SPL Token-2022:

- the CLI tool works seamlessly with both programs starting with version 3.0.0.
- `preTokenBalances` and `postTokenBalances` include SPL Token-2022 balances
<!-- TODO: PROGRAM ID? -->
- RPC indexes SPL Token-2022 accounts, but they must be queried separately with program id `TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb`

The Associated Token Account works the same way, and properly calculates the required deposit amount of KOII for the new account.

<!-- TODO: CORRECT RENT EXEMPTION AMOUNTS? -->
Because of extensions, however, accounts may be larger than 165 bytes, so they may require more than 0.00203928 KOII to fund.

For example, the Associated Token Account program always includes the "immutable owner" extension, so accounts take a minimum of 170 bytes, which requires 0.00207408 KOII.

## Extension-Specific Considerations

The previous section outlines the most basic support for SPL Token-2022. Since the extensions modify the behavior of tokens, exchanges may need to change how they handle tokens.

It is possible to see all extensions on a mint or token account:

```bash
    spl-token display <account address>
```

### Transfer Fee

A token may be configured with a transfer fee, where a portion of transferred tokens are withheld at the destination for future collection.

If your exchange transfers these tokens, beware that they may not all arrive at the destination due to the withheld amount.

It is possible to specify the expected fee during a transfer to avoid any surprises:

```bash
    spl-token transfer --expected-fee <fee amount> --fund-recipient <exchange token account> <withdrawal amount> <withdrawal address>
```

### Mint Close Authority

With this extension, a token creator may close a mint, provided the supply of tokens is zero.

When a mint is closed, there may still be empty token accounts in existence, and they will no longer be associated to a valid mint.

It is safe to simply close these token accounts:

```bash
    spl-token close --address <account address>
```

### Confidential Transfer

Mints may be configured for confidential transfers, so that token amounts are encrypted, but the account owners are still public.

Exchanges may configure token accounts to send and receive confidential transfers, to hide user amounts. It is not required to enable confidential transfers on token accounts, so exchanges can force users to send tokens non-confidentially.

To enable confidential transfers, the account must be configured for it:

```bash
    spl-token configure-confidential-transfer-account --address <account address>
```

And to transfer:

```bash
    spl-token transfer --confidential <exchange token account> <withdrawal amount> <withdrawal address>
```

During a confidential transfer, the `preTokenBalance` and `postTokenBalance` fields will show no change. In order to sweep deposit accounts, you must decrypt the new balance to withdraw the tokens:

```bash
    spl-token apply-pending-balance --address <account address>
    spl-token withdraw-confidential-tokens --address <account address> <amount or ALL>
```

### Default Account State

Mints may be configured with a default account state, such that all new token accounts are frozen by default. These token creators may require users to go through a separate process to thaw the account.

### Non-Transferable

Some tokens are non-transferable, but they may still be burned and the account can be closed.

### Permanent Delegate

Token creators may designate a permanent delegate for all of their tokens. The permanent delegate may transfer or burn tokens from any account, potentially stealing funds.

This is a legal requirement for stablecoins in certain jurisdictions, or could be used for token repossession schemes.

Beware that these tokens may be transferred without your exchange's knowledge.

### Transfer Hook

Tokens may be configured with an additional program that must be called during transfers, in order to validate the transfer or perform any other logic.

Since the Solana runtime requires all accounts to be explicitly passed to a program, and transfer hooks require additional accounts, the exchange needs to create transfer instructions differently for these tokens.

The CLI and instruction creators such as `createTransferCheckedWithTransferHookInstruction` add the extra accounts automatically, but the additional accounts may also be specified explicitly:

```bash
    spl-token transfer --transfer-hook-account <pubkey:role> --transfer-hook-account <pubkey:role> ...
```

### Required Memo on Transfer

Users may configure their token accounts to require a memo on transfer.

Exchanges may need to prepend a memo instruction before transferring tokens back to users, or they may require users to prepend a memo instruction before sending to the exchange:

```bash
    spl-token transfer --with-memo <memo text> <exchange token account> <withdrawal amount> <withdrawal address>
```

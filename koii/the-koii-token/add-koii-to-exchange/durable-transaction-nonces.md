---
title: Working with Durable Transaction Nonces
description: Learn how to use a durable nonce.
image: img/thumbnail.png
sidebar_label: Durable Transaction Nonces
---

A typical Koii transaction must be signed and accepted quickly due to the short lifespan of the `recent_blockhash`. Durable transaction nonces are a solution to this issue.

## Creating a Nonce Account

Creating durable transactions nonces requires an account to store the next nonce value. Accounts must be rent-exempt.

The durable transaction nonce feature uses an account to store the next nonce value. Durable nonce accounts must be [rent-exempt](/implemented-proposals/rent#two-tiered-rent-regime), so need to carry the minimum balance to achieve this.

### Create None Account Command

```sh
koii-keygen new -o nonce-keypair.json
koii create-nonce-account nonce-keypair.json 1
```

### Create Nonce Account Output

```sh
A9nr12dXHm3TYW1vTLk1w3LX4UXPRkQk9F2LK68Fb1X9vR84UzFEtVmHbL6jVNCb1h5RLWUVhW8XzFzkCvXZCZZYkpXH
```

<!-- > To keep the keypair entirely offline, use the [Paper Wallet](/cli/wallets/paper) keypair generation [instructions](/cli/wallets/paper#seed-phrase-generation) instead

> [Full usage documentation](/cli/usage#solana-create-nonce-account) -->

## Delegate Nonce Authority

If you need a more complex ownership arrangement or derived account addresses not associated with a keypair, you have the option to assign authority of a nonce account to another account. The new authority will gain full control over the account, including the account creator. Set the `--nonce-authority <AUTHORITY_KEYPAIR>` argument to specify the new owner. The following commands support this argument:

- `create-nonce-account`
- `new-nonce`
- `withdraw-from-nonce-account`
- `authorize-nonce-account`

Alternatively, you can use `koii authorize-nonce-account`.

### Delegate Authority Command

```sh
koii authorize-nonce-account nonce-keypair.json nonce-authority.json
```

### Delegate Authority Output

```sh
B1pXTqZ8XmVRkNL2Y6YFzVmLZ2VrWzRf8kFkLVZyG68c7N4F6TkVb9Zm6NRXXfFzLfLz9XLTNvMFPz8TkJLWP8LFRkx
```

## Getting and Using a Stored Nonce Value

When you want to create a transaction with a durable nonce, you simply pass the `--blockhash <STORED_NONCE>` argument during signing and submission. You can retrieve the current nonce value with the `koii nonce` command.

### Retrieving Stored Nonce Command

```sh
koii nonce nonce-keypair.json
```

### Retrieving Stored Nonce Output

```sh
8GRipryfxcsxN8mAGjy8zbFo9ezaUsh47TsPzmZbuytU
```

:::tip Generating a New Stored Nonce Value

You will not typically need to do so, but you can generate a new nonce using:

```sh
koii new-nonce nonce-keypair.json
```

:::

## Viewing a Nonce Account

If you want a summary of your nonce account, you can use `koii nonce-account`.

### Viewing Account Command

```sh
koii nonce-account nonce-keypair.json
```

### Viewing Account Output

```sh
balance: 1.75 KOII
minimum balance required: 0.0089088 KOII
nonce: 8GRipryfxcsxN8mAGjy8zbFo9ezaUsh47TsPzmZbuytU
```

## Withdraw Funds from a Nonce Account

If you need to withdraw funds from your nonce account, use `koii withdraw-from-nonce-account`.

:::tip Closing a Nonce Account

You can close a nonce account by simply withdrawing the whole balance.
:::

### Withdrawal Command

```sh
koii withdraw-from-nonce-account nonce-keypair.json ~/.config/solana/id.json 1
```

### Withdrawal Output

```sh
C8kWL5V8dP2ZTQLM4Y9WVY8MRLV4ZYFZ6FVRFT8JLXLkJRFZ9FTkWLP3FNVRL9FTWLXT5XVzTLZWLkR8kLMVR8kZF8XM
```

## Other Subcommands

The commands `pay`, `delegate-stake`, and `deactivate-stake` all support durable nonces using the `--nonce` and `--nonce-authority` arguments.

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

<!-- ### Example Pay Using Durable Nonce

Here we demonstrate Alice paying Bob 1 SOL using a durable nonce. The procedure is the same for all subcommands supporting durable nonces

#### Create accounts

First we need some accounts for Alice, Alice's nonce and Bob

    $ solana-keygen new -o alice.json$ solana-keygen new -o nonce.json$ solana-keygen new -o bob.json

#### Fund Alice's account

Alice will need some funds to create a nonce account and send to Bob. Airdrop her some SOL

    $ solana airdrop -k alice.json 11 SOL

#### Create Alice's nonce account

Now Alice needs a nonce account. Create one

> Here, no separate [nonce authority](#nonce-authority) is employed, so `alice.json` has full authority over the nonce account

    $ solana create-nonce-account -k alice.json nonce.json 0.13KPZr96BTsL3hqera9up82KAU462Gz31xjqJ6eHUAjF935Yf8i1kmfEbo6SVbNaACKE5z6gySrNjVRvmS8DcPuwV

#### A failed first attempt to pay Bob

Alice attempts to pay Bob, but takes too long to sign. The specified blockhash expires and the transaction fails

    $ solana transfer -k alice.json --blockhash expiredDTaxfagttWjQweib42b6ZHADSx94Tw8gHx11 bob.json 0.01[2020-01-02T18:48:28.462911000Z ERROR solana_cli::cli] Io(Custom { kind: Other, error: "Transaction \"33gQQaoPc9jWePMvDAeyJpcnSPiGUAdtVg8zREWv4GiKjkcGNufgpcbFyRKRrA25NkgjZySEeKue5rawyeH5TzsV\" failed: None" })Error: Io(Custom { kind: Other, error: "Transaction \"33gQQaoPc9jWePMvDAeyJpcnSPiGUAdtVg8zREWv4GiKjkcGNufgpcbFyRKRrA25NkgjZySEeKue5rawyeH5TzsV\" failed: None" })

#### Nonce to the rescue!

Alice retries the transaction, this time specifying her nonce account and the blockhash stored there

> Remember, `alice.json` is the [nonce authority](#nonce-authority) in this example

    $ solana nonce-account nonce.json
    balance: 0.1 SOLminimum balance required: 0.00136416 SOLnonce: F7vmkY3DTaxfagttWjQweib42b6ZHADSx94Tw8gHx3W7

    $ solana transfer -k alice.json --blockhash F7vmkY3DTaxfagttWjQweib42b6ZHADSx94Tw8gHx3W7 --nonce nonce.json bob.json 0.01HR1368UKHVZyenmH7yVz5sBAijV6XAPeWbEiXEGVYQorRMcoijeNAbzZqEZiH8cDB8tk65ckqeegFjK8dHwNFgQ

#### Success!

The transaction succeeds! Bob receives 0.01 SOL from Alice and Alice's stored nonce advances to a new value

    $ solana balance -k bob.json0.01 SOL

    $ solana nonce-account nonce.json
    balance: 0.1 SOLminimum balance required: 0.00136416 SOLnonce: 6bjroqDcZgTv6Vavhqf81oBHTv3aMnX19UTB51YhAZnN -->

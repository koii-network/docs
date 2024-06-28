---
title: Tokens and Wallets
description: Learn about RPC nodes on the Koii network and the important role they play.
image: img/thumbnail.png
sidebar_label:  Tokens and Wallets
---

## What is KOII?

KOII is the Koii blockchain's native token. It is a currency used to pay transaction fees on the network, and to compensate task runners for their compute.

## What is a Wallet? What are Public and Private Keys?

A wallet is where your tokens are stored. Your wallet exists on the blockchain, not your local computer. To access your wallet on the blockchain, you use keys.

When you create a wallet, a `keypair` is generated. This keypair consists of two keys: one `public` and one `private`. Anyone with the correct private key can access your wallet. Your public key is safe to share and is often called your `wallet address` - when someone wants to send you tokens, you give them your public key.

## What is the Secret Phrase For?

Your secret phrase is a way to recover or transfer your wallet. If you need to set up your node again, you can do so with your secret phrase.

:::danger Do not share your private key or secret phrase
Anyone who has your private key has full access to your wallet and any tokens you've stored in it. Never share it with anyone; no one from Koii will ever ask you for it.

Because your secret phrase can be used to recover your wallet, anyone who has it can get your private key. As with your private key, we will never ask for it and you should never share it.

Once someone has your private key, your wallet is permanently compromised. If you believe someone has gained access to your private key or secret phrase, immediately transfer your tokens to a new, secure wallet.
:::

<!-- TODO: secret phrase, main vs staking wallet -->

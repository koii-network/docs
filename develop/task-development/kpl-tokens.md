---
title: Welcome to KPL | Koii Programming Library
image: img/thumbnail.png
sidebar_label: KPL Tokens
---

## What is a KPL Token?

KPL Tokens are layer 2 tokens anyone can create on the Koii blockchain.

## Creating a KPL Token

You can easily create a KPL token using our [KPL Token Creator](https://kpl.koii.network), and full instructions on creating and minting tokens are available in [EZSandbox](https://github.com/koii-network/ezsandbox/blob/main/Lesson%206/PartI.md).

:::info Check your token balance
To check the balances of all your KPL tokens, you can visit the Explorer at `https://explorer.koii.live/address/<Your Public Key Here>/tokens`
:::

## Why KPL?

- KPL tokens can be branded to a specific project or organization
- Creating a token allows projects to have more control over the supply, distribution, and use of their tokens
- KPL Tokens can be used as a representation of ownership in a DAO (distributed autonomous organization)
- Tokens can have their own farming or reward systems
- A separate token means an independent market, insulated from the activities of other tokens
- KPL tokens can be created to meet regulatory and legal requirements for specific use cases that KOII may not be designed for
- When creating a KPL task, you will pay the bounty rewards in your token; you will only need to pay the network deployment fees in KOII (this is determined by the `space` option in `config-task.yml`)
- Launching a task with a custom KPL token creates value for your token

## Using your Token as a Bounty for a Koii Task

In order to launch a KPL task, you simply need to have enough tokens in your wallet and the mint address of the token.

In `config-task.yml` change `task_type` to `KPL` and enter the mint address in `token_type`.

The `minimum_stake`, `total_bounty_amount`, and `bounty_amount_per_round` will all use your KPL token rather than KOII.

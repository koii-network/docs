---
title: Send and Receive Tokens
description: There are two ways to airdrop some KOII into your wallets.
image: img/thumbnail.png
sidebar_label: Send and Receive Tokens
---

import ContentLink from "@site/src/components/contentLink";

There are two ways to airdrop some KOII into your wallets:

## 1. Using Koii-CLI to run Airdrop

You need to install [Koii CLI](/quickstart/command-line-tool/koii-cli/install-cli) and prepare a wallet to do airdrop. After creating a wallet, you can fund your wallet with some Koii tokens.

If you are building a task, make sure you are on the devnet and not the testnet as there is a limit to the total amount of KOII you can airdrop on the testnet.
```
koii config set --url https://k2-devnet.koii.live
```

Run the command below to airdrop some Koii tokens into your newly created wallet:

```
koii airdrop 5
```

Run `koii balance` to view your balance. Subsequently, you can airdrop more Koii tokens into your local wallet by running `koii airdrop <AMOUNT_YOU_WANT>`.

```js title="Commands you can use"
koii airdrop 5 // fund your wallet with 5 test KOII
koii balance // check balance
koii airdrop <amount> <account> // to fund other wallets
```

## 2. Running Faucet

The Koii Foundation distributes free tokens when new users join. Each new user can earn tokens for connecting social media accounts, a phone number, or an email to their Koii ID.

Visit the Faucet below to start building your Koii Identity and get some free tokens.

<ContentLink title="Faucet | Koii Network" link="https://faucet.koii.live/" imageLink="https://faucet.koii.live/favicon.ico" />

<br />
Now you have your wallet and some KOII in it. Enjoy the environment with Koii tasks and more features!

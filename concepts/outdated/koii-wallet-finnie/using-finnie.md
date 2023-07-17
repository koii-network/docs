---
title: Using Finnie
description: When Finnie wallet is initialized it will emit a custom browser event called `finnieWalletLoaded`.
image: img/thumbnail.png
sidebar_label: Using Finnie
---

# Using Finnie

When you have Finnie installed and running, you can connect to it from your web app. For example, in the page [faucet.koii.network](https://faucet.koii.network/), here is the button "Connect Finnie". The Finnie will pop up and ask you to connect to the faucet. Select the wallet you want to connect to and click "Connect". Then your wallet will be connected to the faucet.

If you are a developer and want to connect to Finnie in your web app, you can use the following code:

```javascript
await window.k2.connect()
```

For more information about the integration hooks of Finnie wallet, please visit [Finnie for Devs](/develop/finnie-for-devs/welcome-to-finnie).
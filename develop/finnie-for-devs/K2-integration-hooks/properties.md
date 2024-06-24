---
title: Properties
description: Finnie k2 provider implements much of methods function to control the status of Finnie.
image: img/thumbnail.png
sidebar_label: Properties
---

## isFinnie

To distinguish Finnie from other wallets.

```js
await window.k2.isFinnie: Boolean
```

## publicKey

Get the public key of the connected wallet. The returned value has PublicKey type.

```js
await window.k2.publicKey: PublicKey
```

## isConnected

Get `isConnected` state. If the current page is connected to Finnie, it returns true. Otherwise, it returns false.

```js
await window.k2.isConnected: Boolean
```

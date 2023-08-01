---
title: Methods
description: Finnie k2 provider implements much of methods function to control the status of Finnie.
image: img/thumbnail.png
sidebar_label: Methods
---

## Connect

The `connect` method is the only way to obtain the necessary permissions required to use Finnie for signing transactions. This function will return a promise, allowing you to await the result of connect approval. A popup will appear, allowing you to either accept or reject the request. You can also select a specific wallet address to connect to. If the request is approved, the returned promise will be resolved with the PublicKey of the connected wallet; otherwise, the returned promise will be rejected.

```javascript
window.k2.connect(): Promise<PublicKey>
```

```javascript
try {
  const connectedPublickey = await window.k2.connect();
} catch (error) {
  // request rejected
  console.error(error); // { code: 4001, message: 'User rejected the request.' }
}
```

## Disconnect

The `disconnect` method removes all default address permissions for the current page; once disconnected, the page will no longer be able to request transaction signing.

```javascript
window.k2.disconnect(): Promise<void>
```

```javascript
await window.k2.disconnect();
console.log(window.k2.publicKey); // null
console.log(window.k2.isConnected); // false
```

## signAndSendTransaction

To sign and send a transaction with Finnie, you can use the `signAndSendTransaction()` method. First, create a transaction using the `Transaction` object imported from the `@_koi/web3.js` package.

Once you have a transaction ready, you can sign it using a keypair and send it to the network by calling the `signAndSendTransaction()` method. If the transaction is successfully signed and sent, the method will resolve the returned promise with the signature. This allows you to inspect the transaction using <a href="https://explorer.koii.live/" target="_blank">K2 explorer</a>.  However, if there are any issues during the signing or sending process, the promise will be rejected.

```javascript
import { Transaction, Keypair } from '@_koi/web3.js'

type Signature = String

window.k2.signAndSendTransaction(transaction: Transaction, signers: Keypair[]): Promise<Signature>
```

```javascript
const transaction = new Transaction();
const signer = Keypair.generate();
try {
  const signature = await window.k2.signAndSendTransaction(transaction, [
    signer,
  ]);
} catch (error) {
  // request rejected or no permisisons
  console.error(error); // { code: 4001, message: 'User rejected the request' }
}
```

## signMessage

Finnie will sign your arbitrary string message. Signature will be verified before being sent to the page.

```javascript
interface SignMessageResult {
    signature: U8intArray,
    publicKey: PublicKey
}

window.k2.signMessage(message: String): Promise<SignMessageResult>
```

```javascript
const message = "example message";

try {
  const result = await window.k2.signMessage(message);
} catch (error) {
  // rejected request or no permissions
}
```

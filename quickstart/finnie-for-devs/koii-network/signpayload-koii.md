---
title: signPayload
description: This function signs a data transaction which can then have its signature verified publicly.
image: img/thumbnail.png
sidebar_label: signPayload (Koii)
---

## signAndSendTransaction

Finnie can sign and send a transaction using the `signAndSendTransaction` method. The class Transaction, imported from the `@solana/web3.js` package, initiates a transaction. You can find more information about creating and sending transactions [here](https://docs.solana.com/developing/clients/javascript-api#creating-and-sending-transactions). This transaction is added as an argument to the `signAndSendTransaction` method. It will resolve the returned promise with the signature if the transaction is signed and sent successfully, allowing you to inspect the transaction with an explorer such as Solscan. If not, it will reject the returned promise.

### Example Code

```javascript
type Signature = String

window.solana.signAndSendTransaction(transaction: Transaction): Promise<Signature>
```

```javascript
const transaction = new Transaction()

try {
    const signature = await window.solana.signAndSendTransaction(transaction)
} catch (error) {
    // request rejected or no permisisons
    console.error(error) // { code: 4001, message: 'User rejected the request' }
}
```

## signMessage

Finnie will sign your arbitrary string message. Signature will be verified before being sent to the page.

```javascript
interface SignMessageResult {
    signature: U8intArray,
    publicKey: PublicKey
}

window.solana.signMessage(message: String): Promise<SignMessageResult>
```

```javascript
const message = 'example message'

try {
    const result = await window.solana.signMessage(message)
} catch (error) {
    // rejected request or no permissions
}
```
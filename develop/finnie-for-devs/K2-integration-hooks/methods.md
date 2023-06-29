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
    const connectedPublickey = await window.k2.connect()
} catch (error) {
    // request rejected
    console.error(error) // { code: 4001, message: 'User rejected the request.' }
}
```

## Disconnect

The `disconnect` method removes all default address permissions for the current page; once disconnected, the page will no longer be able to request transaction signing.

```javascript
window.k2.disconnect(): Promise<void>
```
```javascript
await window.k2.disconnect()
console.log(window.k2.publicKey) // null
console.log(window.k2.isConnected) // false
```

## signAndSendTransaction

Finnie can sign and send a transaction using the `signAndSendTransaction` method. The class `Transaction`, imported from the `@solana/web3.js` package, initiates a transaction. You can find more information about creating and sending transactions <a href="https://docs.solana.com/developing/clients/javascript-api#creating-and-sending-transactions" target="_blank">here</a>. This transaction is added as an argument to the `signAndSendTransaction` method. It will resolve the returned promise with the signature if the transaction is signed and sent successfully, allowing you to inspect the transaction with an explorer such as Solscan. If not, it will reject the returned promise.

```javascript
type Signature = String

window.k2.signAndSendTransaction(transaction: Transaction): Promise<Signature>
```
```javascript
const transaction = new Transaction()

try {
    const signature = await window.k2.signAndSendTransaction(transaction)
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

window.k2.signMessage(message: String): Promise<SignMessageResult>
```
```javascript
const message = 'example message'

try {
    const result = await window.k2.signMessage(message)
} catch (error) {
    // rejected request or no permissions
}
```
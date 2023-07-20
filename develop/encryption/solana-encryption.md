---
title: Solana Encryption
description: Building trustless trust requires simple rules for participation.
image: img/thumbnail.png
sidebar_label: Solana Encryption
---

Solana employs [Edwards-curve Digital Signature Algorithm (EdDSA)](https://en.wikipedia.org/wiki/EdDSA), an elliptical signature algorithm for cryptography.

:::info
[K2](/concepts/settlement-layer/k2-tick-tock-fast-blocks) is a fork of Solana, so messages can also be encrypted using Koii addresses!
:::

## Helper Functions

Create two helper functions to help encode a message and decode data using [`TextEncoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) and [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder), respectively.

- `TextEncoder` — An interface that takes in a stream of code points as input and emits a stream of UTF-8 bytes.
- `TextDecoder` — An interface that represents a decoder for a specific text encoding, such as UTF-8, ISO-8859-2 etc.

```js
// Encode message
const encode = (message) => {
  const encoder = new TextEncoder();
  const messageUint8 = encoder.encode(message); // Takes a string and returns a Uint8Array

  return messageUint8;
};

// Decode data
const decode = (data) => {
  const decoder = new TextDecoder();
  const decodedMessage = decoder.decode(data); // Returns a string containing the text decoded

  return decodedMessage;
};
```

## Sign and Verify Message

A keypair's primary function is to sign messages and enable signature verification. Verification of a signature ensures that the data was signed by the owner of a specific private key.

- `sign()` — Signs the message using the `secretKey` and returns a signature.
- `verify()` — Verifies the message's signature and returns true if it was successful or false if it was unsuccessful.

To do this, we will use [TweetNaCl library](https://www.npmjs.com/package/tweetnacl).

```js
const nacl = require("tweetnacl");

// Sign Message
function sign(message, secretKey) {
  const encodedMessage = encode(message); // Encode message using helper function
  const signature = nacl.sign.detached(encodedMessage, secretKey);

  return signature;
}

// Verify Message
function verify(message, signature, publicKey) {
  const encodedMessage = encode(message); // Encode message using helper function
  const verified = nacl.sign.detached.verify(
    encodedMessage,
    signature,
    publicKey
  );

  return verified;
}
```

## Encrypt Message

Encode the message using the `encode()` helper function and then encrypt and authenticate encoded message using `nacl.box()`.

**`nacl.box()` Parameters**

- `message` — The encoded message
- `nonce` — The given nonce
- `publicKeyB` — Peer's public key
- `privateKeyA` — Our secret key (private key)

Returns an encrypted and authenticated message.

```js
// Encrypt Message
const encrypt = (message, nonce, publicKeyB, privateKeyA) => {
  const messageUint8 = encode(message); // Encode message

  //encrypt and authenticate encoded message
  const encrypted = nacl.box(messageUint8, nonce, publicKeyB, privateKeyA);

  return encrypted;
};
```

## Decrypt Message

Use `nacl.box.open()` to authenticate and decrypt the given box with peer's public key, our secret key, and the given nonce.

**`nacl.box.open()` Parameters**

- `encrypted` — The given box
- `nonce` — The given nonce
- `publicKeyA` — Peer's public key
- `privateKeyB` — Our secret key (private key)

Returns the original message, or null if authentication fails.

```js
// Decrypt Message
const decrypt = (encrypted, nonce, publicKeyA, privateKeyB) => {
  const decrypted = nacl.box.open(encrypted, nonce, publicKeyA, privateKeyB); // Authenticate and decrypt
  const decryptedMessage = decode(decrypted); // Decode message

  return decryptedMessage;
};
```

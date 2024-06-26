---
title: Ethereum Encryption
description: Building trustless trust requires simple rules for participation.
image: img/thumbnail.png
sidebar_label: Ethereum Encryption
---

import Description from "@site/src/components/description";

<Description
  text="Encrypting and Decrypting Messages Using Ethereum Keys"
/>

Ethereum keys are generated using asymmetric encryption algorithms, specifically the [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) (ECDSA).

<!-- Each Ethereum account has a unique key pair consisting of a private key and a corresponding public key. The private key remains confidential and should never be shared, while the public key is openly available. -->

## New Ethereum Keypair

Generate a new identity with a private key and a public key.

We'd be using the [eth-crypto library](https://www.npmjs.com/package/eth-crypto#decryptwithprivatekey).

```js
const EthCrypto = require("eth-crypto");

async function generateECIESKeypair() {
  // Create keypair with privateKey and publicKey
  const identity = EthCrypto.createIdentity();
  console.log("Public Key:", identity.publicKey);
  console.log("Private Key:", identity.privateKey);
  return {
    publicKey: identity.publicKey,
    privateKey: identity.privateKey,
  };
}
```

## Encrypt Message

Compress the `publicKey` and use the `EthCrypto.encryptWithPublicKey` method to encrypt the `message` with the compressed public key so that only the corresponding `privateKey` can decrypt it.

Return a smaller string representation of the encrypted data.

```js
async function encryptMessage(publicKey, message) {
  // Compress publicKey
  const compressedPublicKey = EthCrypto.publicKey.compress(publicKey);

  // Encrypt the message
  const encryptedMessage = await EthCrypto.encryptWithPublicKey(
    compressedPublicKey,
    message
  );
  return EthCrypto.cipher.stringify(encryptedMessage); // string-representation of encrypted data
}
```

## Decrypt Message

Parse the string representation back into the encrypted object and then decrypt the encrypted data with the `privateKey`.
Return the decrypted message.

```js
async function decryptMessage(privateKey, encryptedMessage) {
  // Parse to encrypted object
  const encryptedObject = EthCrypto.cipher.parse(encryptedMessage);

  // Decrypt with the privateKey
  const decryptedMessage = await EthCrypto.decryptWithPrivateKey(
    privateKey,
    encryptedObject
  );
  return decryptedMessage;
}
```

Now that we have functions to generate keypair, encrypt messages, and decrypt messages, let's put them to use:

```js
async function main() {
  const walletData = await generateECIESKeypair(); // generate Keypair
  console.log("wallet data is  ", walletData);

  const publicKey = walletData.publicKey; // get public key
  const privateKey = walletData.privateKey; // get private key
  const message = "Hello World!";

  // Encrypt the message
  const encryptedMessage = await encryptMessage(publicKey, message);
  console.log("Encrypted Message:", encryptedMessage);

  // Decrypt the message
  const decryptedMessage = await decryptMessage(privateKey, encryptedMessage);
  console.log("Decrypted Message:", decryptedMessage);
}
```

## Conclusion

Using Solana and Ethereum keys to encrypt and decrypt messages provides a powerful solution for secure communication in decentralized environments. Users can ensure confidentiality, integrity, and privacy in their digital interactions by leveraging these platforms' cryptographic capabilities.

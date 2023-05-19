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

Ethereum keys are generated using asymmetric encryption algorithms, specifically the [Elliptic Curve Digital Signature Algorithm](https://www.hypr.com/security-encyclopedia/elliptic-curve-digital-signature-algorithm#:~:text=The%20Elliptic%20Curve%20Digital%20Signature%20Algorithm%20(ECDSA)%20is%20a%20Digital,public%20key%20cryptography%20(PKC).) (ECDSA). 

Each Ethereum account has a unique key pair consisting of a private key and a corresponding public key. The private key remains confidential and should never be shared, while the public key is openly available.


## New Ethereum Keypair

Generate a new ethereum-identity with privateKey and publicKey.

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
Compress the `publicKey` and use the `EthCrypto.encryptWithPublicKey` method to encrypt the `message` with the compressed public key so that only the corressponding `privateKey` can decrypt it.

Return a smaller string-representation of the encrypted data.

```javascript
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
Parse the string-representation back into the encrypted object and then decrypt the encrypted data with the `privateKey`. 

Return decrypted message.
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

Now we have functions to generate keypair, encrypt message and decrypt message, lets see them in action:

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

Encrypting and decrypting messages with Ethereum keys provides a strong solution for secure blockchain communication. Ethereum keys provide a strong foundation for protecting confidentiality and privacy in digital interactions by leveraging the power of asymmetric and symmetric encryption algorithms.
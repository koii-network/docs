---
title: generateWallet
description: This function creates a new Arweave wallet, but it does not return the private key of the generated wallet.
image: img/thumbnail.png
sidebar_label: generateWallet
---

# generateWallet

:::danger
This function will generate an Arweave wallet, not a Koii wallet. To generate a Koii wallet please check [Koii CLI](/develop/category/koii-command-line-tool).
:::

This function creates a new Arweave wallet, but it does not return the private key of the generated wallet. Instead, it stores the info under the `wallet` property and returns a boolean value of `True` or `False`.

### Parameters

**use_mnemonic `<boolean>` -** Flag for enabling mnemonic phrase wallet generation

### Example Code

```javascript
const knode = require("@_koii/sdk/node");
const ktools = new knode.Node();

async function testGenerateWallet(true) {
    let generatedWallet = await ktools.generateWallet();
    console.log("My wallet: ", ktools.wallet);
    // {kty:"RSA", n:"0vx7agoebGcQSuu...", e:"AQAB"... }
    console.log("My mnemonic: ", ktools.mnemonic);
    // "violin artwork lonely inject resource jewel purity village abstract neglect panda license"
}

testGenerateWallet();
```

:::info
The true parameter on line 4 in the `testGenerateWallet` function is for `use_mnemonic` boolean passed as a parameter to generate a mnemonic wallet.
:::

### Example Code Output

This will return the contents of the JSON for your newly generated private key.

![Code Sample](../img/key.PNG)

### Returns

**Promise `<Boolean Value>`** - True or False depending on the state of the function.

### Properties

**wallet** - has the key of the generated wallet, which is the private key to the wallet if saved as a .json file.

**mnemonic** - generates a wallet with mnemonic words

:::tip

- The generated wallet can be accessed via **`ktools.wallet`** , Save this info into a file in .JSON format and that's the **Private Key** to the generated wallet.
- The wallet can also be accessed via **`ktools.mnemonic`** , If you selected to generate a mnemonic wallet via parameters.
  :::

:::info
Optional: Arweave uses the JSON Web Key (JWK) format (RFC 7517) with 4096 length RSA-PSS keys. This JWK format allows for cryptographic keys to be represented as JSON object where each property represents a property of the underlying cryptographic key.
:::

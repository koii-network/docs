---
title: Create a Koii Wallet
description: Koii supports file system wallet that can be used to interface directly with the Koii CLI tools
image: img/thumbnail.png
sidebar_label: Create a Koii Wallet
---

Koii supports a file system wallet that can be used to interface directly with the Koii command-line tools.
> A file system wallet, aka an FS wallet, is a directory in your computer's file system. Each file in the directory holds a keypair.
>
>_Source_ [_Solana_](https://docs.solana.com/wallet-guide/cli#file-system-wallet)

To get the command for creating a wallet, run:

```
koii address
```

If you do not have a Koii wallet in `./.config/koii/id.json` , you should see an error prompt:

```
Error: No default signer found, run "koii-keygen new -o /Users/<YOUR_HOME>/.config/koii/id.json" to create a new one
```

Run the `koii-keygen` command you're prompted to run.&#x20;

```bash
koii-keygen new -o /Users/<YOUR_HOME>/.config/koii/id.json
```

:::tip
The path may differ slightly between operating systems.  Remember to update your path before running the command.
:::

This command will generate an identity keypair. You can add a BIP39 passphrase for extra security or click the "ENTER" button for an empty passphrase.

Want to learn more about the BIP39 passphrase? Visit [here](https://www.blockplate.com/blogs/blockplate/what-is-a-bip39-passphrase).

The identity public key can now be viewed by running:

```
koii-keygen pubkey /Users/<YOUR_HOME>/.config/koii/id.json
```

Congratulations! Now you have a Koii wallet, next, let's airdrop some KOII in your wallet.

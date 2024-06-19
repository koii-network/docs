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

To generate a file system wallet keypair, use Koii's command-line tool `koii-keygen`. Run the following command:

```sh
koii-keygen new --outfile ~/.config/koii/id.json
```

:::danger
This file contains your **unencrypted keypair**, protect this file as it grants access to all tokens sent to its public key. Do not distribute the file; share only the public key to maintain security.
:::

The public key of the keypair file is your wallet address. To display your public key, run:

```sh
koii address
```

It will return a public key, which is a string of characters like this:

```sh
2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBq
```

Congratulations! You now have a Koii wallet, Next, let's airdrop some KOII in your wallet.

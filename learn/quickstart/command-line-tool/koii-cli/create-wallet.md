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


1. Open Command Prompt or Terminal:
Depending on your operating system, open Command Prompt (Windows) or Terminal (MacOS/Linux).

2. Run the Command:
Copy and paste the following command into Command Prompt or Terminal, then press Enter:
```bash
koii-keygen new --outfile ~/.config/koii/id.json
```

:::Important
This file contains your **unencrypted keypair**, protect this file as it grants access to all tokens sent to its public key. Do not distribute the file; share only the public key to maintain security.
:::

3. View Your Public Key (Wallet Address):
To display your public key (wallet address), run:
```
koii address
```
It will return a string of characters like:
```
2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBq
```

4. Record Your Public Key:
Your public key will be displayed as a string of characters. This is your wallet address, which you can share with others to receive tokens.



Congratulations! You now have a Koii wallet, Next, let's airdrop some KOII in your wallet.

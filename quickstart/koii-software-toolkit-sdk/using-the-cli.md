---
title: Using the Koii CLI
description: To interact with the K2 locally, you need to install the Koii CLI, create a Koii wallet, and airdrop some Koii tokens into your wallet.
image: img/thumbnail.png
sidebar_label: Using the Koii CLI
---

# Using the Koii CLI

To interact with the K2 locally, you need to install the Koii CLI, create a Koii wallet, and airdrop some Koii tokens into your wallet.&#x20;

:::danger

File-system wallets are the **least secure** method of storing tokens. Storing large amounts of tokens in a file-system wallet is **not recommended**.

:::

## Install the Koii CLI Suite

### MacOS & Linux

- Run the command below to install the Koii command-line tools:

```
sh -c "$(curl -sSfL https://raw.githubusercontent.com/koii-network/k2-release/master/k2-install-init.sh)"
```

- Depending on your system, you may get this prompt:

```
Please update your PATH environment variable to include the koii programs:
```

- If you get the above message, copy and run the command beneath this prompt to update your `PATH` environment.

- To confirm your `PATH` environment has been updated run `echo $PATH`

- Run the command below to confirm that the CLI was successfully installed:

```
koii --version
```

:::info

For Mac users, you might find if you open another terminal the koii cli would not work. Follow these steps to update PATH.

- After installing koii cli, copy the PATH first
- run command `vi ~/.zshrc`
- Insert "export <_paste your path here>_"
- Save and close exit it, and you are good to go!

:::

To run the test validator, use command:&#x20;

```
koii-test-validator
```

### Windows

- Run the command below to install the Koii command-line tools:

```
curl https://github.com/koii-network/k2-release/releases/download/v0.0.1/koii-install-init-x86_64-pc-windows-msvc.exe --output C:\koii-install-tmp\koii-install-init.exe --create-dirs
```

- Copy and paste the following command, then press "Enter" to install the latest version of Koii. If you see a security pop-up by your system, please select to allow the program to run.

```
C:\koii-install-tmp\koii-install-init.exe v0.0.1
```

- When the installer is finished, press "Enter".

- Close the command prompt window and open a new one as a normal user.
- Run `koii --version` to confirm that the CLI was successfully installed.

### Create a Koii Wallet

The next step is to create a Koii file system wallet locally. To get the command for creating a wallet, run:

```
koii address
```

If you do not have a Koii wallet in `./.config/koii/id.json` , you should see an error prompt:

```
Error: No default signer found, run "koii-keygen new -o /Users/<YOUR_HOME>/.config/koii/id.json" to create a new one
```

Run the "koii-keygen" command you're prompted to run.&#x20;

```bash
koii-keygen new -o /Users/<YOUR_HOME>/.config/koii/id.json
```

:::tip
For different operating system. The path might have a little bit different. Remember to update your path before running the command.
:::

This command will generate an identity keypair. You can add a BIP39 passphrase for extra security or click the ENTER button for an empty passphrase.

Want to learn more about the BIP39 passphrase? Visit [here](https://www.blockplate.com/blogs/blockplate/what-is-a-bip39-passphrase).

The identity public key can now be viewed by running:

```
koii-keygen pubkey /Users/<YOUR_HOME>/.config/koii/id.json
```

### Koii CLI Config Tool

The `koii config` command is used to update the Koii CLI configuration settings.

To print the file location of config, run:

```
koii config get
```

The output of the command should be similar to the following:

```
Config File: /Users/<YOUR_HOME>/.config/koii/cli/config.yml
RPC URL: https://k2-testnet.koii.live
WebSocket URL: wss://k2-testnet.koii.live/ (computed)
Keypair Path: /Users/<YOUR_HOME>/.config/koii/id.json
Commitment: confirmed
```

The RPC URL can be toggled between testnet and mainnet by pointing the RPC URL to the corresponding node URL.

The command below is an example on how to switch to testnet:

```
koii config set --url https://k2-testnet.koii.live
```

The wallet default URL can also be updated, the default URL lives in `/Users/<YOUR_HOME>/.config/koii/id.json ` and it can be updated with this config command:

```
koii config set --keypair <PATH_TO_KEYPAIR>
```

Congratulations! Now you have a Koii wallet, check [here](./wallet-and-faucet) to airdrop some KOII in your wallet.

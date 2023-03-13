# Using the Koii CLI

To interact with the K2 locally, you need to install the Koii CLI, create a Koii wallet, and airdrop some Koii tokens into your wallet.&#x20;

:::danger

File-system wallets are the **least secure** method of storing tokens. Storing large amounts of tokens in a file-system wallet is **not recommended**.

:::

### Install Koii CLI

Run the command below to install the Koii command-line tools:

```
sh -c "$(curl -sSfL https://koi-node-releases.s3.us-east-2.amazonaws.com/koii-install-init.sh)"
```

After installation is complete, you should see a prompt in the terminal: `Please update your PATH environment variable to include the koii programs` . Copy and run the command beneath this prompt to update your `PATH` environment.

To confirm your `PATH` environment has been updated run `echo $PATH`

Run the command below to confirm that the CLI was successfully installed:

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

### Create a Koii Wallet

The next step is to create a Koii file system wallet locally. To get the command for creating a wallet, run:

```
koii address
```

If you do not have a Koii wallet in `./.config/koii/id.json`  ,you should see an error prompt:

```
Error: No default signer found, run "koii-keygen new -o /Users/<YOUR_HOME>/.config/koii/id.json" to create a new one
```

Run the "koii-keygen" command you're prompted to run.&#x20;

```
koii-keygen new -o /Users/<YOUR_HOME>/.config/koii/id.json
```

:::info
For different operating system. The path might have a little bit different. Remeber to update your path before running the command.
:::

This command will generate an identity keypair. You can add a BIP39 passphrase for extra security or click the ENTER button for an empty passphrase.

Want to learn more about the BIP39 passphrase? Visit [here](https://www.blockplate.com/blogs/blockplate/what-is-a-bip39-passphrase).

The identity public key can now be viewed by running:

```
koii-keygen pubkey /Users/<YOUR_HOME>/.config/koii/id.json
```

Copy and save your wallet path so you can interact with any Koii stack locally.

:::info
Your wallet path would be used in create a task and run desktop node.
:::

Congratulations! Now you have a Koii wallet, check [here](./wallet-and-faucet) to airdrop some KOII in your wallet.

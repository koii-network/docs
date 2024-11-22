
# Using Hardware Wallets in the Koii CLI

Signing a transaction requires a private key, but storing a private key on your personal computer or phone leaves it vulnerable to theft. Adding a password to your key increases security, but many users prefer an additional layer of protection by storing private keys on a physical device called a hardware wallet. A hardware wallet is a small handheld device that stores private keys and provides an interface for signing transactions.

The Koii CLI offers robust support for hardware wallets. Anywhere you use a keypair file path (denoted as `<KEYPAIR>` in usage documentation), you can instead pass a keypair URL that uniquely identifies a keypair stored in a hardware wallet.

## Supported Hardware Wallets

The Koii CLI supports the following hardware wallets:

- Ledger Nano S
- Ledger Nano X

## Specify a Keypair URL

Koii defines a keypair URL format to uniquely identify any Koii keypair on a hardware wallet connected to your computer.

The keypair URL has the following structure, where square brackets denote optional fields:

```
usb://<MANUFACTURER>[/<WALLET_ID>][?key=<DERIVATION_PATH>]
```

- **`WALLET_ID`**: A globally unique identifier used to distinguish between multiple devices.
- **`DERIVATION_PATH`**: Used to locate Koii keys within your hardware wallet. It has the format `<ACCOUNT>[/<CHANGE>]`, where `ACCOUNT` and `CHANGE` are nonnegative integers.

For example, a fully qualified URL for a Ledger device might look like this:

```
usb://ledger/BsNsvfXqQTtJnagwFWdBS7FBXgnsK8VZ5CmuznN85swK?key=0/0
```

### Understanding Derivation Paths

All derivation paths implicitly include the prefix `44'/501'`, indicating the path follows the BIP44 specifications and that any derived keys are Koii keys (Coin type 501). The single quote (`'`) indicates a "hardened" derivation. Since Koii uses Ed25519 keypairs, all derivations are hardened, making the quote optional and unnecessary.

By using a hardware wallet with the Koii CLI, you can enhance security and manage transactions with peace of mind.


# Use Ledger Nano with Koii CLI

## Setting Up Your Ledger Nano

1. Ensure the Ledger Live application is closed.
2. Plug your Nano into your computer's USB port.
3. Enter your PIN and start the app on the Nano.
4. Ensure the screen reads **"Application is ready"**.

---

## View Your Wallet ID

On your computer, run:

```
koii pubkey usb://ledger
```

This confirms your Ledger device is connected properly and in the correct state to interact with the Koii CLI. The command returns your Ledger's unique wallet ID. When you have multiple Nano devices connected to the same computer, you can use your wallet ID to specify which Ledger hardware wallet you want to use. If you only plan to use a single Nano on your computer at a time, you don't need to include the wallet ID.

For information on using the wallet ID to manage specific Ledgers, see [Manage Multiple Hardware Wallets](#manage-multiple-hardware-wallets).

---

## View Your Wallet Addresses

Your Nano supports multiple wallet addresses and signers. To view any address, use the `koii pubkey` command with a valid keypair URL. 

### Examples:
```
koii pubkey usb://ledger
koii pubkey usb://ledger?key=0
koii pubkey usb://ledger?key=1
koii pubkey usb://ledger?key=2
```

> **Note:** The `keypair` URL parameters may require escaping in `zsh`. See [Troubleshooting](#troubleshooting) for more details.

Any of the addresses displayed by these commands are valid Koii wallet addresses. The private portion associated with each address is securely stored on the Nano and is used to sign transactions. Make a note of the keypair URL you use to derive any address you will be using to receive tokens.

---

## View Your Balance

To view the balance of any account, use the `koii balance` command:

```
koii balance <WALLET_ADDRESS>
```

For example:
```
koii balance 7cvkjYAkUYs4W8XcXsca7cBrEGFeSUjeZmKoNBvEwyri
```

> Newly created addresses with a balance of 0 KOII will show as "Not Found" in the Koii Explorer. Accounts with no balance are treated as non-existent until they hold tokens.

---

## Send KOII from a Nano

To send tokens from an address controlled by your Nano:

1. Ensure your Nano is plugged in, unlocked with the PIN, and the Koii App is open showing **"Application is ready"**.
2. Use the `koii transfer` command:

```
koii transfer <RECIPIENT_ADDRESS> <AMOUNT> --keypair <KEYPAIR_URL_OF_SENDER>
```

### Example:

1. View the sender's address at a keypair URL:
   ```
   koii pubkey usb://ledger?key=0
   ```

2. Check the balance of the sender's address:
   ```
   koii balance <SENDER_ADDRESS>
   ```

3. Send KOII tokens:
   ```
   koii transfer 7cvkjYAkUYs4W8XcXsca7cBrEGFeSUjeZmKoNBvEwyri 10 --keypair usb://ledger?key=0
   ```

When prompted, approve the transaction details on your Ledger device. Use the device buttons to review and confirm the transaction.

---

## Advanced Operations

### Manage Multiple Hardware Wallets

You can sign transactions with keys from multiple hardware wallets. Use fully qualified keypair URLs to uniquely identify keypairs from each device.

Run the following command to resolve a fully qualified URL:

```
koii resolve-signer usb://ledger?key=0/0
```

This outputs a keypair URL like:
```
usb://ledger/BsNsvfXqQTtJnagwFWdBS7FBXgnsK8VZ5CmuznN85swK?key=0/0
```

Use this resolved path anywhere a `koii` command expects a keypair entry.

---

## Troubleshooting

### Keypair URL Parameters Ignored in zsh

The question mark character (`?`) is a special character in zsh. To treat it as normal:

1. Add the following to your `~/.zshrc` file:
   ```
   unsetopt nomatch
   ```

2. Reload your shell:
   ```
   source ~/.zshrc
   ```

Alternatively, escape the `?` explicitly:
```
koii pubkey usb://ledger\?key=0
```

## Support 

If you need support feel free to contact us via our [**Discord**](https://discord.com/invite/koii-network).

---

<sub>This documentation incorporates substantial portions of the Solana documentation, adapted for Koii (K2). Solana’s architecture and underlying principles form the foundation of K2’s implementation. Content adapted under the terms of the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/). See [Solana Documentation](https://docs.solana.com/) for more details.</sub>
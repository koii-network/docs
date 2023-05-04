---
title: Creating Tokens on K2
description: The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.
image: img/thumbnail.png
sidebar_label: Creating Tokens on K2
---

# Creating Tokens on K2

![banner](img/Creating%20Tokens%20on%20K2.svg)

The [Solana Program Library](https://spl.solana.com/) (SPL) is a collection of on-chain programs targeting the [Sealevel parallel runtime](https://medium.com/solana-labs/sealevel-parallel-processing-thousands-of-smart-contracts-d814b378192). One of the SPL programs is the [Solana Token Program](https://spl.solana.com/token) which defines a common implementation for Fungible and Non-Fungible tokens. Using the Solana Token Program simplifies token management.

To interact with a Solana node inside a JavaScript application, use the [Solana-web3.js](https://github.com/solana-labs/solana-web3.js) library, which gives a convenient interface for the RPC methods. Full documentation of the library can be found [here](https://solana-labs.github.io/solana-web3.js/).

Since K2 is a separate network from the core Solana system, it's necessary to use Koii's custom library, [Koii-Web3.js](https://www.npmjs.com/package/@_koi/web3.js).

## Installation

```
npm install --save @solana/spl-token @_koi/web3.js
```

Or

```
yarn add @solana/spl-token @_koi/web3.js
```

## Token Contract

Fungible tokens are non-unique divisible tokens created on a blockchain. On Solana, fungible tokens are referred to as _**SPL-tokens**_. If you intend to build a token on K2 either for governance, staking, or as a reward system for node operators, the Solana Token Program can be used to create and manage SPL tokens.

To create a token, instructions are sent to the Token Program, including assigning which keypair has the authority to mint tokens. This creates a new data account (the Mint acct). Each different SPL token has only one mint account associated with it. The program owner of the mint account is set to the Solana token program. Data stored in the account includes:

- Mint account's address
- The current number of tokens that have been minted
- The mint authority (i.e the public key of the keypair that is allowed to mint tokens)
- The number of decimals for the smallest denomination of the token. &#x20;

```javascript
import { createMint } from "@solana/spl-token";
import { clusterApiUrl, Connection, Keypair } from "@_koi/web3.js";

const payer = Keypair.generate();
const mintAuthority = Keypair.generate();
const freezeAuthority = Keypair.generate();

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const mint = await createMint(
  connection,
  payer,
  mintAuthority.publicKey,
  freezeAuthority.publicKey,
  9 // We are using 9 to match the CLI decimal default exactly
);

console.log(mint.toBase58());
// AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM
```

Tokens when initially created by `spl-token` have no supply.

Learn more about creating SPL tokens on the [SPL documentation](https://spl.solana.com/token#example-creating-your-own-fungible-token).

## NFT Contract

Non-fungible tokens (NFTs) are unique and non-divisible tokens created on a blockchain. Just like fungible tokens, NFTs can be created on K2. The main difference is that an NFT is simply a token type where only a single token has been minted.

Example contract for creating an NFT with `spl-token` :

```javascript
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} from "@solana/spl-token";
import { clusterApiUrl, Connection, Keypair } from "@_koi/web3.js";

(async () => {
  const wallet = Keypair.generate();

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  // Create a non-fungible token
  const mint = await createMint(
    connection,
    wallet,
    wallet.publicKey,
    wallet.publicKey,
    0 // Create the token type with zero decimal place,
  );

  // Create an account to hold tokens of this new type
  const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    wallet,
    mint,
    wallet.publicKey
  );

  // Mint only one token into the account,
  await mintTo(
    connection,
    wallet,
    mint,
    associatedTokenAccount.address,
    wallet,
    1
  );
})();
```

Learn more about creating NFTs on the SPL [documentation](https://spl.solana.com/token#example-create-a-non-fungible-token)

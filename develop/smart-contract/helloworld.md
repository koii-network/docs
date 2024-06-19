---
title: Create a Koii Program in Rust
description: Setup, build, and deploy a Koii program locally in Rust
image: img/thumbnail.png
sidebar_label: Create a Koii Smart Contract
---

Koii is a fork of Solana, so we are still keeping smart contracts in our chain. This quickstart guide will demonstrate how to quickly setup, build, and deploy your first Rust based Koii program to the blockchain.

Do you have the Koii CLI installed?

This guide uses the Koii CLI and assumes you have setup your local development environment.

## What you will learn

* how to install the Rust language locally
* how to initialize a new Koii Rust program
* how to code a basic Koii program in Rust
* how to build and deploy your Rust program

## Install Rust and Cargo

To be able to compile Rust based Koii programs, install the Rust language and Cargo (the Rust package manager) using [Rustup](https://rustup.rs/):

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Run your localhost validator

The Koii CLI comes with the test validator built in. This command line tool will allow you to run a full blockchain cluster on your machine.

:::tip
Run the Koii test validator in a new/separate terminal window that will remain open. This command line program must remain running for your localhost validator to remain online and ready for action.
:::

Configure your Koii CLI to use your localhost validator for all your future terminal commands and Koii program deployment:

```sh
koii config set --url localhost
```

## Create a new Rust library with Cargo

Koii programs written in Rust are _libraries_ which are compiled to BPF bytecode and saved in the `.so` format.

Initialize a new Rust library named `hello_world` via the Cargo command line:

```sh
cargo init hello_world --lib
cd hello_world
```

## Add the `solana-program` crate to your new Rust library


It is highly recommended to keep your `solana-program` and other Solana Rust dependencies in-line with your installed version of the Koii CLI. For example, if you are running Koii CLI `1.16.1`, you can instead run:

```sh
cargo add solana-program@"=1.16.1"
```


This will ensure your crate uses only `1.16.1` and nothing else.

Open your `Cargo.toml` file and add these required Rust library configuration settings, updating your project name as appropriate:

```sh
[lib]
name = "hello_world"
crate-type = ["cdylib", "lib"]
```

## Create your first Koii program

The code for your Rust based Koii program will live in your `src/lib.rs` file. Inside `src/lib.rs` you will be able to import your Rust crates and define your logic. Open your `src/lib.rs` file in your favorite editor.

At the top of `lib.rs`, import the `solana-program` crate and bring our needed items into the local namespace:

```rust
use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    msg,
};
```

Every Koii program must define an `entrypoint` that tells the Koii runtime where to start executing your onchain code. Your program's entrypoint should provide a public function named `process_instruction`:

```rust
// declare and export the program's entrypoint
entrypoint!(process_instruction);

// program entrypoint's implementation
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    // log a message to the blockchain
    msg!("Hello, world!");

    // gracefully exit the program
    Ok(())
}
```

Every onchain program should return the `Ok` [result enum](https://doc.rust-lang.org/std/result/) with a value of `()`. This tells the Koii runtime that your program executed successfully without errors.

This program above will simply [log a message](https://docs.solana.com/developing/on-chain-programs/debugging#logging) of "_Hello, world!_" to the blockchain cluster, then gracefully exit with `Ok(())`.

## Build your Rust program

Inside a terminal window, you can build your Koii Rust program by running in the root of your project (i.e. the directory with your `Cargo.toml` file):

Info

After each time you build your Koii program, the above command will output the build path of your compiled program's `.so` file and the default keyfile that will be used for the program's address. `cargo build-bpf` installs the toolchain from the currently installed Koii CLI tools. You may need to upgrade those tools if you encounter any version incompatibilities.

## Deploy your Koii program

Using the Koii CLI, you can deploy your program to your currently selected cluster:

```sh
koii program deploy ./target/deploy/hello_world.so
```


Once your Koii program has been deployed (and the transaction finalized), the above command will output your program's public address (aka its "program id").

```sh
# example output
Program Id: EFH95fWg49vkFNbAdw9vy75tM7sWZ2hQbTTUmuACGip3
```

## Congratulations!

You have successfully setup, built, and deployed a Koii program using the Rust language.

Check your wallet balance!

Check your Koii wallet's balance again after you deployed. See how much KOII it cost to deploy your simple program?

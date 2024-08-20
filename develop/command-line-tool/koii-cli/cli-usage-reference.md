---
title: CLI Usage Reference
description: Thee command-line interface tool for Koii
image: img/thumbnail.png
sidebar_label: CLI Usage Reference
---

## Install Koii CLI
Check [here](/develop/command-line-tool/koii-cli/install-cli) to learn about how to install the Koii CLI.

After installing the Koii CLI, you can use the following commands to interact with the K2.

## Get Pubkey

### Usage

```sh
koii-keygen pubkey
```

### Output
```sh
<PUBKEY>
```

## Get Balance

### Usage

```sh
koii balance
```

### Output

```sh
<WALLET_BALANCE> KOII
```

## Confirm Transaction

### Usage

```sh
koii confirm <TX_SIGNATURE>
```

### Output

```sh
Confirmed / Not found / Transaction failed with error <ERR>
```

## Deploy Program

### Usage

```sh
koii program deploy <PATH>
```

### Output

```sh
<PROGRAM_ID>
```

<br />
<br />

# Usage

<h3 style={{marginTop: 0}}>koii-cli</h3>

```sh
koii-cli 1.10.0 (src:devbuild; feat:167192737)
Blockchain, Rebuilt for Scale

USAGE:
    koii [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default:
                                           /Users/giftea/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

SUBCOMMANDS:
    account                              Show the contents of an account
    address                              Get your public key
    airdrop                              Request KOII from a faucet
    authorize-nonce-account              Assign account authority to a new entity
    balance                              Get your balance
    block                                Get a confirmed block
    block-height                         Get current block height
    block-production                     Show information about block production
    block-time                           Get estimated production time of a block
    catchup                              Wait for a validator to catch up to the cluster
    close-vote-account                   Close a vote account and withdraw all funds remaining
    cluster-date                         Get current cluster date, computed from genesis creation time and network
                                         time
    cluster-version                      Get the version of the cluster entrypoint
    completion                           Generate completion scripts for various shells
    config                               Koii command-line tool configuration settings
    confirm                              Confirm transaction by signature
    create-address-with-seed             Generate a derived account address with a seed
    create-nonce-account                 Create a nonce account
    create-stake-account                 Create a stake account
    create-stake-account-checked         Create a stake account, checking the withdraw authority as a signer
    create-vote-account                  Create a vote account
    deactivate-stake                     Deactivate the delegated stake from the stake account
    decode-transaction                   Decode a serialized transaction
    delegate-stake                       Delegate stake to a vote account
    epoch                                Get current epoch
    epoch-info                           Get information about the current epoch
    feature                              Runtime feature management
    fees                                 Display current cluster fees (Deprecated in v1.8.0)
    first-available-block                Get the first available block in the storage
    genesis-hash                         Get the genesis hash
    gossip                               Show the current gossip network nodes
    help                                 Prints this message or the help of the given subcommand(s)
    inflation                            Show inflation information
    largest-accounts                     Get addresses of largest cluster accounts
    leader-schedule                      Display leader schedule
    live-slots                           Show information about the current slot progression
    logs                                 Stream transaction logs
    merge-stake                          Merges one stake account into another
    new-nonce                            Generate a new nonce, rendering the existing nonce useless
    nonce                                Get the current nonce value
    nonce-account                        Show the contents of a nonce account
    ping                                 Submit transactions sequentially
    program                              Program management
    rent                                 Calculate per-epoch and rent-exempt-minimum values for a given account data
                                         field length.
    resolve-signer                       Checks that a signer is valid, and returns its specific path; useful for
                                         signers that may be specified generally, eg. usb://ledger
    slot                                 Get current slot
    split-stake                          Duplicate a stake account, splitting the tokens between the two
    stake-account                        Show the contents of a stake account
    stake-authorize                      Authorize a new signing keypair for the given stake account
    stake-authorize-checked              Authorize a new signing keypair for the given stake account, checking the
                                         authority as a signer
    stake-history                        Show the stake history
    stake-set-lockup                     Set Lockup for the stake account
    stake-set-lockup-checked             Set Lockup for the stake account, checking the new authority as a signer
    stakes                               Show stake account information
    supply                               Get information about the cluster supply of KOII
    transaction-count                    Get current transaction count
    transaction-history                  Show historical transactions affecting the given address from newest to
                                         oldest
    transfer                             Transfer funds between system accounts
    validator-info                       Publish/get Validator info on Koii
    validators                           Show summary information about the current validators
    vote-account                         Show the contents of a vote account
    vote-authorize-voter                 Authorize a new vote signing keypair for the given vote account
    vote-authorize-voter-checked         Authorize a new vote signing keypair for the given vote account, checking
                                         the new authority as a signer
    vote-authorize-withdrawer            Authorize a new withdraw signing keypair for the given vote account
    vote-authorize-withdrawer-checked    Authorize a new withdraw signing keypair for the given vote account,
                                         checking the new authority as a signer
    vote-update-commission               Update the vote account's commission
    vote-update-validator                Update the vote account's validator identity
    wait-for-max-stake                   Wait for the max stake of any one node to drop below a percentage of total.
    withdraw-from-nonce-account          Withdraw KOII from the nonce account
    withdraw-from-vote-account           Withdraw lamports from a vote account into a specified account
    withdraw-stake                       Withdraw the unstaked KOII from the stake account
```

## koii-account

```sh
koii-account
Show the contents of an account

USAGE:
    koii account [FLAGS] [OPTIONS] <ACCOUNT_ADDRESS>

FLAGS:
    -h, --help                           Prints help information
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
    -o, --output-file <FILEPATH>           Write the account data to this file
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

ARGS:
    <ACCOUNT_ADDRESS>    Account key URI. , one of:
                           * a base58-encoded public key
                           * a path to a keypair file
                           * a hyphen; signals a JSON-encoded keypair on stdin
                           * the 'ASK' keyword; to recover a keypair via its seed phrase
                           * a hardware wallet keypair URL (i.e. usb://ledger)
```

## koii-address

```sh
koii-address
Get your public key

USAGE:
    koii address [FLAGS] [OPTIONS]

FLAGS:
        --confirm-key                    Confirm key on device; only relevant if using remote wallet
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster
```

## koii-address-lookup-table

```sh
koii-address-lookup-table
Address lookup table management

USAGE:
    koii address-lookup-table [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

SUBCOMMANDS:
    close         Permanently closes a lookup table
    create        Create a lookup table
    deactivate    Permanently deactivates a lookup table
    extend        Append more addresses to a lookup table
    freeze        Permanently freezes a lookup table
    get           Display information about a lookup table
    help          Prints this message or the help of the given subcommand(s)
```

## koii-airdrop

```sh
koii-airdrop
Request SOL from a faucet

USAGE:
    koii airdrop [FLAGS] [OPTIONS] <AMOUNT> [RECIPIENT_ADDRESS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

ARGS:
    <AMOUNT>               The airdrop amount to request, in SOL
    <RECIPIENT_ADDRESS>    The account address of airdrop recipient. , one of:
                             * a base58-encoded public key
                             * a path to a keypair file
                             * a hyphen; signals a JSON-encoded keypair on stdin
                             * the 'ASK' keyword; to recover a keypair via its seed phrase
                             * a hardware wallet keypair URL (i.e. usb://ledger)
```

## koii-authorize-nonce-account

```sh
koii-authorize-nonce-account
Assign account authority to a new entity

USAGE:
    koii authorize-nonce-account [FLAGS] [OPTIONS] <NONCE_ACCOUNT_ADDRESS> <AUTHORITY_PUBKEY>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~/.config/koii/cli/config.yml]

    -u, --url <URL_OR_MONIKER>
            URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --ws <URL>                                        WebSocket URL for the koii cluster

ARGS:
    <NONCE_ACCOUNT_ADDRESS>    Address of the nonce account. , one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb://ledger)
    <AUTHORITY_PUBKEY>         Account to be granted authority of the nonce account. , one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb://ledger)
```

## koii-balance

```sh
koii-balance
Get your balance

USAGE:
    koii balance [FLAGS] [OPTIONS] [ACCOUNT_ADDRESS]

FLAGS:
    -h, --help                           Prints help information
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

ARGS:
    <ACCOUNT_ADDRESS>    The account address of the balance to check. , one of:
                           * a base58-encoded public key
                           * a path to a keypair file
                           * a hyphen; signals a JSON-encoded keypair on stdin
                           * the 'ASK' keyword; to recover a keypair via its seed phrase
                           * a hardware wallet keypair URL (i.e. usb://ledger)
```

## koii-block

```sh
koii-block
Get a confirmed block

USAGE:
    koii block [FLAGS] [OPTIONS] [SLOT]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

ARGS:
    <SLOT>
```

## koii-block-height

```sh
koii-block-height
Get current block height

USAGE:
    koii block-height [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster
```

## koii-block-production

```sh
koii-block-production
Show information about block production

USAGE:
    koii block-production [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
        --epoch <epoch>                    Epoch to show block production for [default: current epoch]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --slot-limit <slot_limit>          Limit results to this many slots from the end of the epoch [default: full
                                           epoch]
        --ws <URL>                         WebSocket URL for the koii cluster
```

## koii-block-time

```sh
koii-block-time
Get estimated production time of a block

USAGE:
    koii block-time [FLAGS] [OPTIONS] [SLOT]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

ARGS:
    <SLOT>    Slot number of the block to query
```

## koii-catchup

```sh
koii-catchup
Wait for a validator to catch up to the cluster

USAGE:
    koii catchup [FLAGS] [OPTIONS] [ARGS]

FLAGS:
        --follow                         Continue reporting progress even after the validator has caught up
    -h, --help                           Prints help information
        --log                            Don't update the progress inplace; instead show updates with its own new lines
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --our-localhost <PORT>             Guess Identity pubkey and validator rpc node assuming local (possibly
                                           private) validator [default: 10899]
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

ARGS:
    <OUR_VALIDATOR_PUBKEY>    Identity pubkey of the validator, one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb://ledger)
    <OUR_URL>                 JSON RPC URL for validator, which is useful for validators with a private RPC service
```

## koii-close-vote-account

```sh
koii-close-vote-account
Close a vote account and withdraw all funds remaining

USAGE:
    koii close-vote-account [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS> <RECIPIENT_ADDRESS>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --authorized-withdrawer <AUTHORIZED_KEYPAIR>      Authorized withdrawer [default: cli config keypair]
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~/.config/koii/cli/config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --ws <URL>                                        WebSocket URL for the koii cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>    Vote account to be closed. , one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb://ledger)
    <RECIPIENT_ADDRESS>       The recipient of all withdrawn SOL. , one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb://ledger)
```

## koii-cluster-date

```sh
koii-cluster-date
Get current cluster date, computed from genesis creation time and network time

USAGE:
    koii cluster-date [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster
```

## koii-cluster-version

```sh
koii-cluster-version
Get the version of the cluster entrypoint

USAGE:
    koii cluster-version [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster
```

## koii-config

```sh
koii-config
Koii command-line tool configuration settings

USAGE:
    koii config [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

SUBCOMMANDS:
    export-address-labels    Export the current address labels
    get                      Get current config settings
    help                     Prints this message or the help of the given subcommand(s)
    import-address-labels    Import a list of address labels
    set                      Set a config setting
```

## koii-confirm

```sh
koii-confirm
Confirm transaction by signature

USAGE:
    koii confirm [FLAGS] [OPTIONS] <TRANSACTION_SIGNATURE>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

ARGS:
    <TRANSACTION_SIGNATURE>    The transaction signature to confirm

Note: This will show more detailed information for finalized transactions with verbose mode (-v/--verbose).

Account modes:
  |srwx|
    s: signed
    r: readable (always true)
    w: writable
    x: program account (inner instructions excluded)
```

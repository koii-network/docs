---
title: Connect to a Cluster
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Connect to a Cluster
---

The `koii config` command is used to update the Koii CLI configuration settings.

1. Print Configuration File Location:

    - Run the following command to print the file location of the config:

    ```
    koii config get
    ```

    - The output of the command should be similar to the following:

    ```
    Config File: /Users/<YOUR_HOME>/.config/koii/cli/config.yml
    RPC URL: https://testnet.koii.network/
    WebSocket URL: wss://testnet.koii.network/ (computed)
    Keypair Path: /Users/<YOUR_HOME>/.config/koii/id.json
    Commitment: confirmed
    ```

    - The RPC URL can be toggled between testnet and mainnet by pointing the RPC URL to the corresponding node URL.

2. Switch to Testnet:

    - You can toggle between testnet and mainnet by pointing the RPC URL to the corresponding node URL.

    - The command below is an example of how to switch to testnet:

    ```
    koii config set --url https://testnet.koii.network/
    ```

3. Update Default Wallet URL:

    - The default wallet URL is located in `/Users/<YOUR_HOME>/.config/koii/id.json `  .

    - You can update the default wallet URL with the following command:

    ```
    koii config set --keypair <PATH_TO_KEYPAIR>
    ```


By following these steps, you can easily configure your Koii CLI settings and connect to the desired cluster. If you have any questions or need further assistance, feel free to ask.

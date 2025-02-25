# Migration to Koii

Koii’s K2 chain is an enhanced fork of Solana, which means it retains the advantages of having an refined features to support our innovative Koii Task Program while also allowing for the migration and deployment of Solana-native programs in a more cost-effective manner. 

So, why not bring your favorite Solana programs to Koii now?

**Note:** Due to the numerous features added on top of Solana, maintaining synchronization with the original Solana chain has become increasingly challenging. As a result, Koii has stopped updating at Solana's **V1.14.19 mainnet beta version**:

You can refer to [Solana V1.14.19 Release](https://github.com/solana-labs/solana/releases/tag/v1.14.19). 

## Migration Process Example

To successfully migrate a Solana-based program onto the Koii network, follow these organized steps:

### 1. Select a Suitable Program

- Choose a program that aligns with Koii's capabilities, such as the **Squads Multi-Signature** program, Solana Stake Pool Program, etc.

### 2. Check for Compatibility Issues

- Possible incompatible flags:
1. Use of not supported features since [v.1.14.19](https://github.com/solana-labs/solana/releases/tag/v1.14.19).
2. Rustc version is not compatible with Koii CLI’s BPF SDK. 

The Solana BPF toolchain is closely integrated with LLVM. A newer Rust compiler may produce optimized BPF bytecode that is incompatible with older Solana runtimes. To ensure stability and compatibility, it is recommended to use SBF-based programs.

Example error:

```jsx
$ anchor build
BPF SDK: /home/herman/.local/share/koii/install/releases/1.16.2/koii-release/bin/sdk/bpf
cargo-build-bpf child: rustup toolchain list -v
cargo-build-bpf child: cargo +bpf build --target bpfel-unknown-unknown --release
error: package anchor-attribute-state v0.26.0 cannot be built because it requires rustc 1.59 or newer, while the currently active rustc version is 1.56.0-dev```
```

- Please fully test the feature before deployment.

### 3. Choose a Compatible Version

- If the program relies on unsupported features, select a version from around **June 2023** to ensure compatibility with Koii.

### 4. Build the Program

- Compile the program using one of the following methods according to their repository instructions:
    - `anchor build`
    - `cargo build-bpf`
    - `cargo build-sbf`

### 5. Deploy to Koii K2 Chain

- Use the following command to deploy the compiled program to Koii:
    
    ```
    koii program deploy <compiled_program.so>
    ```
    
- If deploying with a designated keypair, use the appropriate flag:
    
    ```
    koii program deploy --keypair <keypair.json> <compiled_program.so>
    ```
    

### 6. Modify the SDK

- Ensure that the SDK used in the program is compatible with Koii’s network requirements.
- Update Solana endpoints in the JavaScript SDK to Koii endpoints:
    - **Devnet:** [https://devnet.koii.network](https://devnet.koii.network/)
    - **Testnet:** [https://testnet.koii.network](https://testnet.koii.network/)
    - **Mainnet:** [https://mainnet.koii.network](https://mainnet.koii.network/)

By following these structured steps, developers can efficiently migrate their Solana-native programs to Koii while ensuring compatibility and optimal performance.

## SPL Token Support
Koii provides full support for SPL Token programs, ensuring compatibility with the SPL Token standard. You can create a new SPL Token using one of the following methods:

- [Command-Line Interface (CLI)](https://www.koii.network/docs/koii/the-koii-token/add-koii-to-exchange/kpl-tokens): Follow the steps outlined in our SPL Token Creation Guide.
- [KPL Token Creator](https://kpl.koii.network/): Use our intuitive KPL Token Creator to generate and manage SPL Tokens effortlessly.

### NFT Support (Coming Soon)
We are actively working on migrating the Metaplex program to enable NFT functionality. Stay tuned for updates!


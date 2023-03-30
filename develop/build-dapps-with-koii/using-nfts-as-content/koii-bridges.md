---
title: Koii Bridges
description: A Koii Bridge allows you to migrate your NFTs to and from different blockchains. Currently, we only support Ethereum bridging, but other chains are in development. You can find more example functions at atomicnft.com.
image: img/Koii_Bridges.png
sidebar_label: Koii Bridges
---

# Koii Bridges

![Banner](../img/Koii_Bridges.png)

### Introduction <a href="#introduction" id="introduction"></a>

A Koii Bridge allows you to migrate your NFTs to and from different blockchains. Currently, we only support Ethereum bridging, but other chains are in development. You can find more example functions at [**atomicnft.com**](https://atomicnft.com/).&#x20;

**Disclaimer:** Currently the bridge is running in Beta only, and is not fully decentralized. Although it has not had any issues so far, we recommend using it with caution. Stay tuned for more information on Validator Rings as we move towards a fully decentralized version.

### Description <a href="#description" id="description"></a>

The bridge is basically divided into two parts; the first part includes bridging NFTs to other networks from Arweave, while the second part includes bridging NFTs from other networks to Arweave.

#### Arweave to Ethereum <a href="#arweave-to-ethereum" id="arweave-to-ethereum"></a>

![Bridge an asset from Arweave to Ethereum](<../img/A2E%20(1).png>)

The Arweave to Ethereum bridge includes certain steps as indicated in the diagram above. The steps are further explained below:

1. The first step to initiate the bridging from Arweave to Ethereum is by locking the NFT you own on the Arweave network. Locking the NFT involves calling the `lock` function on your NFT smart contract. Refer to `lockToken.js` for code implementation.
<!-- 2. The next step is to pay the 10 KOII fee\* for the bridging, which will be used to mint your new NFT on the Ethereum network. The transfer function must include the `nftId` and `lockTx` (Obtained from step 1). Refer to transferToken.js for code implementation. \*10 KOII amount is subjective to the Ethereum fees paid for minting a new NFT on Ethereum -->
2. The third and final step from the user end is to submit the `arNFTId`, `arUserAddress`, `burnKOItx` and `lockedNFTtx` to the server at the `/mintEthToken` endpoint. The exact JSON body to be passed in that endpoint is shown below.

```json
{
  "arNFTId": "<Your Arweave NFT Id>",
  "arUserAddress": "<Your Arweave Wallet Address>",
  "burnKOItx": "<The txId received in step 2 after calling transfer token>",
  "lockedNFTtx": "<The lockedTx Id received in step 1>"
}
```

After submitting the transaction, the server will keep checking the transaction statuses, once they have succeeded and it is verified on the server that the fee is paid and an NFT on the Ethereum network is minted.

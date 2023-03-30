---
title: Fetching NFT Data
description: Learn how to fetch your NFT data.
image: img/Fetching_NFT_Data.png
sidebar_label: Fetching NFT Data
---

import Description from "@site/src/components/description";

# Fetching NFT Data

![Banner](../img/Fetching_NFT_Data.png)

<Description
  text="Learn how to fetch your NFT data"
/>

Since most NFTs are stored on-chain, retrieving metadata can be a complex process. There are two main options for retrieving data.

1. Directly from the Source Network
2. From Koii Nodes
3. Using Koii-X custom query hook

### Directly from the Source Network

Reading data from the source network directly means that we can often only read one NFT at a time and that the data will be missing contextual information. This can still be useful for certain applications and during testing.&#x20;

#### Atomic NFTs (from Arweave)

Atomic NFTs are some of the easiest to read into an application, since Arweave has a number of supported REST APIs. The arweave.net gateway provides easy CORS-compatible services for pulling in contract data, but it will need to be reconstructed using the SmartWeave libraries client-side to get the latest state.

```javascript
// Some code showing how to fetch an NFT via Smartweave's API
import Arweave from "arweave";

const arweave = new Arweave({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

const id = "NFTid";
getDatafromArweave(id);

async function getDatafromArweave(id) {
  let NFTdata = await arweave.transactions.get(id);
  console.log(NFTdata);
}
```

#### Ethereum NFTs (from Ethereum, Polygon, or Avalanche)

Ethereum NFTs are coming soon to Koii-X Templates.&#x20;

### From the Koii Nodes via the Mainnet API

If you are using Atomic NFTs, there is often a lot of additional information such as attention tracking counts, total KOII rewards, and bridging information. To fetch full NFT records, you can query the Koii Mainnet Gateway APIs as shown below:

```javascript
// Some code showing how to query mainnet.koii.live for the latest NFT states
import * as kweb from "@_koi/sdk/web";
let ktools = new kweb.Web();

const id = "NFTid";
getDatafromArweave(id);

async function getDatafromArweave(id) {
  let NFTdata = await ktools.getNftState(id);
  console.log(NFTdata);
}
```

### Using Koii-X custom query hook

This is the easiest way to fetch the data of an NFT:

Import `useNft` query hook

```
import { useNft } from "api/hooks";
```

Pass your NFT id to `useNft`

```
const nftId = 8ZsDVH9Iotsx4Y1U6QPdBibR3N1BkKt1CgEsYRyKUSE;
const { data, isLoading } = useNft({ id: nftId });
```

That's it. You should have this NFT content in `data`

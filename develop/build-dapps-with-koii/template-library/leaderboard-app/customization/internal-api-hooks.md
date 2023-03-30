---
title: Internal API Hooks
description: Every single API call made can be found here, such as Koii SDK
image: static/img/thumbnail.png
sidebar_label: Internal API Hooks
---

import Description from "@site/src/components/description";

# Internal API Hooks

<Description
  text="Every single API call made can be found here, such as Koii SDK"
/>

```
📦api
 ┣ 📂hooks /* react-query hooks */
 ┃ ┣ 📜useArtist.ts /* Get the artist details */
 ┃ ┣ 📜useNft.ts /* Get the NFT details */
 ┃ ┣ 📜useNfts.ts /* Get all NFTs based on the timeframe, 24 hours, 1 week, 1 month, 1 year & even all of them */
 ┃ ┗ 📜useNsfw.ts /* Get NFTs marked as nsfw */
 ┃
 ┣ 📜finnie.ts /* Api calls to interact with finnie wallet */
 ┣ 📜index.ts /* Generic api calls */
 ┣ 📜sdk.ts /* Koii sdk api calls */
 ┗ 📜upload.ts /* Api related to upload to Koii network */

```

### React-query Queries&#x20;

Everything inside [**api/hooks**](https://github.com/koii-network/koii.X/tree/main/src/api/hooks) is a React-query [**hook**](https://react-query.tanstack.com/reference/useQuery#_top)**.** Take a look at [**React-query**](https://react-query.tanstack.com/) documentation as it is a fundamental tool in Koii-X.

### Example

An example of these hooks is the [**`useNft`**](https://github.com/koii-network/koii.X/blob/main/src/api/hooks/useNft.ts) query hook, where we fetch, cache, and synchronize the single NFT data from Koii API.&#x20;

```jsx
import { useQuery } from "react-query";
import axios from "services/axios";

interface Props {
  id: string;
}

const fetchNft = async (id: string) => {
  try {
    if (!id) return undefined;
    const { data } = await axios.get(`/attention/nft?id=${id}`);
    return data;
  } catch (error) {
    return undefined;
  }
};

export function useNft({ id }: Props) {
  return useQuery(`nft-${id}`, () => fetchNft(id), {
    staleTime: 60 * 1000 * 60, // 1hr cache, since the nft details does not change.
    refetchOnWindowFocus: undefined,
  });
}
```

As you can see we're simple fetching `axios` the NFT content from `https://mainnet.koii.live//attention/nft?id=${id}`

### Finnie & SDK

The rest of the files inside [**`api`**](https://github.com/koii-network/koii.X/tree/main/src/api) folder are related to [**Finnie**](https://github.com/koii-network/koii.X/blob/main/src/api/finnie.ts), [**SDK**](https://github.com/koii-network/koii.X/blob/main/src/api/sdk.ts), [**upload**](https://github.com/koii-network/koii.X/blob/main/src/api/upload.ts)**,** and [**general**](https://github.com/koii-network/koii.X/blob/main/src/api/index.ts) calls.

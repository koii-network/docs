

# Lists and Leaderboards

![Banner](../img/Lists%20%26%20Leaderboards.png)

One thing to keep in mind when working with decentralized systems is that there's very minimal support for things like APIs and databases. Instead, we use a combination of on-chain data (via NFTs and GraphQL tags on Arweave) and Koii Tasks running on decentralized nodes.&#x20;

When constructing a leaderboard or list of content (such as a collection of an Artist's NFTs, or a personalized newsfeed), it's usually necessary to either configure an index or hijack an existing one.

Koii Tasks will go live in Q2 2022, at which point you'll be able to fully customize your system, but until then, the best course of action is likely to process the current Koii Leaderboard APIs clientside and construct your own newsfeed using filters.


**View Filters**

Filters can be applied to any list component as shown:

```tsx
📦src
 ┣ 📂components
 ┃ ┗ 📂filters
 ┃   ┗ 📂TimeFilter
// Set up Time Filter components /src/components/TimeFilter
function TimeFilter() {
  const [timeframe, setTimeframe] = useQueryParam<string>("t", withDefault(StringParam, "1w"));
  
  const onTimeframeChange = (newValue: string) => {
    setTimeframe(newValue, "replaceIn");
  return (
    <Flex>
      <ToggleButtonGroup value={timeframe} defaultValue={timeframe} onChange={onTimeframeChange} name="timeframe" isAttached variant="outline" aria-label="Change timeframe">
        <ToggleButton value="24h" aria-label="24 hours" children="24h" />
        <ToggleButton value="1w" aria-label="1 week" children="1w" />
        <ToggleButton value="1m" aria-label="1 month" children="1m" />
        <ToggleButton value="1y" aria-label="1 year" children="1y" />
        <ToggleButton value="all" aria-label="all time" children="all" />
      </ToggleButtonGroup>
    </Flex>
  );
};

📦src
 ┣ 📂api
 ┃ ┗ 📂hooks
 ┃   ┗ 📜useNfts.ts
// Use Time Filter /src/api/hooks/useNfts.ts
const fetchNfts = async (timeframe: string = "1w") => {
  try {
    let nsfwList: any[] = [];
    /* Get nsfw list */
    await fetchNsfwList()
      .then(res => {
        nsfwList = res?.data?.NSFWList || [];
      })
      .catch(() => {}); // We don't want to catch anything.

    /* Get nfts based on the timeframe */
    const { data } = await axios.get(`/attention/nft-summaries?period=${timeframe}`);
    const dataWithNsfwTag = data?.map((nft: any) => ({ ...nft, isNsfw: [...nsfwList].includes(nft?.id) }));

    return dataWithNsfwTag;
  } catch (error) {
    return undefined;
  }
};

export function useNfts({ timeframe = "1w" }: Props) {
  const [isNsfw] = useQueryParam("nsfw");
  return useQuery(`nfts-${timeframe}`, () => fetchNfts(timeframe), {
    staleTime: 60 * 1000 * 5, // 5min cache
    refetchOnWindowFocus: undefined,
    select: data => {
      return isNsfw ? data : [...data].filter((nft: any) => !nft.isNsfw);
    }
  });
}

```

The default list component fetches the fully Koii NFT list, so configuring views can allow you to select any content you like without rebuilding the Tasks API. If this doesn't work for your use case, please [**contact our support team**](https://koii.me/support) and we can help you deploy an Indexing Task of your own!

**NSFW**

Koii currently manages an NSFW blocked content list which can be accessed using the same API as the main feed. NSFW content can be toggled in list views like this:

```jsx
📦src
 ┣ 📂components
 ┃ ┗ 📂filters
 ┃   ┗ 📂NsfwFilter
// Set up NSFW components /src/components/TimeFilter
function NsfwFilter() {
  const [isOn, setIsOn] = useQueryParam("nsfw", withDefault(BooleanParam, false));
  const onNsfwChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsOn(e.target.checked || undefined, "replaceIn");
  };

  return (
    <>
      <FormControl display="flex" alignItems="center" justifyContent="center">
        <FormLabel htmlFor="isNsfw" m="0 6px 0 0" fontSize="xs" userSelect="none">
          Show NSFW content
        </FormLabel>
        <Switch id="isNsfw" size="sm" defaultChecked={isOn} value={isOn ? 1 : 0} onChange={onNsfwChange} />
      </FormControl>
    </>
  );
}

📦src
 ┣ 📂api
 ┃ ┗ 📂hooks
 ┃   ┗ 📜useNsfw.ts
// Use NSFW /src/api/hooks/useNsfw.ts
const fetchNsfw = async () => {
  try {
    const { data } = await axios.get(`/getNSFWList`, {
      baseURL: process.env.REACT_APP_API_URL
    });
    const nsfwList = data?.NSFWList || [];
    return nsfwList;
  } catch (error) {
    return undefined;
  }
};

export function useNsfw() {
  return useQuery(`nsfw-list`, fetchNsfw, {
    staleTime: 60 * 1000 * 60, // 1hr cache, since the nft details does not change.
    refetchOnWindowFocus: undefined
  });
}
```

**Search**

Search is currently implemented using clientside libraries which draw from the same core NFT list, and can be customized by editing the Search Component, [**shown here**](/).
<br />

**Thumbnails**

Since your app will live on decentralized storage, it can sometimes be difficult to generate thumbnail images on the fly for your NFT assets, and it can be even harder to set OpenGraph tags for sharing content.

To streamline this process, Koii has provided a thumbnail generation API powered by Koii Tasks, to which you can POST new NFTs so that they will have nicely formatted previews when sharing on social media.&#x20;

```tsx
📦src
 ┣ 📂api
 ┃ ┗ 📜upload.ts line:137-143
// The code will send POST request to https://api.koii.live/generateCardWithData to get a thumbnail
const body = {
  data: {
    ...initialState,
    id: tx.id
  },
  media
};

// Your media tag should look like this:
// "media" : {
// "url" : "NFT file in decode in base64 format"
// }
// For example of the body:
//{
//    "data": {
//    "id": "QfZ3CRZYX3dvkmAwml6qTfJZJL2atFCyF1_mM7ChggU",
//    "owner": null,
//    "title": "Tons of code",
//    "name": "Neo Matrix",
//    "description": "Lots of unused vars in my code\n",
//    "ticker": "KOINFT",
//    "balances": {
//       "null": 1
//   },
//    "contentType": "image/png",
//    "createdAt": "1632748295",
//    "tags": ["The one"],
//    "isNsfw": false
//    },
// "media":{
// "url": "/9j/4AAQSkZJRgABAQAAAQABAAD/......"
// }
//}

📦src
 ┣ 📂api
 ┃ ┗ 📜upload.ts line:188-194    
const generateCardWithData = async (body: any) => {
  return await axios.post(`https://api.koii.live/generateCardWithData`, body, {
    transformRequest: (data, headers: any) => {
      headers.common["Access-Control-Allow-Origin"] = "*";
      return data;
    },
    baseURL: undefined
  });
};
```




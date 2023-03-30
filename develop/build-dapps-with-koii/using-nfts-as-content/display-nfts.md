---
title: Display NFTs
description: NFTs can be displayed using the components collected on the /nft/<id> page of the leaderboard template.
image: img/Display_NFTs.png
sidebar_label: Display NFTs
---

# Display NFTs

![Banner](../img/Display_NFTs.png)

NFTs can be displayed using the components collected on the [**`/nft/<id>`**](https://github.com/koii-network/koii.X/blob/main/src/pages/nft/index.tsx) page of the leaderboard template.

To display a list of NFTs, import the `<RenderNftsList/>` widget

```tsx
import { RenderNftsList } from "components/widgets";
```

The `<RenderNftsList/>` component takes the array `nfts` as a prop

```tsx
function Component() {
  return (
    <>
      <RenderNftsList nfts={nfts} />
    </>
  );
}
```

The `nfts` here must be an array of objects with each NFT object following the format shown below.

```json
const nfts = [
    {
        attention: // The attention(Views) that NFT has
        balances: // The number of NFTs owner have
        contentType: // The type of the NFT, such as image/png or video/mp4
        createdAt: // NFT create date
        description: // Description of NFT
        id: // Id of NFT
        locked: []
        next: // Next NFT
        owner: // The wallet address of the NFT's owner
        prev: // Previous NFT
        reward: // Number of KOII this NFT get
        tags: // Tags this NFT have such as ['#art']
        ticker: "KOINFT"
        title: // Title of NFT
    }
]

```

If you need help [**Fetching NFT Data**](./fetching-nft-data), check out the previous section.

### Customization

Configuring new views and new forms of Atomic content requires a thorough understanding of the tools at play. This section covers tips and instructions for quickly scaffolding new formats.

#### File Types

There are several supported mime types for the Leaderboard Template:

1. text/html ~ these will render as apps inside iframes (useful for dynamic content)
2. image/\* ~ these will render as html `<img>` tags
3. video/\* ~ these will render as iframes containing videos&#x20;

#### View Controls

Each type of Atomic NFT has a different type of view:

- Swap the content out

```jsx

📦services
 ┣ 📂utils
 ┃ ┗ 📜index.tsx line:36-48

// For three different types of NFT, there are three different types of views for it
const getMediaType = (contentType: any) => {
  let mediaType = contentType;
  if (contentType) {
    if (contentType.includes("image/")) {
      mediaType = "image";
    } else if (contentType.includes("video/")) {
      mediaType = "video";
    } else if (contentType.includes("text/html")) {
      mediaType = "iframe";
    }
  }
  return mediaType;
};

📦components
 ┣ 📂common
 ┃ ┗ 📂NftMediaContainer
 ┃   ┗ 📜index.tsx line:10-38

const contentType = getMediaType(nft?.contentType);
const arweaveUrl = `https://arweave.net/${nft?.id}`; // This url is the source of the NFT

// Use Iframe for text/html type
const IframeContainer = () => <Box as="iframe" src={arweaveUrl} onLoad={() => triggerPort(nft?.id)} boxSize="100%" />;
// Use <Image> for image type
const ImageContainer = () => <Image src={arweaveUrl} onLoad={() => triggerPort(nft?.id)} boxSize="100%" objectFit="cover" />;
// Use <Box as="video"> for video type
const VideoContainer = () => (
  <Box as="video" controls muted onLoadedData={() => triggerPort(nft?.id)} boxSize="100%">
    <source src={arweaveUrl} />
  </Box>
);

// Judge which contentType NFT is then use it as <renderContainer>
const renderContainer = () => {
    switch (contentType) {
      case "image":
        return <ImageContainer />;
      case "video":
        return <VideoContainer />;
      case "iframe":
        return <IframeContainer />;
      default:
        return <></>;
    }
  return (
    <Box>
      {renderContainer()}
    </Box>
  );
};

```

#### Show live counts for attention, title, description, etc.

```tsx
// After fetching the NFT state, customize the props you wanna show
 📦pages
 ┣ 📂nft
 ┃ ┗ 📜index.tsx
 // attention prop shows the attention(Views) that NFT has.
 // Same way as title and description.
 <Text>{nft?.attention} Views</Text>

 // reward prop shows how much KOII NFT earned
 const formatDigitNumber = (val: any) => {
  if (typeof val !== "number") return 0;
  if (val) return val.toLocaleString("en-US", { maximumFractionDigits: 2 });
  else return 0;
};
 <Text>{formatDigitNumber(nft?.reward)} Koii earned</Text>

 // To view NFT in block, use nft.id tag
 <Button as={Link} href={`https://viewblock.io/arweave/tx/${nft?.id}`}>
Explore block
</Button>

// To show the date NFT created at.
const formatUnixTimestamp = (
  timestamp: string,
  options: Record<string, any> = {
  // e.g: Jan 30, 2022
    day: "numeric",
    month: "short",
    year: "numeric"
  }
) => {
  if (!timestamp) return null;
  return new Date(parseInt(timestamp) * 1000).toLocaleString(undefined, options);
};
<Text>
Registered:
<span>{formatUnixTimestamp(nft?.createdAt || "1616944045")}</span>
</Text>

```

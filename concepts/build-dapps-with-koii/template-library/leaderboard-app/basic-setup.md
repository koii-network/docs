---
title: Basic Setup
description: The most basic functions needed to create a leaderboard page.
image: img/thumbnail.png
sidebar_label: Basic Setup
---

import Description from "@site/src/components/description";

# Basic Setup

<Description
  text="The most basic functions needed to create a leaderboard page"
/>

<br/>

#### Import the Leaderboard widget

First of all import the `<Leaderboard/>` widget and use it inside any React component.

```jsx
Import Leaderboard from components/widgets;

export function Home() {
  return (
    <div>
        <Leaderboard />
    </div>
  );
}
```

#### Customize the Leaderboard widget

Head to the [**leaderboard**](https://github.com/koii-network/koii.X/blob/main/src/components/widgets/Leaderboard/index.tsx) widget for further customization.

```jsx
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { TimeFilter, NsfwFilter } from "components/filters";
import { TopNftsContent } from "components/widgets";

export function Leaderboard() {
  return (
    <Box color='blue.500' bg='gray.50' rounded='sm' p='2'>
      {/* Header */}
      <Flex align='center' justify='space-between' mb='4'>
        <Heading size='lg'>Top content</Heading>
        <Stack>
          {/* Filters */}
          <TimeFilter />
          <NsfwFilter />
          {/* Nfts */}
        </Stack>
      </Flex>
      <TopNftsContent />
    </Box>
  );
}
```

If you want to, you can remove the `<TimeFilter/>` and the `<NsfwFilter />` filters from your leaderboard. To customize the NFT grid shown [**here**](https://koii-x.vercel.app/) open the `<TopNftsContent/>` widget.

---
title: SimpleGrid
description: SimpleGrid provides a friendly interface to create responsive grid layouts with ease.
image: img/thumbnail.png
sidebar_label: SimpleGrid
---

# SimpleGrid

SimpleGrid provides a friendly interface to create responsive grid layouts with ease. It renders a `div` element with CSS `display: grid`.

:::tip
New to CSS? No problem! `SimpleGrid` provides an easy way to customize your layout.
:::

Here's an example of how you can change the layout:

:::info
You can find this sample code at &#x20;

/src/components/widgets/RenderNftsList.tsx, line 14
:::

```tsx
<SimpleGrid w="100%" minW="0" minH="0" gap="8" columns={[1, 2, 4]}>
```

Properties explained:

- w: width (100% for full width)
- minW: minimum width
- minH: minimum height
- gap: The gap between the grid items
- columns: The number of columns(<= 481 , >= 768 <=, >=996)

```tsx
<SimpleGrid w="100%" minW="0" minH="0" gap="8" columns={[2, 3, 5]}>
```

After changing the columns from 1, 2, and 4 to 2, 3, and 5, the number of NFTs per row has been changed.

Check for more useful properties here: [**https://chakra-ui.com/docs/layout/simple-grid**](https://chakra-ui.com/docs/layout/simple-grid)

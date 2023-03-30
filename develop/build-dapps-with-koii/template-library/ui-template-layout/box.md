---
title: Box
description: Box is the most abstract component on top of which all other Chakra UI components are built.
image: static/img/thumbnail.png
sidebar_label: Box
---

# Box

Box is the most abstract component on top of which all other Chakra UI components are built. It renders the `div` element by default.

Here's an example of how to customize the navigation bar:

:::info
You can find this example code at &#x20;

/koii.X/src/components/common/Nav/index.tsx, line 18
:::info

```tsx
 <Box bg="blue.500" px="4" color="white">
 ... ...
```

In this Box component, it has `bg`, `px`and `color` props, which control the background color, padding, and text color

```tsx
<Box bg="red.500" px="4" color="black">
 ... ...
```

After changing `blue.500` to `red.500`, you will notice the navigation color has changed. The same is true for `color` .

:::info
You can also use HEX for color selector such as #171753 to choose your favorite color..
:::

For more information and properties, check [**https://chakra-ui.com/docs/layout/box**](https://chakra-ui.com/docs/layout/box)

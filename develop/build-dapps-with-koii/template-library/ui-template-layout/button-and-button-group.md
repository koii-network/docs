---
title: Button & Button Group
description: The button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
image: img/thumbnail.png
sidebar_label: Button & Button Group
---

# Button & Button Group

The button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

:::tip
New to CSS? No problem! Buttons provide you with a very easy way to customize the style and add icons such as Facebook or Twitter.
:::

Here's an example where you can change the button type (Explore Block):

:::info
You can find this example code at &#x20;

src/pages/nft/index.tsx line 97
:::

```tsx
 <Button
    as={Link}
    variant="outline"
    colorScheme="gray"
    href={`https://viewblock.io/arweave/tx/${nft?.id}`}
    isExternal
    rel="noopener noreferrer"
    size="xs"
    rightIcon={<RiExternalLinkLine />}
  >
```

Properties explained:

- variant: button style
- colorScheme: Hover color
- href: url position
- isExternal: Will this button open a new tab (If not desired, just delete this property)

Check for more useful properties here: [**https://chakra-ui.com/docs/form/button**](https://chakra-ui.com/docs/form/button)

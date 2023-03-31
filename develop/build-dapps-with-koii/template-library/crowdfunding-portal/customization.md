---
title: Customization
description: You can customize your crowdfunding portal to receive funding to your wallet by following these steps.
image: img/thumbnail.png
sidebar_label: Customization
---

# Customization

### Customize the config file

You can customize your crowdfunding portal to receive funding to your wallet by following these steps.

Head to the [**funding-config.tsx**](https://github.com/koii-network/crowdfunding/blob/master/src/config/funding-config.tsx) file in your app, you'll notice a `config` object that you can change to match your portal config. e.g:

```jsx
const config = {
  title: "Plagiarism Registry DAO", // Project title
  description:
    "Fighting plagiarism with a searchable, creator-owned world wide registry. Get rewarded for your work.", // Project description
  companyName: "Koii Network Creator Studio",
  fundGoal: 1000, // Your funding goal in "eth"
  images: [
    // Images to be placed in the top slider
    { src: "https://picsum.photos/700" },
    { src: "https://picsum.photos/701" },
    { src: "https://picsum.photos/702" },
    { src: "https://picsum.photos/703" },
    { src: "https://picsum.photos/704" },
    { src: "https://picsum.photos/705" },
  ],
  socials: {
    // Your social network links
    website: "https://koii.network",
    twitter: "https://twitter.com/KoiiNetwork",
    discord: "https://discord.com/invite/koii",
    facebook: null,
    github: "https://github.com/koii-network",
  },
  paymentType: "eth", // Payment type (Currency) for now, we only support "eth" (ethereum)
  fundAddress: "0x0123456789", // Your ethereum funding address that people will deposit to.
  // A brief description about the project as html.
  about: (
    <div>
      <p>About us</p>
    </div>
  ),

  faqs: [
    // FAQs content
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
  ],
};
export default config;
```

You don't need to do anything after customizing your funding config for the Portal to work—it should work nicely by itself. But just in case you need to use any value from your funding config use the `useFunding` hook

### useFunding

```jsx
import { useFunding } from "components/funding";

const {
  state: { config, fundModal },
  dispatch,
} = useFunding();
```

To get any funding config value inside any component:

```jsx
const your-config-address = config.fundAddress;
```

Or to dispatch any [**funding action**](https://github.com/koii-network/koii.X/blob/main/src/components/funding/FundingContext/index.tsx#L44)\*\*\*\*

```jsx
dispatch({ type: "CLOSE_FUND_MODAL});
// Hint: this dispatch action will close the funding modal
```

All available [**actions**](https://github.com/koii-network/koii.X/blob/main/src/components/funding/FundingContext/index.tsx#L50).

---
title: Components
description: Your UI/UX folder. Place any shared components here, this folder contains every single re-usable component such as button color, card type, icons, and anything else.
image: img/thumbnail.png
sidebar_label: Components
---

import Description from "@site/src/components/description";

# Components

<Description
  text=" Your UI/UX folder. Place any shared components here, this folder contains
  every single re-usable component such as button color, card type, icons, and
  anything else"
/>

```
📦components
 ┣ 📂buttons
 ┃ ┣ 📂ToggleButton
 ┃ ┃ ┣ 📜ToggleButton.tsx
 ┃ ┃ ┗ 📜ToggleButtonGroup.tsx
 ┣ 📂cards
 ┃ ┣ 📂NftCard
 ┃ ┣ 📂NftFeaturedCard
 ┣ 📂common /* Common components that you probably see on most pages */
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Nav
 ┃ ┣ 📂NftFootbar
 ┃ ┣ 📂NftMediaContainer
 ┣ 📂filters
 ┃ ┣ 📂NsfwFilter
 ┃ ┣ 📂TimeFilter
 ┣ 📂finnie
 ┣ 📂icons
 ┣ 📂layouts
 ┣ 📂modals
 ┃ ┣ 📜ReportModal.tsx /* Report NFT modal */
 ┃ ┣ 📜ShareModal.tsx /* Share NFT modal (with socials) */
 ┃ ┣ 📜TipArtistModal.tsx /* Tip artist (by wallet address) modal */
 ┣ 📂ui /* Re-usable UI components */
 ┗ 📂widgets
 ┃ ┣ 📂Leaderboard /* NFTs Leaderboard */
 ┃ ┣ 📜DragAndDropUploader.tsx /* Upload to Koi.rocks components */
 ┃ ┣ 📜TopNftsContent.tsx
 ┃ ┗ 📜index.ts

```

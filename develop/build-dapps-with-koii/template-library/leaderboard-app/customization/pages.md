---
title: Pages
description: Your app pages, e.g /home, /nft/:id & /artist/:id The pages are normally linked with react-router
image: static/img/thumbnail.png
sidebar_label: Pages
---

import Description from "@site/src/components/description";

# Pages

<Description
  text="Your app pages, e.g /home, /nft/:id & /artist/:id The pages are normally
  linked with react-router"
/>

### General Structure

```
📦pages
 ┣ 📂artist
 ┃ ┗ 📜index.tsx
 ┣ 📂home
 ┃ ┗ 📜index.tsx
 ┣ 📂nft
 ┃ ┗ 📜index.tsx
```

The pages folder contains the pages (routes) that are currently on the App. These pages are implementations of the [**React router**](https://reactrouter.com/) routes.

e.g we currently have

1. `/` (homepage)
2. `/nft/<id>` the single nft page. 👉[**Demo**](https://koii-x.vercel.app/nft/8ZsDVH9Iotsx4Y1U6QPdBibR3N1BkKt1CgEsYRyKUSE)
3. `/artist/<id>` the artist (creator) page. 👉[**Demo**](https://koii-x.vercel.app/artist/5kUbe9C_zkZSDWI1ygve3jZDDrh3MSu-AT8M4tu7mpA)

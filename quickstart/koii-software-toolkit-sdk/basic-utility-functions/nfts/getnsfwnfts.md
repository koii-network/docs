---
title: getNsfwNfts
description: Get the list of NFTs tagged as NSFW.
image: img/thumbnail.png
sidebar_label: getNsfwNfts
---

# getNsfwNfts

Get the list of NFTs tagged as NSFW

### Parameters

Returns Promise `<unknown>`

- returns an array of NFTs tagged as NSFW

### Example Code

```jsx
const knode = require("@_koii/sdk/node");
const ktools = new knode.Node();

async function GetNsfwNfts() {
  const nfts = await ktools.getNsfwNfts();
  console.log(nfts);
}

GetNsfwNfts();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
[
  'DldDh2z7O1uVPTO3UuYOJHdSlVWa8Iri6c6TjIa0s1g',
  '9RHdcH9AgX6jYuPw-Tbb4BcFq2zQoqR_ds2NcFS8xYM',
  'jCq5SovWkaNYUPKxQTYFuzVUk82Kj7944RTcMO3rmXI',
  '_-7HW1Kv8cUwikT0dxkSJ0x-PX2kkaKbY2wN4hkTDB4',
  'lEPhzpAtWtMLJzyWiXcKXsyw8keri6ntr3cBkiKwq9s',
  'dHsMH4QP-OEt0vw2OWotpcjWLH-hA4rMFvPqd9pZasc',
  'zC_QG41qZyPfoelcX8KSUT2LywIG2As-eh-Xi9Wvh7A',
  '-SEniZi4yylf4aG8yf0iCouCEB7R7xLOBXHKUsUIMEI',
  'wGKTOmU7nrZbDdoLKYYkbQM3emzADDqIy8JKuOOU0UI',
  'IqRFLnO8yM0GLEFNN-HBF479s_88DD1b3vzIinlpKRs'
]
```

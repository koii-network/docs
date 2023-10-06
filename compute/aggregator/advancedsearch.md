---
title: Advanced Search
image: img/thumbnail.png
sidebar_label: Advanced Search
---

Improve your search query with a wide variety of parameters to only get the data that you need. Save compute power with **pinpoint data retrieval with Advanced Search.**

## Parameters

1. **Keyword Filters**:
   - Use specific keywords or phrases to refine your search, e.g., `"#web3"`, `"blockchain"`, or `"crypto conference"`.
   - Use boolean operators to combine searches: `"#web3 AND blockchain"` or `"crypto NOT scam"`.

2. **Account Filters**:
   - From a specific account: `from:elonmusk`
   - To a specific account: `to:coinbase`
   - Mentioning a specific account: `@binance`

3. **Link Inclusion**:
   - Tweets containing links: `#web3 filter:links`

4. **Engagement Threshold**:
   - While the Twitter API doesn’t provide filtering by engagement, with the Twitter Crawler you can filter tweets based on a threshold of likes, retweets, or replies.

5. **Date Filters**:
   - Tweets sent before a date: `#web3 until:2023-09-01`
   - Tweets sent since a date: `#web3 since:2023-01-01`

6. **Additional Filters**:
   - Tweets containing images: `#web3 filter:images`
   - Tweets containing videos: `#web3 filter:videos`
   - Positive sentiment: `#web3 :)`
   - Negative sentiment: `#web3 :(`
   - Excluding retweets: `#web3 -filter:retweets`
   - Questions: `#web3 ?`

By combining these advanced search features, you can gather highly tailored data that optimizes data retrieval and reduces compute power needed. For example, if a company wants to research public sentiment around Web3 over a specific period, you could use:

`"#web3 :) since:2023-01-01 until:2023-09-01 filter:links from:trustedsource"`

This would fetch positive sentiment tweets containing links about Web3 from a trusted source between January 1, 2023, and September 1, 2023. Granularity like this is invaluable for researchers, marketers, and brands.
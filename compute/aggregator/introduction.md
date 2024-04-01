---
title: Koii Data Aggregator
image: img/thumbnail.png
sidebar_label: Introduction
---

<!--
We are just the marketplace for people to do these tasks. Templates are only there to help on how to write these tasks. We can’t be the ones directly doing
Framing it so its less scary
So how the template 
Extractor example but mainly not 
1. How its executed
2. How to make it private (encrypt the payload)
3. Database 
4. Less warning 
5. Backlinks relevant sections that explain things 
-->
![banner](./img/twittercrawler.svg)

## **Introduction**

Thanks to the growth and adoption of AI, data on the web is now more precious than ever and community devices are the most efficient way to access it. Koii makes crowd sourcing this data **more affordable and accessible to end-users, developers, and companies in need.**

Web platforms are incentivized to restrict data, as API costs rise, so does the value of the data. In contrast, a decentralized data market like Koii **becomes more affordable with increased competition.**

One of our example template tasks is a Extractor that uses nodes to efficiently extract public websites. As an example, we have improved the extractor to function as a [**community data feed for X**](https://github.com/somali0128/X-scraper) allowing users to collect data, automate replies, filter by engagement, and pull data from specific tweet IDs. However, this is just an example of how you can:

1. **Gather Data from any Website using Koii.**
2. **Put that Information on a Database.**
3. **Create an API that accesses that data.**

## **Features**

Koii Network's **community data feeds** uses community devices to efficiently extract tweets with speed and flexibility. While this doesn’t expose private information, it allows crowd sourced data projects to **bypass the limitations of traditional API rate limits**. Our solution provides data buyers with more granular control, allowing them to **gather large amounts of data specific to their requirements.**

| Feature                                           | Koii Data Aggregator |
|---------------------------------------------------|:--------------------:|
| Working Search                                    | ✔️  Yes               |
| No Proxy Required                                 | ✔️  Yes               | 
| Reply to Tweets                                   | ✔️  Yes               |
| Follow Accounts                                   | ✔️  Yes               |
| Tweets Per Hour                                   | 2000 Queries         |
| Search Data Range                                 |  Unlimited           |
| Advanced Search                                   | ✔️  Yes               |
| Engagement Filter                                 | ✔️  Yes               |
| Date Filter                                       | ✔️  Yes               |
| Profile Filter                                    | ✔️  Yes               |
| Link, Video, Image Filters                        | ✔️  Yes               |
| Exclude Retweets                                  | ✔️  Yes               |


- **Cost Savings:** Centralized API prices rise with data's value, while our decentralized approach becomes more affordable with more nodes, avoiding large API costs.
- **Large Data:** With Koii, you can gather more tweets more often. No rate-limits and **ALL** the data available **NOT** just what the API provides.
- **Relevant Data:** Only gather what you need. By [setting your requirements](/compute/aggregator/advancedsearch), you ensure only relevant data is fetched, improving the efficiency of your compute tasks. Community nodes only receive incentives if the tweets they submit match your specifications (i.e. tweets since 09/01/2023, containing `"#elon_musk_is_cool"`)
- **Filter by Engagement:** Users can filter tweets based on a threshold of likes, retweets, or replies, which the traditional APIs may not support.

:::info Coming Soon
Support for Reddit and Facebook.
:::

## **Data Structure**

```json
data = {
  user_name: "username",
  screen_name: "screen_name",
  user_url: "user's URL",
  user_img: "user's profile image URL",
  tweets_id: "tweet ID",
  tweets_url: "tweet URL",
  tweets_content: "tweet text",
  time_post: "time the tweet was posted",
  time_read: "time the tweet was read",
  comment: "number of comments",
  like: "number of likes",
  share: "number of shares",
  view: "number of views",
  outer_media_url: "array of media URLs",
  outer_media_short_url: "array of short media URLs"
}
```
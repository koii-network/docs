---
title: Network Economics
description: Koii is a decentralized protocol, meaning that anyone is free to fork the code and build their own version for a specific purpose.
image: img/thumbnail.png
sidebar_label: Network Economics
---

# Network Economics

Koii is a decentralized protocol, meaning that anyone is free to fork the code and build their own version for a specific purpose. In our first implementation, the [settlement layer](/develop/settlement-layer/k2-tick-tock-fast-blocks) provides [payments processing](/develop/finnie-for-devs/koii-network/transfer-koii) and [dispute resolution](/develop/microservices-and-tasks/what-are-tasks/what-are-audits) services to support the compute economy, while providing a historical ledger. Since the settlement layer is decentralized, there is no central ownership body, and following from the examples of Bitcoin, Ethereum, and Solana, a tokenized model was implemented to ensure bad actors can be appropriately penalized. Transaction fees paid in KOII tokens control how data is added to the network, preventing a bad actor from flooding the system with spam.&#x20;

**Note:** The token does not confer governance rights, nor does it provide any ownership of the system, Koii Labs, or the Koii Foundation. Ownership of tokens does permit a community member to run either a [K2 node](/develop/settlement-layer/running-a-k2-node) or a [task node](/develop/microservices-and-tasks/run-a-task-node), and provide services to the network.

### Token Generation

At mainnet launch, the network will have a supply of 10,000,000,000 KOII, after which an inflation rate of 3.65% will be issued annually, every 12 hours, at a rate of 0.01% per day, or 0.005% per 12 hour window. The newly generated tokens are split between attention mining, K2 Settlement Layer nodes, and Task nodes that run the attention game. Attention mining receives 80% of new tokens, K2 Settlement Layer nodes receive 10%, and Task nodes receive 10%. Get more information on [Attention Mining here](./proof-of-real-traffic/attention-mining).

![Token Generation](./img/Token%20Generation.svg)

### Supply Reduction

While early cryptocurrencies aimed to provide hard caps, like the Bitcoin network, modern utility networks have evolved to optimize for network value creation instead. In Koii’s case, continuous inflation benefits the network by onboarding new node operators who fulfill Tasks and provide hosting for content and apps running on Koii. As a result, reducing inflation would actually reduce the rate of new nodes that can join the network, and so steady-state inflation is desirable.&#x20;

The Koii foundation is dedicated to providing developers with incentives to build on the network, including grants and sophisticated, easy to use tooling. Each time that a new project launches on Koii, a Bounty must be locked to pay for hosting from Koii’s Compute Marketplace, which removes tokens from the circulating supply. Additionally, each time that a new node joins the Task, it must stake tokens as collateral, locking up further supply.&#x20;

At steady state, the network is designed to lock up tokens in Staking and Bounties, exceeding those released by the inflation, which should reduce the available supply over time.

![Supply Reduction](./img/Supply%20Reduction.svg)

### Reputation Hardening

In both Attention Mining and the Compute Marketplace, the reputation of wallets is tracked and used to calibrate system processes. In Attention Mining, Reputation is used to prevent spam, and reward high-value contributions by tracking who appreciates them most, while in the Compute Marketplace, the Reputation of a node enables it to perform more work with less stake, and earn more rewards, because it is less likely to behave badly.&#x20;

As the network grows, we expect to see rewards go disproportionately to participants with high reputations, and build a strong core group of committed community members who will hold these tokens for the long term, further reducing supply.&#x20;

![Reputation Hardening](./img/Reputation%20Hardening.png)

---
title: Koii Commitment Status
sidebar_label: Commitment Status
pagination_label: Consensus Commitment Status
description:
  "Processed, confirmed, and finalized. Learn the differences between the
  different commitment statuses on the Koii blockchain."
keywords:
  - processed
  - confirmed
  - finalized
  - stake level
  - block
  - blockhash
---

The [commitment](https://solana.com/docs/terminology#commitment) metric gives
clients a standard measure of the network confirmation for the block. Clients
can then use this information to derive their own measures of commitment.

There are three specific commitment statuses:

- Processed
- Confirmed
- Finalized

| Property                              | Processed | Confirmed | Finalized |
| ------------------------------------- | --------- | --------- | --------- |
| Received block                        | X         | X         | X         |
| Block on majority fork                | X         | X         | X         |
| Block contains target tx              | X         | X         | X         |
| 66%+ stake voted on block             | -         | X         | X         |
| 31+ confirmed blocks built atop block | -         | -         | X         |


<sub>This documentation incorporates substantial portions of the Solana documentation, adapted for Koii (K2). Solana’s architecture and underlying principles form the foundation of K2’s implementation. Content adapted under the terms of the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/). See [Solana Documentation](https://docs.solana.com/) for more details.</sub>
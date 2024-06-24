---
title: Runtime Flow
description: Gradual Consensus - Act quickly, react faster, and reward slowly.
image: img/thumbnail.png
sidebar_label: Runtime Flow
---

import Description from "@site/src/components/description";
import ContentLink from "@site/src/components/contentLink";

# Runtime Flow

![decorative banner](/img/concepts/gradual-consensus/runtime-flow.svg)

<Description text="Gradual Consensus - Act quickly, react faster, and reward slowly." />

While the task standard supports a wide range of possible applications, the most straightforward approach is to follow a multi-round confirmation process, which we refer to as **Gradual Consensus**.

## Why is it gradual?

One of the major limitations of stake-based games is the potential for an actor with a large number of tokens to temporarily take over the system and potentially even extract rewards unfairly. Koii tasks naturally avoid this issue by slowing down reward distributions and using proportionately high numbers of audit nodes compared to task executors.

## How does it work?

The key to building community-based products is to regularly appraise contributions through a commonly agreed-upon set of rules. Under the Koii model, this system runs in regularly timed rounds, during which each participating device participates as much as it can, and rewards or penalties are regularly deployed to correct the course of the system towards a desired outcome.

In each task cycle, there must be:

1. Work to do
2. A mechanism to review work done by other participants
3. Rewards for good behavior
4. Penalties for bad behavior

For help designing your task, you might want to try using the task organizer, which provides a simple whiteboard for brainstorming your product.

<ContentLink
  title="Task Outline"
  link="https://www.figma.com/community/file/1220194939977550205"
  imageLink="https://static.figma.com/uploads/1a667ef53b7c4837049399d0593ffca39e0bec9e"
  description="Figma"
  bottomText="Copy this whiteboard to start brainstorming how your task will work."
/>

Note: In most cases, the actual management of (3) and (4) above depends on tracking digital signatures from participating nodes, community members, or outside Oracle services. Reviewing these signatures is usually referred to as an audit.

![Gradual consensus](/img/concepts/gradual-consensus/gradual-consensus.svg)

In Gradual Consensus, a process involving multiple rounds, nodes first execute a task and subsequently vote on how to distribute rewards. It's essential to note that although the entire process spans three rounds, each cycle within these rounds functions independently. This means that in every round, a new cycle begins and concludes, ensuring continuous and overlapping activity.

---
title: Securing Tasks
description: Staying safe with decentralized and anonymous microservice providers.
image: img/thumbnail.png
sidebar_label: Securing Tasks
---

import Description from "@site/src/components/description";

# Securing Tasks

![banner](../img/Securing%20Tasks.svg)

<Description
  text="Staying safe with decentralized and anonymous microservice providers."
/>

In a decentralized system, it's important not to "trust" any particular party. This not only ensures stability, but also increases transparency within the system by sharing the burden of truth broadly across the community.<br />

While it would immediately appear that writing audits might take an expert designer or be altogether impossible in some applications, there are now NPM libraries for just about anything, including for example [Verifiable Randomness functions](https://github.com/idena-network/vrf-jshttps://github.com/idena-network/vrf-js). We will have more information coming regularly about standardized tasks and audit templates, but in the meantime, here are some possible ways to check your work.&#x20;


## **How do Audits Work?**

Any time a task payload is submitted by a participating node, an audit can be called by any other node which has a stake in that task. During an audit, any participating nodes will automatically check the work of the suspect node, and vote to slash their stake if a majority of participating nodes agree that the submitted payload does not match the expected result.<br />

In practice, this means tasks can function as deterministic smart contracts, while also incorporating off-chain information and providing scalable integrations with storage-layer data.

### **What Happens to the Stake, When Slashed?**

If an audit vote is successful, a portion (up to 100%) of the misbehaving node's stake is distributed to all nodes who participated in the audit vote, with a larger portion typically being rewarded to the node which initiated the audit.&#x20;

### **The Role of Witness Nodes**

In addition to task nodes, which provide microservices and execute the task directly, witness nodes can also be incentivized to secure any task by designing an audit function that redistributes staked rewards to witnesses who vote during the audit. For most tasks, there exists a significantly less computationally expensive process that can be used to verify the results, which means that even a smart phone or personal device can earn reasonable rewards by auditing more hardware-heavy task nodes.



## **The Audit Function**

A task is not complete without an audit function. This simple JavaScript executable may query nodes operating the specific task executable and test their responses via the built-in REST API, or verify on-chain transactions match an intended flow, such as in bridge vault controls.

### **Writing Good Audits**

Typically, the main limitations of audits are repetition, frequency, and sample size, but luckily Koii's nodes provide lots of participants and implement an informal gradual consensus to provide flexibility in solving these issues.
<br />
When designing a task, there are some key points to keep in mind:

- Audits should always have deterministic outcomes
- Ensure health checks exist for REST endpoints
- Penalties should be greater for clearly malicious behaviour than accidental downtime
- Audit and task functionality can be separated into multiple tasks, if necessary
- Staking requirements should not be overly large relative to bounties
- Reputation over time and secondary tokens or NFTs can be used to permission task access

### **Economics & Risks**

For many applications, especially community initiatives such as content collectives, there may be enough participating users to provide all of the necessary hostings without undue costs. Under these circumstances, KOII collected from attention can be centrally pooled into community task contracts, ensuring a perpetual stream of tokens to cover bounty costs. <br />

In these cases, it may not be necessary to require an overly significant stake in KOII, and task creators may opt to instead require NFT ownership or secondary conditions such as an address whitelist to permission task operation, and audits may be less necessary since trust exists based on historical contributions instead of financial risk. <br />

**Note:** Unfortunately, there is always the risk that a previously honest participant may have their personal devices compromised without their knowledge, so it is always a good practice to implement additional safeguards beyond simply restricting access.

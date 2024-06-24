---
title: Key Components of a Koii Task
description: When a task is created, there are two key components that must be uploaded to the Koii network to initiate the task.
image: img/thumbnail.png
sidebar_label: Key Components
---

import Description from "@site/src/components/description";

![decorative banner](/img/concepts/tasks/key-components.svg)

<Description
  text="When a task is created, there are two key components that must be uploaded to
  the Koii network to initiate the task."
/>

## Executable

Every task is compiled into a single JavaScript executable file that contains all of the functions required to run the task. For more information on the functions required when writing a task, see [EZSandbox Lesson 1](https://github.com/koii-network/ezsandbox/tree/main/Lesson%201).

## Metadata

Task metadata is essential structured data that provides valuable information about a Koii task. By examining the metadata, node operators can gain a comprehensive understanding of a specific task. It is highly recommended to include key details such as the minimum computer specifications and reward structure within the metadata. This inclusion allows node operators to have a clear understanding of how rewards will be distributed, minimizing any potential confusion or uncertainty when executing your task.

There are two types of task metadata:

1. Data that is stored in an IPFS metadata file, which is done on task creation.

2. Data that are stored on K2, which is updated over time and reflects the latest state of the task.

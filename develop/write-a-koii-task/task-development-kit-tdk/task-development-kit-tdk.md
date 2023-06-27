---

title: Task Development Kit (TDK)
description: The following sections detail the use of Koii's Task Development Kit, which provides key components that will make it much easier to get started.
image: img/thumbnail.png
sidebar_label: Task Development Kit (TDK)

---

import ContentLink from "@site/src/components/contentLink";

# Task Development Kit (TDK)

![banner](../img/Task%20Development%20Kit%20(TDK).svg)

The following sections detail the use of Koii's task development Kit, which provides key components that will make it much easier to get started.

## The Task Namespace

When the [**executable**](/develop/koii-task-101/what-are-tasks/key-components/intro) runs inside of a task node, it will have access to a number of supported built-in functions for interacting with blockchains, preparing proofs, and generating cryptographic signatures.&#x20;

<ContentLink title="Using the Task Namespace" link="/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/" iconType="copy"/>

## Local Testing Environment

It can be quite complicated to design game theory and incentive models, so we provide a testing suite. This function utilizes `Jest` to perform one round of task testing your complete code. For more details, please check:

<ContentLink title="Testing Locally Using Jest" link="/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/" iconType="copy"/>

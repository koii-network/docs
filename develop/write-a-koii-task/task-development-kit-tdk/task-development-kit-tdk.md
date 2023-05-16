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

When the [**executable**](/develop/koii-task-101/what-are-tasks/key-components/) runs inside of a task node, it will have access to a number of supported built-in functions for interacting with blockchains, preparing proofs, and generating cryptographic signatures.&#x20;

<ContentLink title="Using the Task Namespace" link="/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/" iconType="copy"/>

## Local Testing Environment

It can be quite complicated to design game theory and incentive models, so we've built a simulation environment to help speed things up. The local testing kit features easy to use docker containers to help run lots of nodes, so that you can see what happens when they misbehave.

<ContentLink title="Developing Locally with Docker" link="/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/" iconType="copy"/>

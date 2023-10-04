---
title: Authentication and Security
description: When a task is created, there are two key components that must be uploaded to the Koii Network to initiate the task.
image: img/thumbnail.png
sidebar_label: Authentication and Security
---

When developing a REST API for any task, it is crucial to incorporate user authentication as a means to control access to the system. One way to achieve this is by maintaining a list of authorized addresses, which serves the purpose of allowing only explicitly authorized nodes to access the data. Regardless of the specific task at hand, the inclusion of an authorized addresses list is essential to restrict access to the system.

By implementing user authentication, the API ensures that only nodes included in the authorized list are permitted to make requests, while any other attempts to access the system are denied. This approach enhances the security of the system and ensures that it remains accessible solely to the intended users.. This concept is implemented in our [Linktree tutorial](/quickstart/linktree/intro).

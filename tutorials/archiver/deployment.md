---
title: Interacting with Nodes & Deployment
image: img/thumbnail.png
sidebar_label: Deployment
---

## Creating a Webpack & Deployment To IPFS

Before deploying our task, we must first convert it to
webpack format with by typing yarn webpack in our terminal.

We can use use create-task-cli package to deploy our webpacked application to IPFS.type npx @\_koii/create-task-cli@latest

Voila! Now you have your crawler deployed on Koii. Be sure to save the returned task id, as you will need it in Koii Node.

Within Koii Node, head over to My Node. Click “Advanced”, (at the bottom of the interface). Copy your Task Id and start running the task! Do not forget that in order to have the audit step working, you need at least two people. So invite a friend of yours to test your application in deployment.

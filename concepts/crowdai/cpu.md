---
title: CPU's vs GPU's
description: Gradual Consensus - Act quickly, react faster, and reward slowly.
image: img/thumbnail.png
sidebar_label: CPU's vs GPU's
---

import Tooltip from "@site/src/components/tooltip";

## The big GPU problem

The "big <Tooltip text="GPU"/>
problem" in Machine Learning (ML) and Artificial Intelligence (AI) is the difficulty of meeting the escalating demand for GPU resources to support the training of <Tooltip text="deep learning models"/> and large-scale <Tooltip text="AI workloads"/>.

GPUs have become the preferred hardware for accelerating ML training due to their capacity for parallel processing and matrix operations, essential for <Tooltip text="neural network"/> computations. However, as ML and AI applications become more intricate and investment in this field rises significantly, the availability of GPUs becomes a major constraint.

## Can CPU's emulate GPU's

While CPUs can handle machine learning tasks, they are typically less efficient than GPUs for training deep learning models due to architectural distinctions. GPUs possess numerous cores optimized for parallel processing, making them more adept at matrix operations and computations commonly used in neural networks.

However, if a significant number of CPUs are available, employing them in a distributed manner allows for <Tooltip text="parallelizing"/>
specific computations, leading to faster training processes. Techniques such as data parallelism and model parallelism can be used to distribute the workload across CPUs.

Checkout how we tackle this problem in our <Tooltip text="federated learning"/> section.

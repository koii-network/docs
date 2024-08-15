---
title: Installing Namespace Wrapper
description: Learn how to install namespace wrapper, the Koii package for enabling interaction between tasks and the blockchain.
image: img/thumbnail.png
sidebar_label: Installing Namespace Wrapper
---

:::note
If you are using the [task template](https://github.com/koii-network/task-template), the namespace wrapper has already been installed.
:::

## Installation

In your task, install namespace wrapper via NPM:

```sh
npm i @_koii/namespace-wrapper
```

## Import the module

At the top of a file where you want to use the wrapper, add the following lines:

```js
const { namespaceWrapper, taskNodeAdministered } = require("@_koii/namespace-wrapper");
```

If you prefer ES Modules:

```js
import { namespaceWrapper, taskNodeAdministered } from '@_koii/namespace-wrapper';
```

## Initialization

The namespace wrapper detects whether it's running locally or in the node and initializes itself accordingly.

## Calling namespace wrapper methods

Namespace wrapper methods are called by using the namespace wrapper object like so:

```js
namespaceWrapper.methodName()
```

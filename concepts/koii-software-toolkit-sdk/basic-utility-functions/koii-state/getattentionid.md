---
title: getAttentionId
description: This function gets the attention contract ID running on the bundler.
image: img/thumbnail.png
sidebar_label: getAttentionId
---

import Tooltip from "@site/src/components/tooltip";

# getAttentionId

This function gets the <Tooltip text="attention contract"/> ID running on the bundler.

### Example Code

```javascript
const knode = require("@_koii/sdk/node");
const ktools = new knode.Node();

async function testGetAttentionId() {
  const attentionContractID = await ktools.getAttentionId();
  console.log("attentionContractID :", attentionContractID);
}

testGetAttentionId();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
attentionContractID : NwaSMGCdz6Yu5vNjlMtCNBmfEkjYfT-dfYkbQQDGn5s
```

### Returns

**Promise `<string>`** - <Tooltip text="Attention contract"/>
ID running on the bundler as a string

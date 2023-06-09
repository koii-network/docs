---
title: API Endpoints (Optional)
description: You can define your own express API endpoints by extending the namespace express function.
image: img/thumbnail.png
sidebar_label: API Endpoints (Optional)
---

# API Endpoints (Optional)

You can define your own express API endpoints by extending the namespace express function. You can then call these endpoints to get data needed to validate a node or as an endpoint for a web application. This would be defined at the bottom of your executable. An example of an API endpoint is listed below:

```javascript
if (namespace.app) {
  namespace.express("post", "/accept-cid", async (req, res) => {
    const cid = req.body.cid;
    const result = dosomething(cid);
    res.status(200).json({ message: "cid added to the submission list" });
  });
}
```

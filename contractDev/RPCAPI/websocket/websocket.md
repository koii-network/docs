---
title: Koii RPC Websocket Methods
image: img/thumbnail.png
sidebar_label: Koii RPC Websocket
---


After connecting to the RPC PubSub websocket at `ws://<ADDRESS>/`:

*   Submit subscription requests to the websocket using the methods below
*   Multiple subscriptions may be active at once
*   Many subscriptions take the optional [`commitment` parameter](/develop/rpcapi/intro#configuring-state-commitment), defining how finalized a change should be to trigger a notification. For subscriptions, if commitment is unspecified, the default value is `finalized`.

RPC PubSub WebSocket Endpoint
-----------------------------------------------------------------

Default port: `10900`

*   ws://localhost:10900
*   [http://192.168.1.88:10900](http://192.168.1.88:10900/)

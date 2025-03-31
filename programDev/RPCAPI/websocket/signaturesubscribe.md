---
title: signatureSubscribe RPC Method
image: img/thumbnail.png
sidebar_label: signatureSubscribe
---
Subscribe to receive a notification when the transaction with the given signature reaches the specified commitment level.

:::warning
This is a subscription to a single notification. It is automatically cancelled by the server once the notification, `signatureNotification`, is sent by the RPC.
:::
### Parameters
`string` **required**
transaction signature, as base-58 encoded string

:::info
The transaction signature must be the first signature from the transaction (see transaction id for more details).
:::
`object` **optional**
Configuration object containing the following fields:
- [commitment](/develop/rpcapi/intro#configuring-state-commitment) `string` **optional**
- enableReceivedNotification `bool` **optional**
Whether or not to subscribe for notifications when signatures are received by the RPC, in addition to when they are processed.

### Result

`<integer>` - subscription id (needed to unsubscribe)

### Code sample

```sh
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "signatureSubscribe",
  "params": [
    "2EBVM6cB8vAAD93Ktr6Vd8p67XPbQzCJX47MpReuiCXJAtcjaxpvWpcg9Ege1Nr5Tk3a2GFrByT7WPBjdsTycY9b",
    {
      "commitment": "finalized",
      "enableReceivedNotification": false
    }
  ]
}
```


### Response

```json
{ "jsonrpc": "2.0", "result": 0, "id": 1 }
```


#### Notification Format:

The notification will be an RpcResponse JSON object with value containing an object with:

*   `slot: <u64>` - The corresponding slot.
*   `value: <object|string>` - a notification value of `RpcSignatureResult`, resulting in either:
    *   when `enableReceivedNotification` is `true` and the signature is received: the literal string `"receivedSignature"`, or
    *   when the signature is processed: `err: <object|null>`:
        *   `null` if the transaction succeeded in being processed at the specified commitment level, or
        *   a `TransactionError`, if the transaction failed

#### Example responses:

The following is an example response of a notification from a successfully **processed** transactions:

```
{
  "jsonrpc": "2.0",
  "method": "signatureNotification",
  "params": {
    "result": {
      "context": {
        "slot": 5207624
      },
      "value": {
        "err": null
      }
    },
    "subscription": 24006
  }
}
```


The following is an example response of a notification from a successfully **received** transaction signature:

```
{
  "jsonrpc": "2.0",
  "method": "signatureNotification",
  "params": {
    "result": {
      "context": {
        "slot": 5207624
      },
      "value": "receivedSignature"
    },
    "subscription": 24006
  }
}
```

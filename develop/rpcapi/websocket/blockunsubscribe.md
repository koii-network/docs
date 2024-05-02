--- 
title: blockUnsubscribe RPC Method 
image: img/thumbnail.png 
sidebar_label: blockUnsubscribe
---  
Unsubscribe from block notifications

### Parameters 

`integer` required  

subscription id to cancel

### Result 

`<bool>` - unsubscribe success message

### Code sample 

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "blockUnsubscribe",
  "params": [0]
}
```


### Response 

```
{ "jsonrpc": "2.0", "result": true, "id": 1 }
```
